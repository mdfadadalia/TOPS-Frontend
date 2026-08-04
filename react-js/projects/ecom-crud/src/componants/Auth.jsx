import React from 'react'
import { Link } from 'react-router-dom'

export const Auth = () => {
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
          <span className="breadcrumb__link">Login / Register</span>
        </li>
      </ul>
    </section>
    {/*=============== LOGIN-REGISTER ===============*/}
    <section className="login-register section--lg">
      <div className="login-register__container container grid">
        <div className="login">
          <h3 className="section__title">Login</h3>
          <form className="form grid">
            <input
              type="email"
              placeholder="Your Email"
              className="form__input"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="form__input"
            />
            <div className="form__btn">
              <button className="btn1">Login</button>
            </div>
          </form>
        </div>
        <div className="register">
          <h3 className="section__title">Create an Account</h3>
          <form className="form grid">
            <input type="text" placeholder="Username" className="form__input" />
            <input
              type="email"
              placeholder="Your Email"
              className="form__input"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="form__input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form__input"
            />
            <div className="form__btn">
              <button className="btn1 ">Submit &amp; Register</button>
            </div>
          </form>
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
