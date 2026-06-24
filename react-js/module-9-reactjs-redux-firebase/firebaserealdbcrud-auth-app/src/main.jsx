import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './componants/Login.jsx'
import ForgotPwd from './componants/ForgotPwd.jsx'
import RegisterUser from './componants/RegisterUser.jsx'
import Dashboard from './componants/Dashboard.jsx'
import AddProduct from './componants/AddProduct.jsx'
import ProductList from './componants/ProductList.jsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpwd",
    element: <ForgotPwd />
  },
  {
    path: "/register",
    element: <RegisterUser />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/addproduct",
        element: <AddProduct />
      },
      {
        path: "/productlist",
        element: <ProductList />
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
