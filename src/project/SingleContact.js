import React , {Component} from 'react'
import pic from '../onotherOne/images/paralia.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SingleContact extends Component{
    constructor(props){
        super(props)
        
        
    }
   
    render(){
       
        return(
        
             <div className = "row single-contact"  >
                    <img src ={pic} style = {{width : 40 , height :40, borderRadius: "50%"}} alt = "pic here"/>  
                        <div onClick = {this.props.funk}>
                           {this.props.user.firstName}{this.props.user.lastName}
                        </div>
             </div>  
        )
    }
}
export default SingleContact ;