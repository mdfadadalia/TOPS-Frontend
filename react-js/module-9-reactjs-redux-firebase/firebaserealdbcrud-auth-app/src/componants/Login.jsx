import React from 'react'

const Login = () => {
    return <>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-header text-center">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <button className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="text-center mt-3">
                                <a href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div className="text-center mt-2">
                                <a href="register.html">Create Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Login
