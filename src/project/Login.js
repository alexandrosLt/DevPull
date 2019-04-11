import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
       super(props);
       this.username = React.createRef();
       this.password = React.createRef();
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    

        
   
   handleSubmit(event) {
    console.log('ref to username: ', this.username.current);
    
    const u = this.username.current.value;
    const p = this.password.current.value;
    console.log('Submitting...', u, p);
    
    window.$.ajax({
        url: 'http://localhost:8080/api/login',
        dataType: 'json',                       
        type: 'POST',         
        data: {
            username: u,
            password: p
        }
    }).then(json => {   
        //store the user's data in local storage
        //to make them available for the next
        //user's visit
        console.log("json",json)
        localStorage.setItem('token', json.token);
        localStorage.setItem('username', u);
       
        
        //use the history prop available through
        //the Route to programmatically navigate
        //to another route  
        console.log('thisprops =', this.props)   
        console.log('this.props.history = ',this.props.history)
       

        this.props.history.push('/messenger');
    });
    
    event.preventDefault();
}

    render(){
       
       
        return(
       


            <div style ={{fontFamily : "Mark Script , cursive"}}>
                <div className="jumbotron text-center">
             
             <h1 >Welcome to DevPull</h1>
             <form className="container" onSubmit = {this.handleSubmit} >
             
                 <div className="row">
                     <div className="col-sm-4">
                         <p></p>
                     </div>
                     <div className="col-sm-4">
                         <div className="form-group">
                             <label htmlFor="username">Name:</label>
                             <input type="text" className="form-control" id="usr" required ref = {this.username}/>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-sm-4">
                         <FontAwesomeIcon icon = "laptop-code" style = {{fontSize : "120px"}}/>
                     </div>
                     <div className="col-sm-4">
                     <div className="form-group">
                         <label htmlFor="password">Password:</label>
                         <input type="password" className="form-control" id="pwd" required ref = {this.password}/>
                     </div>
                     <button className = "btn btn-primary" type = "submit"onClick = {this.handleSubmit} >Sign up</button>
                     Dont have an account? 
                     <NavLink to = "/signUp">
                         <button className = "btn btn-primary" type = "submit" >Create Account</button>
                     </NavLink>
                     
                 </div>
                 </div>
                    
     
                 
             </form>
            </div>
            </div>
         )
    }
    
}

export default Login 