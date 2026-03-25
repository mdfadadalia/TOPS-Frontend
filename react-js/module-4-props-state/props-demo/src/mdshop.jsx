import Data from "./Data";

function MdShop()
{
    return(<>
        <div className="emp_frame">
            {Data.map((item) => (
               <>
                    <div className="emp_grid">
                    <p>{item.id}</p>
                    <p><img src={item.product_img} /></p>
                    <p><b>Category : </b>{item.category}</p>
                    <p>{item.product}</p>            
                    <p>{item.price}/-</p>
                    </div>
               </>

            ))}                      
        </div></>);
}
export default MdShop;