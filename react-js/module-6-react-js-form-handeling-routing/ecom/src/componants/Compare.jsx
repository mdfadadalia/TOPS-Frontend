import React from 'react'
import { Link } from 'react-router-dom'

const Compare = () => {
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
          <span className="breadcrumb__link">&gt;</span>
        </li>
        <li>
          <span className="breadcrumb__link">Shop</span>
        </li>
        <li>
          <span className="breadcrumb__link">&gt;</span>
        </li>
        <li>
          <span className="breadcrumb__link">Compare</span>
        </li>
      </ul>
    </section>
    {/*=============== COMPARE ===============*/}
    <section className="compare container section--lg">
      <table className="compare__table">
        <tbody>
          <tr>
            <th>Image</th>
            <td>
              <img
                src="./assets/img/product-2-1.jpg"
                alt=""
                className="compare__img"
              />
            </td>
            <td>
              <img
                src="./assets/img/product-4-1.jpg"
                alt=""
                className="compare__img"
              />
            </td>
            <td>
              <img
                src="./assets/img/product-7-1.jpg"
                alt=""
                className="compare__img"
              />
            </td>
          </tr>
          <tr>
            <th>Name</th>
            <td>
              <h3 className="table__title">Plain Striola Shirts</h3>
            </td>
            <td>
              <h3 className="table__title">Chen Cardigan</h3>
            </td>
            <td>
              <h3 className="table__title">Henley Shirt</h3>
            </td>
          </tr>
          <tr>
            <th>Price</th>
            <td>
              <span className="table__price">$35</span>
            </td>
            <td>
              <span className="table__price">$67</span>
            </td>
            <td>
              <span className="table__price">$24</span>
            </td>
          </tr>
          <tr>
            <th>Description</th>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                perferendis nam, fuga reiciendis libero doloremque distinctio.
              </p>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                perferendis nam, fuga reiciendis libero doloremque distinctio.
              </p>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                perferendis nam, fuga reiciendis libero doloremque distinctio.
              </p>
            </td>
          </tr>
          <tr>
            <th>Colors</th>
            <td>
              <ul className="color__list compare__colors">
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(37, 100%, 65%)" }}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(353, 100%, 65%)" }}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(49, 100%, 60%)" }}
                  />
                </li>
              </ul>
            </td>
            <td>
              <ul className="color__list compare__colors">
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(37, 100%, 65%)" }}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(353, 100%, 65%)" }}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(49, 100%, 60%)" }}
                  />
                </li>
              </ul>
            </td>
            <td>
              <ul className="color__list compare__colors">
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(37, 100%, 65%)" }}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(353, 100%, 65%)" }}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="color__link"
                    style={{ backgroundColor: "hsl(49, 100%, 60%)" }}
                  />
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Stock</th>
            <td>
              <span className="table__stock">Out of stock</span>
            </td>
            <td>
              <span className="table__stock">Out of stock</span>
            </td>
            <td>
              <span className="table__stock">Out of stock</span>
            </td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>
              <span className="table__weight">150 gram</span>
            </td>
            <td>
              <span className="table__weight">150 gram</span>
            </td>
            <td>
              <span className="table__weight">150 gram</span>
            </td>
          </tr>
          <tr>
            <th>Dimensions</th>
            <td>
              <span className="table__dimension">N/A</span>
            </td>
            <td>
              <span className="table__dimension">N/A</span>
            </td>
            <td>
              <span className="table__dimension">N/A</span>
            </td>
          </tr>
          <tr>
            <th>Buy</th>
            <td>
              <a href="#" className="btn btm--sm">
                Add to Cart
              </a>
            </td>
            <td>
              <a href="#" className="btn btm--sm">
                Add to Cart
              </a>
            </td>
            <td>
              <a href="#" className="btn btm--sm">
                Add to Cart
              </a>
            </td>
          </tr>
          <tr>
            <th>Remove</th>
            <td>
              <i className="fi fi-rs-trash table__trash" />
            </td>
            <td>
              <i className="fi fi-rs-trash table__trash" />
            </td>
            <td>
              <i className="fi fi-rs-trash table__trash" />
            </td>
          </tr>
        </tbody>
      </table>
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
export default Compare