import React from 'react'


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstname : "",
            lastname : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
       
         this.setState({
              [event.target.name]: event.target.value
            })
    }
    render(){
        return(
            <div>
                <form >
                    <input  name = "firstname" type = "text" placeholder ="firstname" onSubmit ={this.handleChange}/>
                    <input  name = "lastname" type = "text" placeholder ="lastname" onChange ={this.handleChange}/>
                   
                    <h1>{this.state.firstname}</h1>
                    <h1>{this.state.lastname}</h1>
                </form>
            </div>
        )
    }
}
export default App ;