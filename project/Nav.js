import React from 'react'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'
function Nav(){


  if(localStorage.getItem("token")===null)
     return null ;
     return(
        <nav className="navbar navbar-dark bg-dark" style = {{boxShadow :" 10px 10px 5px grey",fontFamily :"Mark Script , cursive"}}>
          <NavLink to = "/messenger">Messenger</NavLink> 
          <NavLink to = "/main">Home</NavLink>
          <NavLink to = "/login">login</NavLink>
          <NavLink to = "/login"><Logout/></NavLink>
         
        </nav>
    )
}
export default Nav ;