import React from 'react'
import Dashboard from './componants/Dashboard'
import Login from './componants/Login'
import RegisterUser from './componants/RegisterUser'
import ForgotPwd from './componants/ForgotPwd'
import ProductList from './componants/ProductList'
import AddProduct from './componants/AddProduct'
import { Link, Outlet } from 'react-router-dom'
import { db } from './config/FirebaseRealdb'
import MyDBContextProvider from './context/RealDBContext'

const App = () => {
  return <>
  <MyDBContextProvider>
      <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">CRUD Dashboard</a>
                <div>
                    <Link to="/login" className="btn btn-danger">
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
      <Outlet />
    </MyDBContextProvider>
  </>
}

export default App