import React, { useEffect } from 'react'
import Dashboard from './componants/Dashboard'
import Login from './componants/Login'
import RegisterUser from './componants/RegisterUser'
import ForgotPwd from './componants/ForgotPwd'
import ProductList from './componants/ProductList'
import AddProduct from './componants/AddProduct'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { auth, db } from './config/FirebaseRealdb'
import MyDBContextProvider from './context/RealDBContext'
import { useAuth } from './context/AuthContext'

const App = () => {
    const { user, logout, loading } = useAuth()
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return <>
        <MyDBContextProvider>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand">CRUD Dashboard</a>
                    <div>
                        <button onClick={() => logout()} className="btn btn-danger">
                            Logout ({user?.email})
                        </button>
                    </div>
                </div>
            </nav>
            {user ? <Outlet /> : <Navigate to={"/login"} replace />}
        </MyDBContextProvider>
    </>
}

export default App