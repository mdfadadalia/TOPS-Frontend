import { Link } from "react-router-dom"

export const Nav = () =>{
    return <div>
        <h1>Welcome Page Routing Demo App</h1>
        <hr/>
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/contact">Contact</a>
        <hr/>
    </div>
}