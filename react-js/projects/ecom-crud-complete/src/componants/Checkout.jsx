import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { cartSubtotal, clearCart, fetchCart } from '../store/slices/cartSlice';
import { clearLastPlacedOrder, confirmPayment, placeOrder, startPayment } from '../store/slices/ordersSlice';
import { formatCurrency } from '../utils/normalize';
import { loadRazorpayScript } from '../utils/loadRazorpay';
import { LoadingState, ErrorState, EmptyState } from './common/DataState';

export const Checkout = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isInitializing, user } = useSelector((state) => state.auth);
  const { items, loading: cartLoading, loaded: cartLoaded, error: cartError } = useSelector((state) => state.cart);
  const { placing, payingUp, lastPlaced, error } = useSelector((state) => state.orders);
  const subtotal = useSelector(cartSubtotal);
  const shipping = subtotal > 0 && subtotal < 2000 ? 99 : 0;
  const total = subtotal + shipping;

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [payError, setPayError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.name || '',
      email: user?.email || '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India',
      notes: '',
    },
  });

  useEffect(() => {
    if (isAuthenticated) dispatch(fetchCart());
    return () => dispatch(clearLastPlacedOrder());
  }, [isAuthenticated, dispatch]);

  if (!isInitializing && !isAuthenticated) {
    return (
      <main className="main">
        <section className="checkout section--lg container">
          <p>Please sign in to check out.</p>
          <Link to="/auth" state={{ from: { pathname: '/checkout' } }} className="btn1 btn1--md">
            Login / Register
          </Link>
        </section>
      </main>
    );
  }

  if (cartLoading || !cartLoaded) {
    return (
      <main className="main">
        <section className="checkout section--lg container">
          <LoadingState label="Loading your cart…" />
        </section>
      </main>
    );
  }

  if (cartError) {
    return (
      <main className="main">
        <section className="checkout section--lg container">
          <ErrorState message={cartError} onRetry={() => dispatch(fetchCart())} />
        </section>
      </main>
    );
  }

  if (lastPlaced) {
    return (
      <main className="main">
        <section className="checkout section--lg container">
          <h3 className="section__title">Thank you for your order!</h3>
          <p>
            Order <strong>#{lastPlaced.orderNumber}</strong> has been placed successfully.
            {lastPlaced.paymentMethod === 'cod'
              ? ' Pay in cash when your order arrives.'
              : ' We have received your payment.'}
          </p>
          <p>Order total: <strong>{formatCurrency(lastPlaced.total || total)}</strong></p>
          <div className="d-flex gap-2">
            <Link to="/accounts" className="btn1 btn1--md">View My Orders</Link>
            <Link to="/shop" className="btn btn--md">Continue Shopping</Link>
          </div>
        </section>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="main">
        <section className="checkout section--lg container">
          <EmptyState
            title="Your cart is empty"
            hint="Add a few products before checking out."
            action={<Link to="/shop" className="btn1 btn1--md">Go to Shop</Link>}
          />
        </section>
      </main>
    );
  }

  const onSubmit = async (formValues) => {
    setPayError('');
    const { fullName, email, phone, address, city, state, pincode, country, notes } = formValues;
    const shippingAddress = { fullName, email, phone, address, city, state, pincode, country };

    const orderResult = await dispatch(placeOrder({ shippingAddress, paymentMethod, notes }));
    if (!placeOrder.fulfilled.match(orderResult)) return;
    const order = orderResult.payload;

    if (paymentMethod === 'cod') {
      dispatch(clearCart());
      return;
    }

    // Online payment via Razorpay
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      setPayError('Unable to load the payment gateway. Please try Cash on Delivery instead.');
      return;
    }

    const paymentOrderResult = await dispatch(startPayment({ orderId: order.id, amount: order.total }));
    if (!startPayment.fulfilled.match(paymentOrderResult)) return;
    const paymentOrder = paymentOrderResult.payload || {};
    const razorpayOrderId = paymentOrder.razorpayOrderId || paymentOrder.id || paymentOrder.orderId;
    const amountPaise = paymentOrder.amount || Math.round((order.total || total) * 100);
    const key = paymentOrder.key || paymentOrder.keyId || import.meta.env.VITE_RAZORPAY_KEY_ID;

    if (!razorpayOrderId || !key) {
      setPayError('Payment could not be initialized. Please try again or use Cash on Delivery.');
      return;
    }

    const rzp = new window.Razorpay({
      key,
      amount: amountPaise,
      currency: paymentOrder.currency || 'INR',
      name: 'Evara Store',
      description: `Order #${order.orderNumber}`,
      order_id: razorpayOrderId,
      prefill: { name: fullName, email, contact: phone },
      theme: { color: '#2f8f4e' },
      handler: async (response) => {
        const verifyResult = await dispatch(
          confirmPayment({
            orderId: order.id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        );
        if (confirmPayment.fulfilled.match(verifyResult)) {
          dispatch(clearCart());
        } else {
          setPayError('Payment succeeded but verification failed. Please contact support with your order number.');
        }
      },
      modal: {
        ondismiss: () => setPayError('Payment was cancelled. You can try again or choose Cash on Delivery.'),
      },
    });
    rzp.open();
  };

  const busy = placing || payingUp;

  return (
    <main className="main">
      {/*=============== BREADCRUMB ===============*/}
      <section className="breadcrumb">
        <ul className="breadcrumb__list flex container">
          <li><Link to="/" className="breadcrumb__link">Home</Link></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">Shop</span></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">Checkout</span></li>
        </ul>
      </section>
      {/*=============== CHECKOUT ===============*/}
      <section className="checkout section--lg">
        <form className="checkout__container container grid" onSubmit={handleSubmit(onSubmit)}>
          <div className="checkout__group">
            <h3 className="section__title">Billing Details</h3>
            <div className="form grid">
              <input className="form__input" placeholder="Full name" {...register('fullName', { required: true })} />
              {errors.fullName && <span className="text-danger">Full name is required.</span>}
              <input className="form__input" placeholder="Address" {...register('address', { required: true })} />
              {errors.address && <span className="text-danger">Address is required.</span>}
              <div className="form__group grid">
                <input className="form__input" placeholder="City" {...register('city', { required: true })} />
                <input className="form__input" placeholder="State" {...register('state', { required: true })} />
              </div>
              <div className="form__group grid">
                <input className="form__input" placeholder="Postcode" {...register('pincode', { required: true })} />
                <input className="form__input" placeholder="Country" {...register('country', { required: true })} />
              </div>
              <input className="form__input" placeholder="Phone" {...register('phone', { required: true })} />
              {errors.phone && <span className="text-danger">Phone number is required.</span>}
              <input type="email" className="form__input" placeholder="Email" {...register('email', { required: true })} />
              <h3 className="checkout__title">Additional Information</h3>
              <textarea placeholder="Order note (optional)" className="form__input textarea" {...register('notes')} />
            </div>
          </div>
          <div className="checkout__group">
            <h3 className="section__title">Cart Totals</h3>
            <table className="order__table">
              <thead>
                <tr><th colSpan={2}>Products</th><th>Total</th></tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.itemId}>
                    <td><img src={item.image} alt="" className="order__img" /></td>
                    <td>
                      <h3 className="table__title">{item.name}</h3>
                      <p className="table__quantity">x {item.quantity}</p>
                    </td>
                    <td><span className="table__price">{formatCurrency(item.price * item.quantity)}</span></td>
                  </tr>
                ))}
                <tr>
                  <td><span className="order__subtitle">Subtotal</span></td>
                  <td colSpan={2}><span className="table__price">{formatCurrency(subtotal)}</span></td>
                </tr>
                <tr>
                  <td><span className="order__subtitle">Shipping</span></td>
                  <td colSpan={2}>
                    <span className="table__price">{shipping ? formatCurrency(shipping) : 'Free Shipping'}</span>
                  </td>
                </tr>
                <tr>
                  <td><span className="order__subtitle">Total</span></td>
                  <td colSpan={2}><span className="order__grand-total">{formatCurrency(total)}</span></td>
                </tr>
              </tbody>
            </table>
            <div className="payment__methods">
              <h3 className="checkout__title payment__title">Payment</h3>
              <div className="payment__option flex">
                <input
                  type="radio"
                  name="radio"
                  id="cod"
                  className="payment__input"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                <label htmlFor="cod" className="payment__label">Cash on Delivery</label>
              </div>
              <div className="payment__option flex">
                <input
                  type="radio"
                  name="radio"
                  id="razorpay"
                  className="payment__input"
                  checked={paymentMethod === 'razorpay'}
                  onChange={() => setPaymentMethod('razorpay')}
                />
                <label htmlFor="razorpay" className="payment__label">Pay Online (Cards / UPI / Netbanking)</label>
              </div>
            </div>
            {(error || payError) && (
              <p className="text-danger d-flex align-items-center gap-2">
                <i className="fi fi-rs-triangle-warning" /> {payError || error}
              </p>
            )}
            <button className="btn1 btn1--md" type="submit" disabled={busy}>
              {busy ? 'Placing order…' : 'Place Order'}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Checkout;
