import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RealDBContext } from '../context/RealDBContext'

const ProductList = () => {
    const {product,delProduct,editProduct} = useContext(RealDBContext) 
    return <>
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h2>Product List</h2>
                <Link to="/addproduct" className="btn btn-primary">
                    Add Product
                </Link>
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
                    {product.map((ele,index)=>(<tr key={ele.id}>
                        <td>{index+1}</td>
                        <td>{ele.pname}</td>
                        <td>{ele.price}</td>
                        <td>{ele.qty}</td>
                        <td className='d-flex gap-2'>
                            <a className="btn btn-warning btn-sm"
                            onClick={()=>editProduct(ele.id)}>
                                Edit
                            </a>
                            <button className="btn btn-danger btn-sm" onClick={()=>delProduct(ele.id)}>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>

    </>
}

export default ProductList
