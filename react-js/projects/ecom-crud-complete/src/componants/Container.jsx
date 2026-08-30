import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartCount, fetchCart } from '../store/slices/cartSlice';
import { logoutUser } from '../store/slices/authSlice';

const Container = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const itemsInCart = useSelector(cartCount);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) dispatch(fetchCart());
  }, [isAuthenticated, dispatch]);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(query.trim() ? `/shop?search=${encodeURIComponent(query.trim())}` : '/shop');
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/');
  };

  return (
    <>
      {/*=============== HEADER ===============*/}
      <header className="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <img className="nav__logo-img" src="/assets/img/logo.svg" alt="website logo" />
          </Link>
          <div className={`nav__menu${menuOpen ? ' show-menu' : ''}`} id="nav-menu">
            <div className="nav__menu-top">
              <Link to="/" className="nav__menu-logo">
                <img src="/assets/img/logo.svg" alt="" />
              </Link>
              <div className="nav__close" id="nav-close" onClick={() => setMenuOpen(false)}>
                <i className="fi fi-rs-cross-small" />
              </div>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/shop" className="nav__link" onClick={() => setMenuOpen(false)}>
                  Shop
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/accounts" className="nav__link" onClick={() => setMenuOpen(false)}>
                  My Account
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/compare" className="nav__link" onClick={() => setMenuOpen(false)}>
                  Compare
                </Link>
              </li>
              {isAuthenticated ? (
                <li className="nav__item">
                  <button type="button" className="nav__link" style={{ background: 'none', border: 0 }} onClick={handleLogout}>
                    Logout{user?.name ? ` (${user.name.split(' ')[0]})` : ''}
                  </button>
                </li>
              ) : (
                <li className="nav__item">
                  <Link to="/auth" className="nav__link" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <form className="header__search" onSubmit={submitSearch}>
              <input
                type="text"
                placeholder="Search For Items..."
                className="form__input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button className="search__btn" type="submit">
                <img src="/assets/img/search.png" alt="search icon" />
              </button>
            </form>
          </div>
          <div className="header__user-actions">
            <Link to="/wishlist" className="header__action-btn" title="Wishlist">
              <img src="/assets/img/icon-heart.svg" alt="" />
              <span className="count">{wishlistCount}</span>
            </Link>
            <Link to="/cart" className="header__action-btn" title="Cart">
              <img src="/assets/img/icon-cart.svg" alt="" />
              <span className="count">{itemsInCart}</span>
            </Link>
            <div className="header__action-btn nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(true)}>
              <img src="/assets/img/menu-burger.svg" alt="" />
            </div>
          </div>
        </nav>
      </header>

      {children}

      {/*=============== FOOTER ===============*/}
      <footer className="footer container">
        <div className="footer__container grid">
          <div className="footer__content">
            <Link to="/" className="footer__logo">
              <img src="/assets/img/logo.svg" alt="" className="footer__logo-img" />
            </Link>
            <h4 className="footer__subtitle">Contact</h4>
            <p className="footer__description">
              <span>Address:</span> 13 Tlemcen Road, Street 32, Beb-Wahren
            </p>
            <p className="footer__description">
              <span>Phone:</span> +91 12345 67890
            </p>
            <p className="footer__description">
              <span>Hours:</span> 10:00 - 18:00, Mon - Sat
            </p>
            <div className="footer__social">
              <h4 className="footer__subtitle">Follow Me</h4>
              <div className="footer__links flex">
                <a href="#"><img src="/assets/img/icon-facebook.svg" alt="" className="footer__social-icon" /></a>
                <a href="#"><img src="/assets/img/icon-twitter.svg" alt="" className="footer__social-icon" /></a>
                <a href="#"><img src="/assets/img/icon-instagram.svg" alt="" className="footer__social-icon" /></a>
                <a href="#"><img src="/assets/img/icon-pinterest.svg" alt="" className="footer__social-icon" /></a>
                <a href="#"><img src="/assets/img/icon-youtube.svg" alt="" className="footer__social-icon" /></a>
              </div>
            </div>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              <li><Link to="/shop" className="footer__link">Shop</Link></li>
              <li><Link to="/compare" className="footer__link">Compare</Link></li>
              <li><Link to="/wishlist" className="footer__link">Wishlist</Link></li>
              <li><Link to="/cart" className="footer__link">Cart</Link></li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">My Account</h3>
            <ul className="footer__links">
              <li><Link to="/auth" className="footer__link">Sign In</Link></li>
              <li><Link to="/cart" className="footer__link">View Cart</Link></li>
              <li><Link to="/wishlist" className="footer__link">My Wishlist</Link></li>
              <li><Link to="/accounts" className="footer__link">Track My Order</Link></li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Secured Payment Gateways</h3>
            <img src="/assets/img/payment-method.png" alt="" className="payment__img" />
          </div>
        </div>
        <div className="footer__bottom">
          <p className="copyright">© {new Date().getFullYear()} Evara. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Container;
