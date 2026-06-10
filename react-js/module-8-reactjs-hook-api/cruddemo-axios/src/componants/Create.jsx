import { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "./MyContext"


export const Create = () => {
    const { add, eData, update } = useContext(MyContext)
    const name = useRef()
    const city = useRef()
    const phone = useRef()
    const id = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            name: name.current.value,
            city: city.current.value,
            phone: phone.current.value
        }
        const uid = id.current.value
        if (uid) {
            update(data, uid)
        }
        else {
            add(data)
        }
        id.current.value = ""
        name.current.value = ""
        city.current.value = ""
        phone.current.value = ""
    }
    useEffect(() => {
        if (eData != undefined) {
            id.current.value = eData.id
            name.current.value = eData.name
            city.current.value = eData.city
            phone.current.value = eData.phone
        }
    }, [eData])
   
    return <>
        <div className="col-md-4">
            <div className="card p-4">
                <h3 className="mb-4 text-center">Add User</h3>
                <form onSubmit={submitHandler}>
                    <input type="hidden" ref={id} />
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            ref={name}
                            className="form-control"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                            type="text"
                            ref={city}
                            className="form-control"
                            placeholder="Enter city"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            ref={phone}
                            className="form-control"
                            placeholder="Enter Phone"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        {eData == undefined ? "Save User" : "Update User"}
                    </button>
                </form>
            </div>
        </div>
    </>
}