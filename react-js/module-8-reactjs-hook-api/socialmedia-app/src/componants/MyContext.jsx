import { createContext, useReducer } from "react";

export const MyContext = createContext()
const reducer = (state,action) => {
    if(action.type == "ADD")
    {   
        state = [...state,action.payload]
    }
    else if(action.type == "EDIT")
    {

    }
    else if(action.type == "DELETE")
    {
        state = state.filter(e=>e.username!=action.payload.username)
    }
    return state
}
const ContextProvider = ({children}) =>{
    var data=[{
            username:"Mayur",
            title:"Title",
            desc:"Desc",
            likes:0
        }]
    const [state,dispatchState] = useReducer(reducer,data)
    return<>
    <MyContext.Provider value={{state,dispatchState}}>
        {children}
    </MyContext.Provider>
    </>
}
export default ContextProvider
