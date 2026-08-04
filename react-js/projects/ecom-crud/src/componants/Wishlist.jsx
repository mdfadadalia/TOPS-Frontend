import React from 'react'
import { Link } from 'react-router-dom'

export const Wishlist = () => {
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
          <span className="breadcrumb__link">Wishlist</span>
        </li>
      </ul>
    </section>
    {/*=============== WISHLIST ===============*/}
    <section className="wishlist section--lg container">
      <div className="table__container">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
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
                <span className="table__stock">In Stock</span>
              </td>
              <td>
                <a href="#" className="btn1 btn1--sm">
                  Add to Cart
                </a>
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
                <span className="table__stock">In Stock</span>
              </td>
              <td>
                <a href="#" className="btn1 btn1--sm">
                  Add to Cart
                </a>
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
                <span className="table__stock">In Stock</span>
              </td>
              <td>
                <a href="#" className="btn1 btn1--sm">
                  Add to Cart
                </a>
              </td>
              <td>
                <i className="fi fi-rs-trash table__trash" />
              </td>
            </tr>
          </tbody>
        </table>
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
