import React,{useState} from "react";
import Data from "./Data";
import label from "./label";
function ProductFilter()
{
//stored data in useState
const[filter,setFilter]=useState(Data); 

// filter shoes create a function 
const FilterData=(cat)=>{
    const result=Data.filter((items)=>items.category==cat);    
    setFilter(result);
}
// fetch all data create a function 

const Labelshow=(msg)=>{
    return (
    alert("ok : " + msg)
    )
}

const AllData=()=>{
    setFilter(Data);
    }
return(
<>
<div className="app">
<h1>Product Filter App</h1>
<hr />

<button type="button" onClick={() =>Labelshow("OK")}>OK</button>
<button type="button" onClick={() =>Labelshow("Cancel")}>Cancel</button>

<button type="button" onClick={AllData}>All</button>
{[...new Set(Data.map(item => item.category))].map((cat) => (    
   <button type="button" onClick={ ()=>FilterData(cat) }>{cat}</button>
))}

{/* fetch all products */}
<div className="product">
    {/* fetch all products */}
    {filter.map((items,index)=>{
        return(
            <>
               <div className="product-grid">
                <p><img src={items.photo} alt="photo" /></p>
                <p><b>{items.name}</b></p>
                <p><b>Category :</b>{items.category}</p>
                <p>Rs.{items.price}</p>
               </div>
            </>
        )
    })}   
</div>
</div>
</>
)
}

export default ProductFilter