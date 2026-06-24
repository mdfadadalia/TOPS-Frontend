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
import ViewProduct from './componants/ViewProduct.jsx'
import AddProduct from './componants/AddProduct.jsx'
import EditProduct from './componants/EditProduct.jsx'
import ProductList from './componants/ProductList.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
    children:[
      {
        path:"/forgotpwd",
        element:<ForgotPwd/>
      },
      {
        path:"/register",
        element:<RegisterUser/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/viewproduct",
        element:<ViewProduct/>
      },
      {
        path:"/addproduct",
        element:<AddProduct/>
      },
      {
        path:"/editproduct",
        element:<EditProduct/>
      },
      {
        path:"/productlist",
        element:<ProductList/>
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
