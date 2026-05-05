import { List } from "./List"
import { useState } from "react"
export const Display = ({product,removeProduct})=>{
    var [cart,setCart] = useState([]);

    const addToCart=(name)=>{
        var newArray = [...cart,name]
        setCart(newArray)
    }
    const removeFromCart=(name)=>{
        var newArray = cart.filter((e)=>{return e!=name})
        setCart(newArray)
    }
    
    return<>
        <div>
            <table className='table table-striped table-hover table-bordered shadow rounded'>
                <thead className="table-dark text-center">
                    <tr>
                        <th>Product Name</th>
                        <th colSpan={3} align='center'>Action</th>
                    </tr>
                </thead>
                <tbody>                
                    {product.map((ele,index)=>(<List key={index} ele={ele} removeProduct={removeProduct} addToCart={addToCart} isExist={cart.includes(ele)} removeFromCart={removeFromCart}></List>))}
                </tbody>
            </table>
          </div>
    </>
}