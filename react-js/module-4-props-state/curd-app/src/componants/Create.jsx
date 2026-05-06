import { useEffect,useState } from "react"
export const Create = ({addUserData,editData}) => {

    const submitHandler = (e)=>{
        e.preventDefault()      
      
        var data = {
      username:e.target[0].value,
      email:e.target[1].value,
      phone:e.target[2].value}
      data.username!=""? addUserData(data)  : alert("Blank Data Can't Insert")     
      e.target[0].value=""
      e.target[1].value=""
      e.target[2].value=""

    }
    var [formData,setFormData] = useState({username:"",email:"",phone:""})
    useEffect(() => {
        setFormData(editData)
    })
    
    return <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <h3 className="text-center mb-4">Entry Form</h3>
                <form onSubmit={submitHandler}> 
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"                      
                      className="form-control"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"                      
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"                      
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Save
                  </button>
                </form>
              </div>
            </div>
}