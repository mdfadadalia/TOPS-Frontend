import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  return <>
  {/*=============== MAIN ===============*/}
  <main className="main">
    {/*=============== BREADCRUMB ===============*/}
    <section className="breadcrumb">
      <ul className="breadcrumb__list flex container">
        <li>
          <Link to="/" className="breadcrumb__link">
            Home
          </Link>
        </li>
        <li>
          <span className="breadcrumb__link" />
          &gt;
        </li>
        <li>
          <span className="breadcrumb__link">Shop</span>
        </li>
        <li>
          <span className="breadcrumb__link" />
          &gt;
        </li>
        <li>
          <span className="breadcrumb__link">Cart</span>
        </li>
      </ul>
    </section>
    {/*=============== CART ===============*/}
    <section className="cart section--lg container">
      <div className="table__container">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Rename</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="./assets//img/product-1-2.jpg"
                  alt=""
                  className="table__img"
                />
              </td>
              <td>
                <h3 className="table__title">
                  J.Crew Mercantile Women's Short-Sleeve
                </h3>
                <p className="table__description">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </td>
              <td>
                <span className="table__price">$110</span>
              </td>
              <td>
                <input type="number" defaultValue={3} className="quantity" />
              </td>
              <td>
                <span className="subtotal">$220</span>
              </td>
              <td>
                <i className="fi fi-rs-trash table__trash" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="./assets//img/product-7-1.jpg"
                  alt=""
                  className="table__img"
                />
              </td>
              <td>
                <h3 className="table__title">Amazon Essentials Women's Tank</h3>
                <p className="table__description">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </td>
              <td>
                <span className="table__price">$110</span>
              </td>
              <td>
                <input type="number" defaultValue={3} className="quantity" />
              </td>
              <td>
                <span className="subtotal">$220</span>
              </td>
              <td>
                <i className="fi fi-rs-trash table__trash" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="./assets//img/product-2-1.jpg"
                  alt=""
                  className="table__img"
                />
              </td>
              <td>
                <h3 className="table__title">
                  Amazon Brand - Daily Ritual Women's Jersey
                </h3>
                <p className="table__description">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </td>
              <td>
                <span className="table__price">$110</span>
              </td>
              <td>
                <input type="number" defaultValue={3} className="quantity" />
              </td>
              <td>
                <span className="subtotal">$220</span>
              </td>
              <td>
                <i className="fi fi-rs-trash table__trash" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart__actions">
        <a href="#" className="btn1 flex btn1_md">
          <i className="fi-rs-shuffle" /> Update Cart
        </a>
        <a href="#" className="btn1 flex btn1__md">
          <i className="fi-rs-shopping-bag" /> Continue Shopping
        </a>
      </div>
      <div className="divider">
        <i className="fi fi-rs-fingerprint" />
      </div>
      <div className="cart__group grid">
        <div>
          <div className="cart__shippinp">
            <h3 className="section__title">Calculate Shipping</h3>
            <form action="" className="form grid">
              <input
                type="text"
                className="form__input"
                placeholder="State / Country"
              />
              <div className="form__group grid">
                <input type="text" className="form__input" placeholder="City" />
                <input
                  type="text"
                  className="form__input"
                  placeholder="PostCode"
                />
              </div>
              <div className="form__btn">
                <button className="btn flex btn--sm">
                  <i className="fi-rs-shuffle" /> Update
                </button>
              </div>
            </form>
          </div>
          <div className="cart__coupon">
            <h3 className="section__title">Apply Coupon</h3>
            <form action="" className="coupon__form form grid">
              <div className="form__group grid">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Enter Your Coupon"
                />
                <div className="form__btn">
                  <button className="btn flex btn--sm">
                    <i className="fi-rs-label" /> Aplly
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="cart__total">
          <h3 className="section__title">Cart Totals</h3>
          <table className="cart__total-table">
            <tbody>
              <tr>
                <td>
                  <span className="cart__total-title">Cart Subtotal</span>
                </td>
                <td>
                  <span className="cart__total-price">$240.00</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="cart__total-title">Shipping</span>
                </td>
                <td>
                  <span className="cart__total-price">$10.00</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="cart__total-title">Total</span>
                </td>
                <td>
                  <span className="cart__total-price">$250.00</span>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/checkout" className="btn1 flex btn1--md">
            <i className="fi fi-rs-box-alt" /> Proceed To Checkout
          </Link>
        </div>
      </div>
    </section>
    {/*=============== NEWSLETTER ===============*/}
    <section className="newsletter section">
      <div className="newsletter__container container grid">
        <h3 className="newsletter__title flex">
          <img
            src="./assets/img/icon-email.svg"
            alt=""
            className="newsletter__icon"
          />
          Sign in to Newsletter
        </h3>
        <p className="newsletter__description">
          ...and receive $25 coupon for first shopping.
        </p>
        <form action="" className="newsletter__form">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="newsletter__input"
          />
          <button type="submit" className="newsletter__btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </main>
</>

}
