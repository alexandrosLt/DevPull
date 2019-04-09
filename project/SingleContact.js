import React , {Component} from 'react'
import pic from '../onotherOne/images/paralia.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SingleContact extends Component{
    constructor(props){
        super(props)
        
        
    }
    render(){
     
        return(
            
            <div className = "row" style = {{ padding: "5px 10px"}}>
               
                   <img src ={pic} style = {{width : 40 , height :40, borderRadius: "40px"}} alt = "pic here"/>  
               
              
                          {this.props.user.name}
                  
              
             
            

            
            
          </div>
        )
    }
}
export default SingleContact ;