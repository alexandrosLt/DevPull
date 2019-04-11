import React from 'react'


class Register extends React.Component{
    constructor(props){
        super(props)
       this.username =  React.createRef();
       this.password =  React.createRef();
       this.email    =  React.createRef();
       this.firstname=  React.createRef();
       this.lastname =  React.createRef();
       this.role     =  React.createRef();
       this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
         console.log(this.username.current.value)
         console.log(this.firstname.current.value)
         console.log(this.lastname.current.value)
         console.log(this.email.current.value)
         console.log(this.password.current.value)
         console.log(this.role.current.checked) // returns true or false 


        let r = this.role.current.checked ? "user_employee" : "user_company" 
         window.$.ajax({
            url: 'http://localhost:8080/WebApp/api/login',
            dataType: 'json',                       
            type: 'POST',         
            data: {
               username : this.username.current.value ,
               firstname : this.firstname.current.value , 
               lastname : this.lastname.current.value , 
               email : this.email.current.value , 
               password : this.password.current.value , 
               role : r 
            
            }
        }).then((json) => {   
           
            this.props.history.push('/login');
        });
        
        event.preventDefault();
    }
    
    render(){
        return(
            <div className = "container jumbotron text-center" style = {{fontFamily : "Mark Script , cursive"}}>
               <form onSubmit = {this.handleSubmit}>
                   <h2>Registration form</h2>
                    <div className="form-group">
                        <label >Firstname</label>
                             <input type="text" className="form-control"  placeholder="Enter firstname" ref = {this.firstname} required/>
                    </div>
                    <div className="form-group">
                        <label >Lastname</label>
                             <input type="text" className="form-control"  placeholder="Enter lastname" ref = {this.lastname} required/>
                    </div>
                    <div className="form-group">
                        <label >Username</label>
                             <input type="text" className="form-control"   placeholder="Enter username" ref = {this.username} required/>
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                             <input type="email" className="form-control"   placeholder="Enter email" ref = {this.email} required/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                             <input type="password" className="form-control" placeholder="Password" ref = {this.password} required/>
                    </div>
                    <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" ref = {this.role} />
                          <label className="form-check-label" >Looking for a job ?</label>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
            </div>
        )
    }
   
}
export default Register