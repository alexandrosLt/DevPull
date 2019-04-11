import React from 'react'
import {NavLink} from 'react-router-dom'
const Navigation = ()=>
      <div>
         <NavLink to = "/"> <button  className = "btn btn-primary">Home</button></NavLink>
         <NavLink to = "/about"><button  className = "btn btn-primary">about</button></NavLink>
         <NavLink to = "/contact"><button  className = "btn btn-primary">contact</button></NavLink>
        
          
      </div>


export default Navigation ;