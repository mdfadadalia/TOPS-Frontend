import React from 'react'

const ProductList = () => {
    return <>
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h2>Product List</h2>
                <a href="add-product.html" className="btn btn-primary">
                    Add Product
                </a>
            </div>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laptop</td>
                        <td>50000</td>
                        <td>10</td>
                        <td>
                            <a href="view-product.html" className="btn btn-info btn-sm">
                                View
                            </a>
                            <a href="edit-product.html" className="btn btn-warning btn-sm">
                                Edit
                            </a>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </>
}

export default ProductList
