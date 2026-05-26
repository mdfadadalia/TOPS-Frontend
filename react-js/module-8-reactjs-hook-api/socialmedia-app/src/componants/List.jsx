import React, { useContext } from 'react'
import { MyContext } from './MyContext'

export default function List({ele}) {
    const {dispatchState} = useContext(MyContext)
    return <>
        {/* POST CARD */}
        <div className="card post-card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <div className="profile-circle me-3">{ele.username[0]}</div>
                    <div>
                        <h5 className="mb-0">{ele.username}</h5>
                    </div>
                </div>
                <h4 className="fw-bold">{ele.title}</h4>
                <p className="text-muted">
                    {ele.desc}
                </p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-hand-thumbs-up" />
                            {ele.likes} Likes
                        </button>
                        <button className="btn btn-outline-success btn-sm">
                            <i className="bi bi-pencil" />
                            Edit
                        </button>
                        <button className="btn btn-outline-danger btn-sm" onClick={e=>dispatchState({type:"DELETE",payload:ele})}>
                            <i className="bi bi-trash" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
