import React from 'react'

const RegisterUser = () => {
    return <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header">
                            <h3>Register User</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Mobile</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <button className="btn btn-success">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default RegisterUser
