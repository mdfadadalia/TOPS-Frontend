import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './componants/title';
import { Create } from './componants/Create';
import { Display } from './componants/Display';
import { Error } from './componants/Error';
import { useState } from 'react';
const App = () => {
var [product,setProduct] = useState([]);

const addProduct = (name)=>{
  var newArray = [...product,name]
  setProduct(newArray);
}
const removeProduct = (name) =>{
  var newArray = product.filter(ele=>{
    return ele!=name
  })
  setProduct(newArray)
}
  return (<>
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto p-5 mt-5 card " align="center">          
          <Title/>
          <Create addProduct={addProduct}/>
          {product.length > 0 ? <Display product={product} removeProduct={removeProduct} /> : <Error/>}          
        </div>
      </div>
    </div>
  </>)
}
export default App;
