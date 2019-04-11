import React,{Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
     handleClick(){
        
        this.setState(prevState =>{
            return {
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }

    

        render(){
            let btnText = this.state.isLoggedIn ? "logg out" : "logg in"
            return(
               <button className = "btn btn-primary" onClick = {this.handleClick}>
                     {
                        btnText
                     }
               
               </button>
            )
        }
           
    
}


export default App ;