import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, logoutUser, updateProfile } from '../store/slices/authSlice';
import { cancelMyOrder, fetchMyOrders } from '../store/slices/ordersSlice';
import { formatCurrency, formatDate } from '../utils/normalize';
import { DataState } from './common/DataState';

const TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'fi-rs-settings-sliders' },
  { id: 'orders', label: 'Orders', icon: 'fi-rs-shopping-bag' },
  { id: 'update-profile', label: 'Update Profile', icon: 'fi-rs-user' },
  { id: 'change-password', label: 'Change Password', icon: 'fi-rs-lock' },
];

const Accounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { items: orders, loading, error } = useSelector((state) => state.orders);

  const [tab, setTab] = useState('dashboard');
  const [profileForm, setProfileForm] = useState({ name: user?.name || '', email: user?.email || '', phone: user?.phone || '' });
  const [profileMessage, setProfileMessage] = useState('');
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [passwordMessage, setPasswordMessage] = useState('');

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating local edit form when the logged-in user loads/changes
    setProfileForm({ name: user?.name || '', email: user?.email || '', phone: user?.phone || '' });
  }, [user]);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/');
  };

  const submitProfile = async (event) => {
    event.preventDefault();
    setProfileMessage('');
    const result = await dispatch(updateProfile(profileForm));
    setProfileMessage(
      updateProfile.fulfilled.match(result) ? 'Profile updated successfully.' : result.payload?.message || 'Unable to update profile.',
    );
  };

  const submitPassword = async (event) => {
    event.preventDefault();
    setPasswordMessage('');
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordMessage('New password and confirmation do not match.');
      return;
    }
    const result = await dispatch(changePassword(passwordForm));
    if (changePassword.fulfilled.match(result)) {
      setPasswordMessage('Password changed successfully.');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } else {
      setPasswordMessage(result.payload?.message || 'Unable to change password.');
    }
  };

  return (
    <main className="main">
      {/*=============== BREADCRUMB ===============*/}
      <section className="breadcrumb">
        <ul className="breadcrumb__list flex container">
          <li><Link to="/" className="breadcrumb__link">Home</Link></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">Account</span></li>
        </ul>
      </section>
      {/*=============== ACCOUNTS ===============*/}
      <section className="accounts section--lg">
        <div className="accounts__container container grid">
          <div className="account__tabs">
            {TABS.map((t) => (
              <p
                key={t.id}
                className={`account__tab${tab === t.id ? ' active-tab' : ''}`}
                onClick={() => setTab(t.id)}
                style={{ cursor: 'pointer' }}
              >
                <i className={`fi ${t.icon}`} /> {t.label}
              </p>
            ))}
            <p className="account__tab" onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <i className="fi fi-rs-sign-out-alt" /> Logout
            </p>
          </div>

          <div className="account__tabs-content">
            {tab === 'dashboard' && (
              <div className="account__tab-content active-tab">
                <h3 className="account__title">Hello, {user?.name || 'there'}!</h3>
                <p>
                  From your account dashboard you can view your recent orders, manage your shipping details and
                  update your account information.
                </p>
                <p><strong>Email:</strong> {user?.email}</p>
                {user?.phone && <p><strong>Phone:</strong> {user.phone}</p>}
                <p><strong>Total Orders:</strong> {orders.length}</p>
              </div>
            )}

            {tab === 'orders' && (
              <div className="account__tab-content active-tab">
                <h3 className="account__title">My Orders</h3>
                <DataState
                  loading={loading}
                  loadingLabel="Loading your orders…"
                  error={error}
                  onRetry={() => dispatch(fetchMyOrders())}
                  isEmpty={orders.length === 0}
                  emptyTitle="You haven't placed any orders yet"
                  emptyAction={<Link to="/shop" className="btn1 btn1--sm">Start shopping</Link>}
                >
                  <div className="table__container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td>#{order.orderNumber}</td>
                            <td>{formatDate(order.createdAt)}</td>
                            <td style={{ textTransform: 'capitalize' }}>{order.status}</td>
                            <td>{formatCurrency(order.total)}</td>
                            <td>
                              {['pending', 'processing'].includes(order.status) && (
                                <a
                                  href="#"
                                  className="btn btn--sm"
                                  onClick={(e) => { e.preventDefault(); dispatch(cancelMyOrder(order.id)); }}
                                >
                                  Cancel
                                </a>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </DataState>
              </div>
            )}

            {tab === 'update-profile' && (
              <div className="account__tab-content active-tab">
                <h3 className="account__title">Update Profile</h3>
                <form className="form grid" style={{ maxWidth: 480 }} onSubmit={submitProfile}>
                  <input
                    className="form__input"
                    placeholder="Full name"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    required
                  />
                  <input
                    className="form__input"
                    placeholder="Phone"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                  />
                  <button type="submit" className="btn1 btn1--md">Save Changes</button>
                  {profileMessage && <p className="mb-0">{profileMessage}</p>}
                </form>
              </div>
            )}

            {tab === 'change-password' && (
              <div className="account__tab-content active-tab">
                <h3 className="account__title">Change Password</h3>
                <form className="form grid" style={{ maxWidth: 480 }} onSubmit={submitPassword}>
                  <input
                    type="password"
                    className="form__input"
                    placeholder="Current password"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    required
                  />
                  <input
                    type="password"
                    className="form__input"
                    placeholder="New password"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    minLength={8}
                    required
                  />
                  <input
                    type="password"
                    className="form__input"
                    placeholder="Confirm new password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                    minLength={8}
                    required
                  />
                  <button type="submit" className="btn1 btn1--md">Update Password</button>
                  {passwordMessage && <p className="mb-0">{passwordMessage}</p>}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Accounts;
