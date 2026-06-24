import React from 'react'

const ViewProduct = () => {
    return <>
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Product Details</h3>
                </div>
                <div className="card-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Laptop</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>₹50,000</td>
                            </tr>
                            <tr>
                                <th>Quantity</th>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>Gaming Laptop</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}

export default ViewProduct
