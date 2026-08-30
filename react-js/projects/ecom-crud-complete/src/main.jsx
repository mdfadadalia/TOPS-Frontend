import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componants/Home.jsx'
import Shop from './componants/Shop.jsx'
import Accounts from './componants/Accounts.jsx'
import Compare from './componants/Compare.jsx'
import { Auth } from './componants/Auth.jsx'
import { Wishlist } from './componants/Wishlist.jsx'
import { Cart } from './componants/Cart.jsx'
import { Checkout } from './componants/Checkout.jsx'
import { Details } from './componants/Details.jsx'
import NotFound from './componants/NotFound.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { initializeAuth } from './store/slices/authSlice.js'
import './admin-panel/src/styles/theme.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AdminRoute from './admin-panel/src/routes/AdminRoute.jsx'
import AdminLayout from './admin-panel/src/components/layout/AdminLayout.jsx'
import AdminPageLoader from './admin-panel/src/components/common/AdminPageLoader.jsx'
import {
  AdminLogin,
  Dashboard,
  Profile,
  CategoryList,
  CategoryForm,
  ProductList,
  ProductForm,
  OrderList,
  OrderDetail,
  PaymentList,
  UserList,
  UserDetail,
} from './admin-panel/src/routes/lazyAdminPages.js'

store.dispatch(initializeAuth())

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/accounts",
        element: <Accounts />
      },
      {
        path: "/compare",
        element: <Compare />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
  {
    path: "/admin/login",
    element: (
      <Suspense fallback={<AdminPageLoader />}>
        <AdminLogin />
      </Suspense>
    )
  },
  {
    element: <AdminRoute />,
    children: [
      {
        element: (
          <Suspense fallback={<AdminPageLoader />}>
            <AdminLayout />
          </Suspense>
        ),
        children: [
          { path: "/admin", element: <Dashboard /> },
          { path: "/admin/profile", element: <Profile /> },
          { path: "/admin/categories", element: <CategoryList /> },
          { path: "/admin/categories/new", element: <CategoryForm /> },
          { path: "/admin/categories/:id/edit", element: <CategoryForm /> },
          { path: "/admin/products", element: <ProductList /> },
          { path: "/admin/products/new", element: <ProductForm /> },
          { path: "/admin/products/:id/edit", element: <ProductForm /> },
          { path: "/admin/orders", element: <OrderList /> },
          { path: "/admin/orders/:id", element: <OrderDetail /> },
          { path: "/admin/payments", element: <PaymentList /> },
          { path: "/admin/users", element: <UserList /> },
          { path: "/admin/users/:id", element: <UserDetail /> }
        ]
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
