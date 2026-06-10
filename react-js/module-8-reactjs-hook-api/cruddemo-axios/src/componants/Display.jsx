import { useContext } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "./MyContext"

export const Display = () => {
    const { state, del,retrive,search } = useContext(MyContext)
     const searchHandler = (e) =>{
        search(e.target.value)
    }
    return <>
        <div className="col-md-8">
            <div className="card p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>User List</h3>
                    <input
                        type="text"
                        onKeyUp={searchHandler}
                        className="form-control w-50"
                        placeholder="Search user..."
                    />
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th width={180}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((ele, index) => <tr key={ele.id}>
                                <td>{index + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.city}</td>
                                <td>{ele.phone}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm action-btn" onClick={()=>retrive(ele.id)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={()=>del(ele.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}