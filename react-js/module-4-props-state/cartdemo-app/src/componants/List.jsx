export const List = ({ele,removeProduct,addToCart,isExist,removeFromCart}) => {
    
    return <>
        <tr>
            <td> {ele} </td>
            <td>
                {isExist?<button className='btn btn-danger' onClick={(e)=>removeFromCart(ele)}>Remove</button> : 
                <button className='btn btn-primary' onClick={(e)=>addToCart(ele)}>Buy</button>}
                
            </td>
            <td><button className='btn btn-danger' onClick={(e) => removeProduct(ele)}>Delete</button></td>
        </tr>
    </>
}