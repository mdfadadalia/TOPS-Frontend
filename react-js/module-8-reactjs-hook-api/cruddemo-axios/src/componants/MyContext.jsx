import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const MyContext = createContext()

const MyContextProvider = ({ children }) => {

    const [state, setState] = useState([{ id: 1, name: "mayur", city: "Rajkot", phone: "123" }])
    const API_URL = "http://localhost:3000/users/"
    const list = async () => {
        const resp = await axios.get(API_URL)
        setState(resp.data)
    }
    useEffect(() => {
        list()
    }, [])

    const add = async(data) =>{
        const resp = axios.post(API_URL,data)
        list()
    }
    const del = async(id) =>{
        const resp = axios.delete(API_URL + id)
        list()
    }
    const [eData,setEdata] = useState()
    const retrive = async(id) =>{
        const resp = await axios.get(API_URL + id)
        setEdata(resp.data)
    }
    const update = async(data,id) =>{
        const resp = axios.put(API_URL + id,data)
        list()
    } 
    const search = (data) => {
        const arr =  state.filter(e=>{
            if(e.name.toLowerCase().startsWith(data.toLowerCase()))
            {
                return e
            }
        })
        if(data)
        {
            setState(arr)
        }
        else
        {
            list()
        }
    }
    return <>
        <MyContext.Provider value={{ state,add,del,retrive,eData,update,search }}>
            {children}
        </MyContext.Provider>
    </>
}
export default MyContextProvider