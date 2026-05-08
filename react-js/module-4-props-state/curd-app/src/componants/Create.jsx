import { useEffect,useState,useRef } from "react"
export const Create = ({addUserData,editData}) => {

  const username = useRef("")
  const email = useRef("")
  const phone = useRef("")  

  const submitHandler = (e)=>{
        e.preventDefault()        
        var data = {
        username:username.current.value,
        email:email.current.value,
        phone:phone.current.value
      }
      data.username!=""? addUserData(data)  : alert("Blank Data Can't Insert")     
     
    }

    useEffect(() => {
        if(editData!=undefined)
        {
          username.current.value=editData.username
          email.current.value=editData.email
          phone.current.value=editData.phone
        }
        else
        {
          username.current.value=""
          email.current.value=""
          phone.current.value=""
        }
    })
    
    return <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <h3 className="text-center mb-4">Entry Form</h3>
                <form onSubmit={submitHandler}> 
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      ref={username}                      
                      className="form-control"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email" 
                      ref={email}                     
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      ref={phone}                      
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