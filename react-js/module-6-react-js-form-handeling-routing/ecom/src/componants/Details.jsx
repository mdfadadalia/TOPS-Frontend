import React from 'react'

export const Details = () => {
  return <>
  {/*=============== MAIN ===============*/}
  <main className="main">
    {/*=============== BREADCRUMB ===============*/}
    <section className="breadcrumb">
      <ul className="breadcrumb__list flex container">
        <li>
          <Link to="/ className="breadcrumb__link">
            Home
          </a>
        </li>
        <li>
          <span className="breadcrumb__link" />
          &gt;
        </li>
        <li>
          <span className="breadcrumb__link">Fashion</span>
        </li>
        <li>
          <span className="breadcrumb__link" />
          &gt;
        </li>
        <li>
          <span className="breadcrumb__link">Henley Shirt</span>
        </li>
      </ul>
    </section>
    {/*=============== DETAILS ===============*/}
    <section className="details section--lg">
      <div className="details__container container grid">
        <div className="details__group">
          <img
            src="./assets/img/product-8-1.jpg"
            alt=""
            className="details__img"
          />
          <div className="details__small-images grid">
            <img
              src="./assets/img/product-8-2.jpg"
              alt=""
              className="details__small-img"
            />
            <img
              src="./assets/img/product-8-1.jpg"
              alt=""
              className="details__small-img"
            />
            <img
              src="./assets/img/product-8-2.jpg"
              alt=""
              className="details__small-img"
            />
          </div>
        </div>
        <div className="details__group">
          <h3 className="details__title">Henley Shirt</h3>
          <p className="details__brand">
            Brand: <span>adidas</span>
          </p>
          <div className="details__price flex">
            <span className="new__price">$116</span>
            <span className="old__price">$200.00</span>
            <span className="save__price">25% Off</span>
          </div>
          <p className="short__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            fuga. Quo blanditiis recusandae facere nobis cum optio, inventore
            aperiam placeat, quis maxime nam officiis illum? Optio et nisi eius,
            inventore impedit ratione sunt, cumque, eligendi asperiores iste
            porro non error?
          </p>
          <ul className="products__list">
            <li className="list__item flex">
              <i className="fi-rs-crown" /> 1 Year Al Jazeera Brand Warranty
            </li>
            <li className="list__item flex">
              <i className="fi-rs-refresh" /> 30 Days Return Policy
            </li>
            <li className="list__item flex">
              <i className="fi-rs-credit-card" /> Cash on Delivery available
            </li>
          </ul>
          <div className="details__color flex">
            <span className="details__color-title">Color</span>
            <ul className="color__list">
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
              <li>
                <a
                  href="#"
                  className="color__link"
                  style={{ backgroundColor: "hsl(304, 100%, 78%)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="color__link"
                  style={{ backgroundColor: "hsl(126, 61%, 52%)" }}
                />
              </li>
            </ul>
          </div>
          <div className="details__size flex">
            <span className="details__size-title">Size</span>
            <ul className="size__list">
              <li>
                <a href="#" className="size__link size-active">
                  M
                </a>
              </li>
              <li>
                <a href="#" className="size__link">
                  L
                </a>
              </li>
              <li>
                <a href="#" className="size__link">
                  XL
                </a>
              </li>
              <li>
                <a href="#" className="size__link">
                  XXL
                </a>
              </li>
            </ul>
          </div>
          <div className="details__action">
            <input type="number" className="quantity" defaultValue={3} />
            <a href="#" className="btn btn--sm">
              Add To Card
            </a>
            <a href="#" className="details__action-btn">
              <i className="fi fi-rs-heart" />
            </a>
          </div>
          <ul className="details__meta">
            <li className="meta__list flex">
              <span>SKU:</span>FWM15VKT
            </li>
            <li className="meta__list flex">
              <span>Tags:</span>Clothes, Women, Dress
            </li>
            <li className="meta__list flex">
              <span>Availability:</span>8 Items in Stock
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/*=============== DETAILS TAB ===============*/}
    <section className="details__tab container">
      <div className="detail__tabs">
        <span className="detail__tab active-tab" data-target="#info">
          Additional Info
        </span>
        <span className="detail__tab" data-target="#reviews">
          Reviews(3)
        </span>
      </div>
      <div className="details__tabs-content">
        <div className="details__tab-content active-tab" content="" id="info">
          <table className="info__table">
            <tbody>
              <tr>
                <th>Stand Up</th>
                <td>35" L x 24"W x 37-45"H(front to back wheel)</td>
              </tr>
              <tr>
                <th>Folded (w/o wheels)</th>
                <td>32.5"L x 18.5"W x 16.5"H</td>
              </tr>
              <tr>
                <th>Folded (w/o wheels)</th>
                <td>32.5"L x 24"W x 18.5"H</td>
              </tr>
              <tr>
                <th>Door Pass THrough</th>
                <td>24</td>
              </tr>
              <tr>
                <th>Frame</th>
                <td>Aluminum</td>
              </tr>
              <tr>
                <th>Weight (w/o wheels)</th>
                <td>20 LBS</td>
              </tr>
              <tr>
                <th>Weight Capacity</th>
                <td>60 LBS</td>
              </tr>
              <tr>
                <th>Width</th>
                <td>24</td>
              </tr>
              <tr>
                <th>Handle Height (ground to handle)</th>
                <td>37-45</td>
              </tr>
              <tr>
                <th>Wheels</th>
                <td>12" air / wide track slick tread</td>
              </tr>
              <tr>
                <th>Seat back height</th>
                <td>21.5</td>
              </tr>
              <tr>
                <th>Head Room(inside canopy)</th>
                <td>25"</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>Black, Blue, Red, White</td>
              </tr>
              <tr>
                <th>Size</th>
                <td>M, S</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="details__tab-content" content="" id="reviews">
          <div className="reviews__container grid">
            <div className="review__single">
              <div>
                <img
                  src="./assets/img/avatar-1.jpg"
                  alt=""
                  className="review__img"
                />
                <h4 className="review__title">Jacky Chan</h4>
              </div>
              <div className="review__data">
                <div className="review__rating">
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                </div>
                <p className="review__description">
                  Thank you, very fast shipping from Poland only 3days.
                </p>
                <span className="review__date">
                  December 4, 2022 at 3:12 pm
                </span>
              </div>
            </div>
            <div className="review__single">
              <div>
                <img
                  src="./assets/img/avatar-2.jpg"
                  alt=""
                  className="review__img"
                />
                <h4 className="review__title">Meriem Js</h4>
              </div>
              <div className="review__data">
                <div className="review__rating">
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                </div>
                <p className="review__description">
                  Great low price and works well
                </p>
                <span className="review__date">
                  August 23, 2022 at 19:45 pm
                </span>
              </div>
            </div>
            <div className="review__single">
              <div>
                <img
                  src="./assets/img/avatar-3.jpg"
                  alt=""
                  className="review__img"
                />
                <h4 className="review__title">Moh Benz</h4>
              </div>
              <div className="review__data">
                <div className="review__rating">
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                  <i className="fi fi-rs-star" />
                </div>
                <p className="review__description">
                  Authentic and beautiful, Love these ways more than ever
                  expected, They are great earphones.
                </p>
                <span className="review__date">March 2, 2021 at 10:01 am</span>
              </div>
            </div>
          </div>
          <div className="review__form">
            <h4 className="review__form-title">Add a review</h4>
            <div className="rate__product">
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
            </div>
            <form action="" className="form grid">
              <textarea
                className="form__input textarea"
                placeholder="Write Comment"
                defaultValue={""}
              />
              <div className="form__group grid">
                <input type="text" placeholder="Name" className="form__input" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form__input"
                />
              </div>
              <div className="form__btn">
                <button className="btn">Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/*=============== PRODUCTS ===============*/}
    <section className="products container section--lg">
      <h3 className="section__title">
        <span>Related</span> Products
      </h3>
      <div className="products__container grid">
        <div className="product__item">
          <div className="product__banner">
            <a href="details.html" className="product__images">
              <img
                src="assets/img/product-1-1.jpg"
                alt=""
                className="product__img default"
              />
              <img
                src="assets/img/product-1-2.jpg"
                alt=""
                className="product__img hover"
              />
            </a>
            <div className="product__actions">
              <a href="#" className="action__btn" aria-label="Quick View">
                <i className="fi fi-rs-eye" />
              </a>
              <a href="#" className="action__btn" aria-label="Add to Wishlist">
                <i className="fi fi-rs-heart" />
              </a>
              <a href="#" className="action__btn" aria-label="Compare">
                <i className="fi fi-rs-shuffle" />
              </a>
            </div>
            <div className="product__badge light-pink">Hot</div>
          </div>
          <div className="product__content">
            <span className="product__category">Clothing</span>
            <a href="details.html">
              <h3 className="product__title">Colorful Pattern Shirts</h3>
            </a>
            <div className="product__rating">
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
            </div>
            <div className="product__price flex">
              <span className="new__price">$238.85</span>
              <span className="old__price">$245.8</span>
            </div>
            <a
              href="#"
              className="action__btn cart__btn"
              aria-label="Add To Cart"
            >
              <i className="fi fi-rs-shopping-bag-add" />
            </a>
          </div>
        </div>
        <div className="product__item">
          <div className="product__banner">
            <a href="details.html" className="product__images">
              <img
                src="assets/img/product-2-1.jpg"
                alt=""
                className="product__img default"
              />
              <img
                src="assets/img/product-2-2.jpg"
                alt=""
                className="product__img hover"
              />
            </a>
            <div className="product__actions">
              <a href="#" className="action__btn" aria-label="Quick View">
                <i className="fi fi-rs-eye" />
              </a>
              <a href="#" className="action__btn" aria-label="Add to Wishlist">
                <i className="fi fi-rs-heart" />
              </a>
              <a href="#" className="action__btn" aria-label="Compare">
                <i className="fi fi-rs-shuffle" />
              </a>
            </div>
            <div className="product__badge light-green">Hot</div>
          </div>
          <div className="product__content">
            <span className="product__category">Clothing</span>
            <a href="details.html">
              <h3 className="product__title">Colorful Pattern Shirts</h3>
            </a>
            <div className="product__rating">
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
            </div>
            <div className="product__price flex">
              <span className="new__price">$238.85</span>
              <span className="old__price">$245.8</span>
            </div>
            <a
              href="#"
              className="action__btn cart__btn"
              aria-label="Add To Cart"
            >
              <i className="fi fi-rs-shopping-bag-add" />
            </a>
          </div>
        </div>
        <div className="product__item">
          <div className="product__banner">
            <a href="details.html" className="product__images">
              <img
                src="assets/img/product-3-1.jpg"
                alt=""
                className="product__img default"
              />
              <img
                src="assets/img/product-3-2.jpg"
                alt=""
                className="product__img hover"
              />
            </a>
            <div className="product__actions">
              <a href="#" className="action__btn" aria-label="Quick View">
                <i className="fi fi-rs-eye" />
              </a>
              <a href="#" className="action__btn" aria-label="Add to Wishlist">
                <i className="fi fi-rs-heart" />
              </a>
              <a href="#" className="action__btn" aria-label="Compare">
                <i className="fi fi-rs-shuffle" />
              </a>
            </div>
            <div className="product__badge light-orange">Hot</div>
          </div>
          <div className="product__content">
            <span className="product__category">Clothing</span>
            <a href="details.html">
              <h3 className="product__title">Colorful Pattern Shirts</h3>
            </a>
            <div className="product__rating">
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
            </div>
            <div className="product__price flex">
              <span className="new__price">$238.85</span>
              <span className="old__price">$245.8</span>
            </div>
            <a
              href="#"
              className="action__btn cart__btn"
              aria-label="Add To Cart"
            >
              <i className="fi fi-rs-shopping-bag-add" />
            </a>
          </div>
        </div>
        <div className="product__item">
          <div className="product__banner">
            <a href="details.html" className="product__images">
              <img
                src="assets/img/product-4-1.jpg"
                alt=""
                className="product__img default"
              />
              <img
                src="assets/img/product-4-2.jpg"
                alt=""
                className="product__img hover"
              />
            </a>
            <div className="product__actions">
              <a href="#" className="action__btn" aria-label="Quick View">
                <i className="fi fi-rs-eye" />
              </a>
              <a href="#" className="action__btn" aria-label="Add to Wishlist">
                <i className="fi fi-rs-heart" />
              </a>
              <a href="#" className="action__btn" aria-label="Compare">
                <i className="fi fi-rs-shuffle" />
              </a>
            </div>
            <div className="product__badge light-blue">Hot</div>
          </div>
          <div className="product__content">
            <span className="product__category">Clothing</span>
            <a href="details.html">
              <h3 className="product__title">Colorful Pattern Shirts</h3>
            </a>
            <div className="product__rating">
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
              <i className="fi fi-rs-star" />
            </div>
            <div className="product__price flex">
              <span className="new__price">$238.85</span>
              <span className="old__price">$245.8</span>
            </div>
            <a
              href="#"
              className="action__btn cart__btn"
              aria-label="Add To Cart"
            >
              <i className="fi fi-rs-shopping-bag-add" />
            </a>
          </div>
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
