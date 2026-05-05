import { useState } from "react"
export const Create = ({addProduct})=>{

    var [productname,setProductname] = useState("");

    const btnHandler = () => {
        addProduct(productname)
    }

    return <>
        <div className="form-group gap-2 d-flex">
            <input type='text' onChange={(e)=>setProductname(e.target.value)} placeholder='Enter Product' className='form-control' />
            <button className='btn btn-success' onClick={btnHandler}>Add</button>
        </div>
        <br />
    </>
}