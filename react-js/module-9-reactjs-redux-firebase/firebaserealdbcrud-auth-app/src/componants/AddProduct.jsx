import React from 'react'

const AddProduct = () => {
    return <>
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Add Product</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label>Product Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Price</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Quantity</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Description</label>
                            <textarea className="form-control" defaultValue={""} />
                        </div>
                        <button className="btn btn-success">Save Product</button>
                    </form>
                </div>
            </div>
        </div>

    </>
}

export default AddProduct
