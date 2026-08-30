import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCurrentProduct,
  fetchProduct,
  fetchRelatedProducts,
  submitProductReview,
} from '../store/slices/productSlice';
import { addToCart } from '../store/slices/cartSlice';
import { toggleWishlistItem } from '../store/slices/wishlistSlice';
import { formatCurrency, formatDate } from '../utils/normalize';
import ProductCard from './ProductCard';
import { LoadingState, ErrorState } from './common/DataState';

export const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current: product, related, loadingCurrent, error } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const wishlisted = useSelector((state) => product && state.wishlist.items.some((item) => item.id === product.id));

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState('info');
  const [reviewForm, setReviewForm] = useState({ rating: 5, comment: '' });
  const [reviewMessage, setReviewMessage] = useState('');

  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(fetchRelatedProducts(id));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting local UI state when navigating to a different product
    setActiveImage(0);
    setQuantity(1);
    return () => dispatch(clearCurrentProduct());
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { from: { pathname: `/details/${id}` } } });
      return;
    }
    dispatch(addToCart({ productId: product.id, quantity }));
  };

  const submitReview = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      navigate('/auth', { state: { from: { pathname: `/details/${id}` } } });
      return;
    }
    setReviewMessage('');
    const result = await dispatch(submitProductReview({ id, details: reviewForm }));
    if (submitProductReview.fulfilled.match(result)) {
      setReviewForm({ rating: 5, comment: '' });
      setReviewMessage('Thanks! Your review has been submitted.');
    } else {
      setReviewMessage(result.payload?.message || 'Unable to submit your review right now.');
    }
  };

  if (loadingCurrent) {
    return (
      <main className="main">
        <section className="section--lg container">
          <LoadingState label="Loading product…" />
        </section>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="main">
        <section className="section--lg container">
          <ErrorState
            message={error || 'This product could not be found.'}
            onRetry={() => {
              dispatch(fetchProduct(id));
              dispatch(fetchRelatedProducts(id));
            }}
          />
          <div className="text-center">
            <Link to="/shop" className="btn1">Back to shop</Link>
          </div>
        </section>
      </main>
    );
  }

  const images = product.images.length ? product.images : ['/assets/img/product-8-1.jpg'];

  return (
    <main className="main">
      {/*=============== BREADCRUMB ===============*/}
      <section className="breadcrumb">
        <ul className="breadcrumb__list flex container">
          <li><Link to="/" className="breadcrumb__link">Home</Link></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">{product.category || 'Shop'}</span></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">{product.name}</span></li>
        </ul>
      </section>
      {/*=============== DETAILS ===============*/}
      <section className="details section--lg">
        <div className="details__container container grid">
          <div className="details__group">
            <img src={images[activeImage]} alt={product.name} className="details__img" />
            <div className="details__small-images grid">
              {images.map((img, index) => (
                <img
                  key={img + index}
                  src={img}
                  alt=""
                  className="details__small-img"
                  style={{ cursor: 'pointer', outline: index === activeImage ? '2px solid var(--accent, #2f8f4e)' : 'none' }}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>
          <div className="details__group">
            <h3 className="details__title">{product.name}</h3>
            {product.brand && (
              <p className="details__brand">Brand: <span>{product.brand}</span></p>
            )}
            <div className="details__price flex">
              <span className="new__price">{formatCurrency(product.price)}</span>
              {product.oldPrice && <span className="old__price">{formatCurrency(product.oldPrice)}</span>}
              {product.discountPercent > 0 && <span className="save__price">{product.discountPercent}% Off</span>}
            </div>
            {product.description && <p className="short__description">{product.description}</p>}

            {product.colors?.length > 0 && (
              <div className="details__color flex">
                <span className="details__color-title">Color</span>
                <ul className="color__list">
                  {product.colors.map((c) => (
                    <li key={c}><a href="#" className="color__link" style={{ backgroundColor: c }} onClick={(e) => e.preventDefault()} /></li>
                  ))}
                </ul>
              </div>
            )}
            {product.sizes?.length > 0 && (
              <div className="details__size flex">
                <span className="details__size-title">Size</span>
                <ul className="size__list">
                  {product.sizes.map((s) => (
                    <li key={s}><a href="#" className="size__link" onClick={(e) => e.preventDefault()}>{s}</a></li>
                  ))}
                </ul>
              </div>
            )}

            <div className="details__action">
              <input
                type="number"
                min={1}
                max={product.stock || undefined}
                className="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
              />
              <a href="#" className="btn btn--sm" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                {product.inStock ? 'Add To Cart' : 'Out of Stock'}
              </a>
              <a
                href="#"
                className="details__action-btn"
                onClick={(e) => { e.preventDefault(); dispatch(toggleWishlistItem(product)); }}
              >
                <i className={wishlisted ? 'fi fi-sr-heart' : 'fi fi-rs-heart'} />
              </a>
            </div>
            <ul className="details__meta">
              {product.sku && <li className="meta__list flex"><span>SKU:</span>{product.sku}</li>}
              <li className="meta__list flex"><span>Category:</span>{product.category || '—'}</li>
              <li className="meta__list flex">
                <span>Availability:</span>{product.inStock ? `${product.stock} Items in Stock` : 'Out of stock'}
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*=============== DETAILS TAB ===============*/}
      <section className="details__tab container">
        <div className="detail__tabs">
          <span className={`detail__tab${tab === 'info' ? ' active-tab' : ''}`} onClick={() => setTab('info')}>
            Description
          </span>
          <span className={`detail__tab${tab === 'reviews' ? ' active-tab' : ''}`} onClick={() => setTab('reviews')}>
            Reviews ({product.reviewsCount})
          </span>
        </div>
        <div className="details__tabs-content">
          {tab === 'info' && (
            <div className="details__tab-content active-tab">
              <p>{product.description || 'No additional description has been provided for this product yet.'}</p>
            </div>
          )}
          {tab === 'reviews' && (
            <div className="details__tab-content active-tab">
              <div className="reviews__container grid">
                {product.reviews.length === 0 && <p>No reviews yet — be the first to review this product.</p>}
                {product.reviews.map((review, index) => (
                  <div className="review__single" key={review._id || index}>
                    <div>
                      <img src="/assets/img/avatar-1.jpg" alt="" className="review__img" />
                      <h4 className="review__title">{review.user?.name || review.name || 'Customer'}</h4>
                    </div>
                    <div className="review__data">
                      <div className="review__rating">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <i key={n} className={n <= (review.rating || 0) ? 'fi fi-sr-star' : 'fi fi-rs-star'} />
                        ))}
                      </div>
                      <p className="review__description">{review.comment}</p>
                      <span className="review__date">{formatDate(review.createdAt)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <form className="form grid mt-4" style={{ maxWidth: 480 }} onSubmit={submitReview}>
                <h3 className="checkout__title">Write a review</h3>
                <select
                  className="form__input"
                  value={reviewForm.rating}
                  onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>{n} star{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
                <textarea
                  className="form__input textarea"
                  placeholder="Share your thoughts about this product"
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  required
                />
                <button className="btn1 btn1--md" type="submit">Submit Review</button>
                {reviewMessage && <p className="mb-0">{reviewMessage}</p>}
              </form>
            </div>
          )}
        </div>
      </section>
      {related.length > 0 && (
        <section className="products container section">
          <h3 className="section__title"><span>Related</span> Products</h3>
          <div className="products__container grid">
            {related.filter((p) => p.id !== product.id).slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Details;
