import React from 'react' 
import img from '../onotherOne/images/paralia.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SingleContact from './SingleContact';


class Contacts extends React.Component{
    constructor(){
        super()
        this.state = {
            characters : [],
            isLoading : false,
            isActive : true
        }
    }
    
    
    

    
    render(){
         let SingleContactsList =      this.props.lista.map((eachUser)=> 
                                       <div  key = {eachUser.id}>
                                            <SingleContact user = {eachUser} 
                                                           funk = {this.props.funk}/>
                                       </div>)
        
        return(
            <div className = "col-2">
                        <h1 className="contacts-title">Contacts</h1>
                        {SingleContactsList}
            </div>
          
        )
    }
}
export default Contacts ;