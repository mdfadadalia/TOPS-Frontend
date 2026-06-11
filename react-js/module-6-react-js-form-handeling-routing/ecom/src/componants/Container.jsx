

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Container = ({children}) => {
      
  return (
    <>
      {/*=============== HEADER ===============*/}
      <header className="header">        
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <img
              className="nav__logo-img"
              src="assets/img/logo.svg"
              alt="website logo"
            />
          </Link>
          <div className="nav__menu" id="nav-menu">
            <div className="nav__menu-top">
              <Link to="/" className="nav__menu-logo">
                <img src="./assets/img/logo.svg" alt="" />
              </Link>
              <div className="nav__close" id="nav-close">
                <i className="fi fi-rs-cross-small" />
              </div>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link active-link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="shop" className="nav__link">
                  Shop
                </Link>
              </li>
              <li className="nav__item">
                <Link to="accounts" className="nav__link">
                  My Account
                </Link>
              </li>
              <li className="nav__item">
                <Link to="compare" className="nav__link">
                  Compare
                </Link>
              </li>
              <li className="nav__item">
                <Link to="auth" className="nav__link">
                  Login
                </Link>
              </li>
            </ul>
            <div className="header__search">
              <input
                type="text"
                placeholder="Search For Items..."
                className="form__input"
              />
              <button className="search__btn">
                <img src="assets/img/search.png" alt="search icon" />
              </button>
            </div>
          </div>
          <div className="header__user-actions">
            <Link to="wishlist" className="header__action-btn" title="Wishlist">
              <img src="assets/img/icon-heart.svg" alt="" />
              <span className="count">3</span>
            </Link>
            <Link to="cart" className="header__action-btn" title="Cart">
              <img src="assets/img/icon-cart.svg" alt="" />
              <span className="count">3</span>
            </Link>
            <div className="header__action-btn nav__toggle" id="nav-toggle">
              <img src="./assets//img/menu-burger.svg" alt="" />
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
              <img
                src="./assets/img/logo.svg"
                alt=""
                className="footer__logo-img"
              />
            </Link>
            <h4 className="footer__subtitle">Contact</h4>
            <p className="footer__description">
              <span>Address:</span> 13 Tlemcen Road, Street 32, Beb-Wahren
            </p>
            <p className="footer__description">
              <span>Phone:</span> +01 2222 365 /(+91) 01 2345 6789
            </p>
            <p className="footer__description">
              <span>Hours:</span> 10:00 - 18:00, Mon - Sat
            </p>
            <div className="footer__social">
              <h4 className="footer__subtitle">Follow Me</h4>
              <div className="footer__links flex">
                <Link to="#">
                  <img
                    src="./assets/img/icon-facebook.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="./assets/img/icon-twitter.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="./assets/img/icon-instagram.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="./assets/img/icon-pinterest.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="./assets/img/icon-youtube.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Address</h3>
            <ul className="footer__links">
              <li>
                <Link to="#" className="footer__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">My Account</h3>
            <ul className="footer__links">
              <li>
                <Link to="#" className="footer__link">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  View Cart
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Track My Order
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Help
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__link">
                  Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Secured Payed Gateways</h3>
            <img
              src="./assets/img/payment-method.png"
              alt=""
              className="payment__img"
            />
          </div>
        </div>
        <div className="footer__bottom">
          <p className="copyright">© 2024 Evara. All right reserved</p>
          <span className="designer">Designer by Crypticalcoder</span>
        </div>
      </footer>
      {/*<!-=============== MAIN JS ===============>*/}

    </>
  );
};

export default Container;