import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from './MyContext'

export default function Create() {
    const {state,dispatchState} = useContext(MyContext)
    const username = useRef()
    const title = useRef()
    const desc = useRef()
    const submitHandler=(e)=>{
        e.preventDefault();
        var data={
            username:username.current.value,
            title:title.current.value,
            desc:desc.current.value,
            likes:0
        }
        dispatchState({type:"ADD",payload:data})
    }
  return <>
    {/* LEFT SECTION : CREATE POST */}
        <div className="col-lg-4 mb-4">
          <div className="card shadow border-0 rounded-4">
            <div className="card-header bg-primary text-white rounded-top-4">
              <h4 className="mb-0">
                <i className="bi bi-pencil-square" />
                Create Post
              </h4>
            </div>
            <div className="card-body">
            <span className="badge bg-warning fs-6 float-end"> <Link to={"/display"}> View Posts ({state.length})</Link></span>
              <form onSubmit={submitHandler}>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Username</label>
                  <input
                    type="text"
                    ref={username}
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>
                {/* Post Title */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Post Title</label>
                  <input
                    type="text"
                    ref={title}
                    className="form-control"
                    placeholder="Enter post title"
                  />
                </div>
                {/* Description */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Post Description</label>
                  <textarea
                    rows={5}
                    ref={desc}
                    className="form-control"
                    placeholder="Write something..."
                    defaultValue={""}
                  />
                </div>
                {/* Buttons */}
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type='submit'>
                    <i className="bi bi-plus-circle" />
                    Add Post
                  </button>
                  <button type="reset" className="btn btn-outline-secondary">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  </>
}
