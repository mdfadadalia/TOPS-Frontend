import { List } from "./List"

export const Display = ({product})=>{
    return<>
        <div>
            <table className='table table-striped table-hover table-bordered shadow rounded'>
                <thead className="table-dark text-center">
                    <tr>
                        <th>Product Name</th>
                        <th colSpan={2} align='center'>Action</th>
                    </tr>
                </thead>
                <tbody>                
                    {product.map((ele,index)=>(<List key={index} ele={ele}></List>))}
                </tbody>
            </table>
          </div>
    </>
}