import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, deleteUsers, displayUsers, updateUsers } from './features/crud/crudSlice'
import { useForm } from 'react-hook-form'
const App = () => {
  const user = useSelector(state => state.crud)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    // formState: { errors, // also more fileds
    //     isDirty,
    //     isValid,
    //     isSubmitting },
    // watch,
    // getValues
  } = useForm();

  useEffect(() => {
    dispatch(displayUsers())
  }, [])

  const submitHandler = (data) => {
    data.language = data.language && data.language.join(", ")
    if(data.id)
    {
      dispatch(updateUsers(data))
    }
    else{
      dispatch(addUsers(data))
    }
    
    reset();
  }
  const deleteHandler = (id) => {
    dispatch(deleteUsers(id))
  }

  const retrive = (id) => {
    const data = user.data.find(ele => ele.id == id)
    setValue("id", data.id);
    setValue("name", data.name);
    setValue("email", data.email);
    setValue("gender", data.gender);
    setValue("language", data.language.split(",").map(item => item.trim()));
    setValue("city", data.city);
  }
  return <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">User Registration Form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="hidden"
                      {...register("id")}
                    />
                    <input
                      {...register("name")}
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type='email'
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  {/* <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Confirm Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div> */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label d-block">Gender</label>
                    <div className="form-check form-check-inline">
                      <input
                        {...register("gender")}
                        type='radio'
                        value="Male"
                        required
                        className="form-check-input"
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        {...register("gender")}
                        type='radio'
                        value="Female"
                        className="form-check-input"
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        {...register("gender")}
                        type='radio'
                        value="Other"
                        className="form-check-input"
                      />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label d-block">Language</label>
                    <div className="form-check form-check-inline">
                      <input
                        {...register("language")}
                        type='checkbox'
                        value="Gujarati"
                        className="form-check-input"
                      />
                      <label className="form-check-label">Gujarati</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        {...register("language")}
                        type='checkbox'
                        value="Hindi"
                        className="form-check-input"
                      />
                      <label className="form-check-label">Hindi</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        {...register("language")}
                        type='checkbox'
                        value="English"
                        className="form-check-input"
                      />
                      <label className="form-check-label">English</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City</label>
                    <select {...register("city")} className="form-select" required >
                      <option value="">Select City</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Rajkot">Rajkot</option>
                      <option value="Surat">Surat</option>
                      <option value="Vadodara">Vadodara</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="text-center">
                  <button type='submit' className="btn btn-success px-5">Save User</button>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          {/* CRUD LIST */}
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h3 className="mb-0">Registered Users</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Language</th>
                      <th>City</th>
                      <th width={180}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.loading ? <tr><td>Loading...</td></tr> : user.data && user.data.map((ele, index) => <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.gender}</td>
                      <td>{ele.language}</td>
                      <td>{ele.city}</td>
                      <td>
                        <button className="btn btn-warning btn-sm action-btn"
                          onClick={() => retrive(ele.id)}>
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm action-btn"
                          onClick={() => deleteHandler(ele.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>)}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App
