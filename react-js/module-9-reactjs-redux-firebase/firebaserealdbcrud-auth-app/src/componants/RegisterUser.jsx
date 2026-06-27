import React, { useContext, useRef } from 'react'
import { AuthContext, useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const RegisterUser = () => {
    const navigate = useNavigate()
    const { registerUser } = useAuth()
    const email = useRef()
    const password = useRef()
    const cnfpwd = useRef()
    const submitHandler = async(e) => {
        e.preventDefault();
        if (email.current.value != "") {
            if (password.current.value === cnfpwd.current.value) {
                const isRegister = await registerUser(email.current.value, password.current.value)
                if (isRegister == true) {
                    email.current.value = ""
                    password.current.value = ""
                    cnfpwd.current.value = ""
                    navigate("/login")
                }
            }
            else {
                alert("Password & Confirm Password  Not Matched!")
            }
        }
        else {
            alert("Email not Blank")
        }
    }
    return <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header">
                            <h3>Register User</h3>
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
                                <div className="mb-3">
                                    <label>Confirm Password</label>
                                    <input type="password" ref={cnfpwd} className="form-control" />
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
