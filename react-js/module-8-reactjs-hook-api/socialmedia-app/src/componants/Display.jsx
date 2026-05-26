import React, { useContext } from 'react'
import List from './List'
import { Link } from 'react-router-dom'
import { MyContext } from './MyContext'

export default function Display() {
    const {state,dispatchState} = useContext(MyContext)
    return <>
        {/* RIGHT SECTION : VIEW POSTS */}
        <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold">
                    <i className="bi bi-card-text" />
                    Recent Posts
                </h3>
                <span className="badge bg-info fs-6 float-end"> <Link to={"/"}>  <i className="bi bi-plus-circle" /> Add Post</Link></span>
            </div>
            {state.map((e,i)=><List key={i} ele={e}/>)}
        </div>
    </>
}
