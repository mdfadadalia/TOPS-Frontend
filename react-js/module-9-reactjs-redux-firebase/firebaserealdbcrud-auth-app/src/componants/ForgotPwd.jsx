import React from 'react'

const ForgotPwd = () => {
    return <>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-header">
                            <h4>Forgot Password</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <button className="btn btn-warning w-100">Send Reset Link</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default ForgotPwd 