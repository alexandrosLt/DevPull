import React from 'react'
import {NavLink } from 'react-router-dom'
function Welcome(){
    return(
        <div className = "container" style = {{textAlign : "center"}}>
            <NavLink to = "/login"> 
                <button className ="btn btn-primary"> 
                   Login 
                </button>
            </NavLink>
            <NavLink to = "/signUp">
                 <button className ="btn btn-primary">
                  Sign up
                 </button>
            </NavLink>
           
        </div>
    )
}
export default Welcome