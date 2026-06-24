import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RealDBContext } from '../context/RealDBContext'

const AddProduct = () => {
    const navigate = useNavigate()
    const { addProduct, editState,updateProduct } = useContext(RealDBContext)

    const id = useRef()
    const pname = useRef()
    const price = useRef()
    const qty = useRef()

    useEffect(() => {
        if (editState != null) {
            id.current.value = editState.id
            pname.current.value = editState.pname
            price.current.value = editState.price
            qty.current.value = editState.qty
        }
    }, [editState])
    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            pname: pname.current.value,
            price: price.current.value,
            qty: qty.current.value
        }
        if (id.current.value!="") {
            updateProduct(id.current.value,newProduct)
        }
        else {
            addProduct(newProduct)
        }
        id.current.value = ""
        pname.current.value = ""
        price.current.value = ""
        qty.current.value = ""
        navigate("/")
    }
    return <>
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Add Product</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label>Product Name</label>
                            <input type='hidden' ref={id} />
                            <input type="text" ref={pname} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Price</label>
                            <input type="number" ref={price} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Quantity</label>
                            <input type="number" ref={qty} className="form-control" />
                        </div>
                        <div className='d-flex gap-2'>
                        <button className="btn btn-success">{editState==null?"Save" : "Update"} Product</button>
                        <Link className='btn btn-warning' to={"/"}>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
}

export default AddProduct
