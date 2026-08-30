import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../store/slices/authSlice'

export const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const submitLogin = async (event) => {
    event.preventDefault()
    const result = await dispatch(loginUser(loginForm))
    if (loginUser.fulfilled.match(result)) navigate('/')
  }
  const submitRegister = async (event) => {
    event.preventDefault()
    if (registerForm.password !== registerForm.confirmPassword) return
    const { confirmPassword, ...details } = registerForm
    const result = await dispatch(registerUser(details))
    if (registerUser.fulfilled.match(result)) navigate('/auth')
  }
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
          <form className="form grid" onSubmit={submitLogin}>
            <input
              type="email"
              placeholder="Your Email"
              className="form__input"
              value={loginForm.email}
              onChange={(event) => setLoginForm({ ...loginForm, email: event.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Your Password"
              className="form__input"
              value={loginForm.password}
              onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })}
              required
            />
            <div className="form__btn">
              <button className="btn1" disabled={loading}>{loading ? 'Signing in…' : 'Login'}</button>
            </div>
          </form>
        </div>
        <div className="register">
          <h3 className="section__title">Create an Account</h3>
          <form className="form grid" onSubmit={submitRegister}>
            <input type="text" placeholder="Username" className="form__input" value={registerForm.name} onChange={(event) => setRegisterForm({ ...registerForm, name: event.target.value })} required />
            <input
              type="email"
              placeholder="Your Email"
              className="form__input"
              value={registerForm.email}
              onChange={(event) => setRegisterForm({ ...registerForm, email: event.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Your Password"
              className="form__input"
              value={registerForm.password}
              onChange={(event) => setRegisterForm({ ...registerForm, password: event.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form__input"
              value={registerForm.confirmPassword}
              onChange={(event) => setRegisterForm({ ...registerForm, confirmPassword: event.target.value })}
              required
            />
            <div className="form__btn">
              <button className="btn1" disabled={loading}>{loading ? 'Submitting…' : 'Submit & Register'}</button>
            </div>
          </form>
        </div>
        {error && <p className="text-danger">{error}</p>}
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
