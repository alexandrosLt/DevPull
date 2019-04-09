import React from 'react' 
import img from '../onotherOne/images/paralia.jpg'

class Profil extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : this.props.username ,
            picUrl : "",
            name : "Mike",
            surname : "Tsiroglou",
            skills : ["megalo alani","backendMaster"],
            programmingLanguages : ["java","c++"]
        }
       
      
    }
    componentDidMount(){
        //fetch user's data from api 
        // update state with data
    }
    
    render(){
     
        return(
            <div className="card" style={{width: "18rem",padding : 12 ,margin :10, boxShadow :" 10px 10px 5px grey"}}>
               <img src={img} className="card-img-top" alt="..." />
               <div className="card-body">
                   <h3 className="card-title">{this.state.surname}{this.state.name}</h3>
                   Languages : <ul>{this.state.programmingLanguages.map((e)=><li>{e}</li>)}</ul>
                   Skills :  <ul>{this.state.skills.map((e)=><li>{e}</li>)}</ul>
            
               </div>
            </div>
        )
    }
    
}
export default Profil ;