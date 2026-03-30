import React,{useState} from "react";
import Data from "./Data";

function ProductFilter()
{
//stored data in useState
const[filter,setFilter]=useState(Data); 

// filter shoes create a function 
const FilterData=(cat)=>{
    const result=Data.filter((items)=>items.category==cat);    
    setFilter(result);
}
// Write to Filter data create a function 

const handelSerch = (e)=>{
    const value = e.target.value.toLowerCase();
    if(value==="")
        AllData();
    else
        setFilter(filter.filter(item => item.name.toLowerCase().includes(value)) || 
        item.category.toLowerCase().includes(value)         
    );
}

const AllData=()=>{
    setFilter(Data);
    }
return(
<>
<div className="app">
<h1>Produc Search & Filter App</h1>
<br/>
<input type="text" className="search-input" placeholder="Search..." onChange={handelSerch} />
<hr />

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