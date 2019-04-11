import React,{Component} from 'react'
import Conditional from "./Conditional" 


class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoading : true
        }
    }

    componentDidMount(){
       setTimeout(()=>
            this.setState({isLoading : false})
       ,3000)
    }
    render(){
        
        return(
            (this.state.isLoading?  <p>loading...</p> : <Conditional/>
               
               
                
                )
        )
    }
}


export default App ;