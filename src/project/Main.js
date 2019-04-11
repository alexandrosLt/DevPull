import React from 'react'
import {NavLink} from 'react-router-dom'
import SearchProfiles from './SearchProfiles'


function Main(){
  
   
    return (
        <div>
            <NavLink to = '/messenger'>
                 <button className = "btn btn-dark">
                     back to messenger
                </button>
            </NavLink>
            <SearchProfiles/>
            
        </div>
    )
}
export default Main ;