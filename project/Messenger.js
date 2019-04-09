import React  from 'react'
import Chat from './Chat'
import Profil from './Profil'
import Contacts from './Contacts'




function Messenger(){
    return(
        <div className = "container-fluid row " style ={{fontFamily : "Mark Script , cursive"}}>
          
              <Contacts />
              <Chat  />
              <Profil />
        </div>
        
    )
}
export default Messenger ;