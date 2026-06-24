import React from 'react'

const EditProduct = () => {
    return <>
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Edit Product</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label>Product Name</label>
                            <input type="text" defaultValue="Laptop" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Price</label>
                            <input type="number" defaultValue={50000} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Quantity</label>
                            <input type="number" defaultValue={10} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                defaultValue={"Laptop Description"}
                            />
                        </div>
                        <button className="btn btn-warning">Update Product</button>
                    </form>
                </div>
            </div>
        </div>

    </>
}

export default EditProduct
