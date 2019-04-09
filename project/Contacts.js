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
   componentDidMount(){
        this.setState({isLoading :true })
        console.log("hit api")
    window.$.ajax({
        
        url: 'https://swapi.co/api/people/1',
        dataType: 'json',                       
        type: 'GET',    
           
        
    }).then(json => {   
       
        let x =[]
        x.push(json)
        this.setState({characters : x})
       
       
       
    });
    
    

    }
    render(){
         let SingleContactsList = this.state.characters.map((eachUser)=><div><SingleContact user = {eachUser}/><hr/></div>)
        
        return(
            <div className = "col-2">
                        <h1>Contacts</h1>
                        {SingleContactsList}
            </div>
          
        )
    }
}
export default Contacts ;