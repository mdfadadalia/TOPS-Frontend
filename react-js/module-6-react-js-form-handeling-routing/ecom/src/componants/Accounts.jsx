import React from 'react'
import { Link } from 'react-router-dom'

const Accounts = () => {
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
          <span className="breadcrumb__link">Account</span>
        </li>
      </ul>
    </section>
    {/*=============== ACCOUNTS ===============*/}
    <section className="accounts section--lg">
      <div className="accounts__container container grid">
        <div className="account__tabs">
          <p className="account__tab active-tab" data-target="#dashboard">
            <i className="fi fi-rs-settings-sliders" /> Dashboard
          </p>
          <p className="account__tab" data-target="#orders">
            <i className="fi fi-rs-shopping-bag" /> Orders
          </p>
          <p className="account__tab" data-target="#update-profile">
            <i className="fi fi-rs-user" /> Update Profile
          </p>
          <p className="account__tab" data-target="#address">
            <i className="fi fi-rs-marker" /> My Address
          </p>
          <p className="account__tab" data-target="#change-password">
            <i className="fi fi-rs-settings-sliders" /> Change Password
          </p>
          <p className="account__tab">
            <i className="fi fi-rs-exit" /> Logout
          </p>
        </div>
        <div className="tabs__content">
          <div className="tab__content active-tab" content="" id="dashboard">
            <h3 className="tab__header">Hello Rosie</h3>
            <div className="tab__body">
              <p className="tab__description">
                From your account dashboard. you can easily check &amp; view
                your recent order, manage your shipping and billing addresses
                and edit your password and account details
              </p>
            </div>
          </div>
          <div className="tab__content" content="" id="orders">
            <h3 className="tab__header">Your Orders</h3>
            <div className="tab__body">
              <table className="placed__order-table">
                <thead>
                  <tr>
                    <th>Orders</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Totals</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1357</td>
                    <td>March 19, 2022</td>
                    <td>Processing</td>
                    <td>$125.00</td>
                    <td>
                      <a href="#" className="view__order">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>#2468</td>
                    <td>June 29, 2022</td>
                    <td>Completed</td>
                    <td>$364.00</td>
                    <td>
                      <a href="#" className="view__order">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>#2366</td>
                    <td>August 02, 2022</td>
                    <td>Completed</td>
                    <td>$280.00</td>
                    <td>
                      <a href="#" className="view__order">
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab__content" content="" id="update-profile">
            <h3 className="tab__header">Update Profile</h3>
            <div className="tab__body">
              <form className="form grid">
                <input
                  type="text"
                  placeholder="Username"
                  className="form__input"
                />
                <div className="form__btn">
                  <button className="btn btn--md">Save</button>
                </div>
              </form>
            </div>
          </div>
          <div className="tab__content" content="" id="address">
            <h3 className="tab__header">Shipping Address</h3>
            <div className="tab__body">
              <address className="address">
                3522 Interstate <br />
                75 Business Spur, <br />
                Sault Ste. <br />
                Marie, Mi 49783
              </address>
              <p className="city">New York</p>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
          </div>
          <div className="tab__content" content="" id="change-password">
            <h3 className="tab__header">Change Password</h3>
            <div className="tab__body">
              <form className="form grid">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="form__input"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="form__input"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form__input"
                />
                <div className="form__btn">
                  <button className="btn btn--md">Save</button>
                </div>
              </form>
            </div>
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
export default Accounts