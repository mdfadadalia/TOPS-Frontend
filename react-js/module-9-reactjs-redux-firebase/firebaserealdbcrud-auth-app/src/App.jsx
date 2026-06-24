import React from 'react'
import Dashboard from './componants/Dashboard'
import Login from './componants/Login'
import RegisterUser from './componants/RegisterUser'
import ForgotPwd from './componants/ForgotPwd'
import ProductList from './componants/ProductList'
import AddProduct from './componants/AddProduct'
import ViewProduct from './componants/ViewProduct'
import EditProduct from './componants/EditProduct'

const App = () => {
  return (
    <div>
    <RegisterUser/>
    <Login/>
    <ForgotPwd/>
    <Dashboard/>
    <ProductList/>
    <AddProduct/>
    <ViewProduct/>
    <EditProduct/>  
    </div>
  )
}

export default App