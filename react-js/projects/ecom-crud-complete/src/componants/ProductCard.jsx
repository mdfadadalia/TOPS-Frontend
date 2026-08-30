import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlistItem } from '../store/slices/wishlistSlice';
import { toggleCompareItem } from '../store/slices/compareSlice';
import { addToCart } from '../store/slices/cartSlice';
import { formatCurrency } from '../utils/normalize';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const wishlisted = useSelector((state) => state.wishlist.items.some((item) => item.id === product.id));
  const compared = useSelector((state) => state.compare.items.some((item) => item.id === product.id));
  const image = product.images?.[0] || '/assets/img/product-1-1.jpg';
  const secondImage = product.images?.[1] || image;

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      navigate('/auth', { state: { from: { pathname: '/shop' } } });
      return;
    }
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
  };

  const handleWishlist = (event) => {
    event.preventDefault();
    dispatch(toggleWishlistItem(product));
  };

  const handleCompare = (event) => {
    event.preventDefault();
    dispatch(toggleCompareItem(product));
  };

  return (
    <div className="product__item">
      <div className="product__banner">
        <Link to={`/details/${product.id}`} className="product__images">
          <img
            src={image}
            alt={product.name}
            className="product__img default"
            loading="lazy"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/img/product-1-1.jpg'; }}
          />
          <img
            src={secondImage}
            alt={product.name}
            className="product__img hover"
            loading="lazy"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/img/product-1-1.jpg'; }}
          />
        </Link>
        <div className="product__actions">
          <Link to={`/details/${product.id}`} className="action__btn" aria-label="View product">
            <i className="fi fi-rs-eye" />
          </Link>
          <a
            href="#"
            className={`action__btn${wishlisted ? ' active' : ''}`}
            aria-label="Add to Wishlist"
            onClick={handleWishlist}
          >
            <i className={wishlisted ? 'fi fi-sr-heart' : 'fi fi-rs-heart'} />
          </a>
          <a
            href="#"
            className={`action__btn${compared ? ' active' : ''}`}
            aria-label="Compare"
            onClick={handleCompare}
          >
            <i className="fi fi-rs-shuffle" />
          </a>
        </div>
        {!product.inStock && <div className="product__badge light-pink">Out of stock</div>}
        {product.inStock && product.discountPercent > 0 && (
          <div className="product__badge light-green">-{product.discountPercent}%</div>
        )}
      </div>
      <div className="product__content">
        <span className="product__category">{product.category || 'General'}</span>
        <Link to={`/details/${product.id}`}>
          <h3 className="product__title">{product.name}</h3>
        </Link>
        <div className="product__rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <i key={n} className={n <= Math.round(product.rating) ? 'fi fi-sr-star' : 'fi fi-rs-star'} />
          ))}
        </div>
        <div className="product__price flex">
          <span className="new__price">{formatCurrency(product.price)}</span>
          {product.oldPrice && <span className="old__price">{formatCurrency(product.oldPrice)}</span>}
        </div>
        <a
          href="#"
          className="action__btn cart__btn"
          aria-label="Add To Cart"
          onClick={handleAddToCart}
          title={product.inStock ? 'Add to cart' : 'Out of stock'}
        >
          <i className="fi fi-rs-shopping-bag-add" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
