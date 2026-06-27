import React, { useEffect, useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { auth } from '../config/FirebaseRealdb'
const Login = () => {
    const { loginUser, googleLogin,user,loading } = useAuth()
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()
    const submitHandler = async (e) => {
        e.preventDefault();
        const user_email = email.current.value
        const user_pwd = password.current.value
        if (user_email != "" && user_pwd != "") {
            if (await loginUser(user_email, user_pwd)) {
                alert("Login SucessFull")
                navigate("/")
            }
            else {
                alert("User Email or Password Invalid!")
            }
        }
        else {
            alert("Enter Valid Credential")
        }
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return user ? <Navigate to="/" replace /> :  <>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-header text-center">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" ref={email} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" ref={password} className="form-control" />
                                </div>
                                <button type='submit' className="btn btn-primary w-100">Login</button>
                                <span>OR</span>
                                <a onClick={() => googleLogin()} className="btn btn-primary w-100">
                                    <i className="bi bi-google"></i> Login with Google
                                </a>
                            </form>
                            <div className="text-center mt-3">
                                <Link to={"/forgotpwd"}>Forgot Password?</Link>
                            </div>
                            <div className="text-center mt-2">
                                <Link to={"/register"}>Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Login
