import { lazy } from 'react';

// The admin console is only ever visited by admins, not shoppers — lazy
// loading it keeps it out of the storefront's initial JS payload instead
// of shipping the whole console (and its skeleton/table components) to
// every customer who just wants to browse products.
export const AdminLogin = lazy(() => import('../pages/Login.jsx'));
export const Dashboard = lazy(() => import('../pages/Dashboard.jsx'));
export const Profile = lazy(() => import('../pages/Profile.jsx'));
export const CategoryList = lazy(() => import('../pages/categories/CategoryList.jsx'));
export const CategoryForm = lazy(() => import('../pages/categories/CategoryForm.jsx'));
export const ProductList = lazy(() => import('../pages/products/ProductList.jsx'));
export const ProductForm = lazy(() => import('../pages/products/ProductForm.jsx'));
export const OrderList = lazy(() => import('../pages/orders/OrderList.jsx'));
export const OrderDetail = lazy(() => import('../pages/orders/OrderDetail.jsx'));
export const PaymentList = lazy(() => import('../pages/payments/PaymentList.jsx'));
export const UserList = lazy(() => import('../pages/users/UserList.jsx'));
export const UserDetail = lazy(() => import('../pages/users/UserDetail.jsx'));
