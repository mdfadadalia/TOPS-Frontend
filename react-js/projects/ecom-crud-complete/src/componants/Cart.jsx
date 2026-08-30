import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartSubtotal, clearCart, fetchCart, removeCartItem, updateCartItem } from '../store/slices/cartSlice';
import { formatCurrency } from '../utils/normalize';
import { DataState } from './common/DataState';

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isInitializing } = useSelector((state) => state.auth);
  const { items, loading, loaded, mutating, error } = useSelector((state) => state.cart);
  const subtotal = useSelector(cartSubtotal);
  const shipping = subtotal > 0 && subtotal < 2000 ? 99 : 0;

  useEffect(() => {
    if (isAuthenticated) dispatch(fetchCart());
  }, [isAuthenticated, dispatch]);

  if (!isInitializing && !isAuthenticated) {
    return (
      <main className="main">
        <section className="cart section--lg container">
          <p>Please sign in to view your cart.</p>
          <Link to="/auth" state={{ from: { pathname: '/cart' } }} className="btn1 btn1--md">
            Login / Register
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="main">
      {/*=============== BREADCRUMB ===============*/}
      <section className="breadcrumb">
        <ul className="breadcrumb__list flex container">
          <li><Link to="/" className="breadcrumb__link">Home</Link></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">Cart</span></li>
        </ul>
      </section>
      {/*=============== CART ===============*/}
      <section className="cart section--lg container">
        <DataState
          loading={loading || !loaded}
          loadingLabel="Loading your cart…"
          error={error}
          onRetry={() => dispatch(fetchCart())}
          isEmpty={items.length === 0}
          emptyTitle="Your cart is empty"
          emptyHint="Browse the shop to find something you'll love."
          emptyAction={(
            <Link to="/shop" className="btn1 flex btn1__md">
              <i className="fi-rs-shopping-bag" /> Continue Shopping
            </Link>
          )}
        >
          <>
            <div className="table__container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.itemId}>
                      <td>
                        <img src={item.image} alt="" className="table__img" />
                      </td>
                      <td>
                        <h3 className="table__title">{item.name}</h3>
                      </td>
                      <td>
                        <span className="table__price">{formatCurrency(item.price)}</span>
                      </td>
                      <td>
                        <input
                          type="number"
                          min={1}
                          className="quantity"
                          value={item.quantity}
                          disabled={mutating}
                          onChange={(e) => {
                            const nextQty = Math.max(1, Number(e.target.value) || 1);
                            dispatch(updateCartItem({ itemId: item.itemId, quantity: nextQty }));
                          }}
                        />
                      </td>
                      <td>
                        <span className="subtotal">{formatCurrency(item.price * item.quantity)}</span>
                      </td>
                      <td>
                        <i
                          className="fi fi-rs-trash table__trash"
                          style={{ cursor: 'pointer' }}
                          onClick={() => dispatch(removeCartItem(item.itemId))}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart__actions">
              <a
                href="#"
                className="btn1 flex btn1_md"
                onClick={(e) => { e.preventDefault(); dispatch(clearCart()); }}
              >
                <i className="fi-rs-shuffle" /> Clear Cart
              </a>
              <Link to="/shop" className="btn1 flex btn1__md">
                <i className="fi-rs-shopping-bag" /> Continue Shopping
              </Link>
            </div>
            <div className="divider">
              <i className="fi fi-rs-fingerprint" />
            </div>
            <div className="cart__group grid">
              <div />
              <div className="cart__total">
                <h3 className="section__title">Cart Totals</h3>
                <table className="cart__total-table">
                  <tbody>
                    <tr>
                      <td><span className="cart__total-title">Cart Subtotal</span></td>
                      <td><span className="cart__total-price">{formatCurrency(subtotal)}</span></td>
                    </tr>
                    <tr>
                      <td><span className="cart__total-title">Shipping</span></td>
                      <td><span className="cart__total-price">{shipping ? formatCurrency(shipping) : 'Free Shipping'}</span></td>
                    </tr>
                    <tr>
                      <td><span className="cart__total-title">Total</span></td>
                      <td><span className="cart__total-price">{formatCurrency(subtotal + shipping)}</span></td>
                    </tr>
                  </tbody>
                </table>
                <a
                  href="#"
                  className="btn1 flex btn1--md"
                  onClick={(e) => { e.preventDefault(); navigate('/checkout'); }}
                >
                  <i className="fi fi-rs-box-alt" /> Proceed To Checkout
                </a>
              </div>
            </div>
          </>
        </DataState>
      </section>
    </main>
  );
};

export default Cart;
