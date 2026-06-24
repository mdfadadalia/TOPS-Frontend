import React from 'react'

const Dashboard = () => {
    return <>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">CRUD Dashboard</a>
                <div>
                    <a href="product-list.html" className="btn btn-light">
                        Products
                    </a>
                    <a href="login.html" className="btn btn-danger">
                        Logout
                    </a>
                </div>
            </div>
        </nav>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <div className="card text-center bg-primary text-white">
                        <div className="card-body">
                            <h2>150</h2>
                            <p>Total Products</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center bg-success text-white">
                        <div className="card-body">
                            <h2>80</h2>
                            <p>Available</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center bg-warning">
                        <div className="card-body">
                            <h2>20</h2>
                            <p>Out Of Stock</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard
