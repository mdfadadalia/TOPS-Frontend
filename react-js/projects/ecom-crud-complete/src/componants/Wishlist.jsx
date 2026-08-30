import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { formatCurrency } from '../utils/normalize';
import { EmptyState } from './common/DataState';

export const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.wishlist.items);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const moveToCart = (product) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { from: { pathname: '/wishlist' } } });
      return;
    }
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
    dispatch(removeWishlistItem(product.id));
  };

  return (
    <main className="main">
      {/*=============== BREADCRUMB ===============*/}
      <section className="breadcrumb">
        <ul className="breadcrumb__list flex container">
          <li><Link to="/" className="breadcrumb__link">Home</Link></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">Wishlist</span></li>
        </ul>
      </section>
      <section className="cart section--lg container">
        {items.length === 0 ? (
          <EmptyState
            title="Your wishlist is empty"
            hint="Save items you love to find them here later."
            icon="fi-rs-heart"
            action={<Link to="/shop" className="btn1 flex btn1__md"><i className="fi-rs-shopping-bag" /> Browse Products</Link>}
          />
        ) : (
          <div className="table__container">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((product) => (
                  <tr key={product.id}>
                    <td><img src={product.images?.[0]} alt="" className="table__img" /></td>
                    <td>
                      <Link to={`/details/${product.id}`}>
                        <h3 className="table__title">{product.name}</h3>
                      </Link>
                    </td>
                    <td><span className="table__price">{formatCurrency(product.price)}</span></td>
                    <td>
                      <a href="#" className="btn btn--sm" onClick={(e) => { e.preventDefault(); moveToCart(product); }}>
                        Add to Cart
                      </a>
                    </td>
                    <td>
                      <i
                        className="fi fi-rs-trash table__trash"
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(removeWishlistItem(product.id))}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default Wishlist;
