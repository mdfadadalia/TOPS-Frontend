import 'bootstrap/dist/css/bootstrap.min.css';
import { Create } from './componants/Create';
import { Display } from './componants/Display';
import { useState } from 'react';

const App = () => {  
  var  [userData, setUserData] = useState([])
  
  const addUserData=(data)=>{        
    const newArray = [...userData,data]
    setUserData(newArray)    
  }

  const deleteData = (username) =>{
    var newArray = userData.filter(ele=>{
      return ele.username!=username
    })
    setUserData(newArray)
  }

  var [editData,setEditData] = useState()
  const editHandler = (data)=>{
      setEditData(data)
  }

  return <div className="container mt-5">
          <div className="row g-4">
            <Create addUserData={addUserData} editData={editData}/>            
            <Display userData={userData} deleteData={deleteData} editHandler={editHandler}/> 
          </div>
        </div>
}
export default App