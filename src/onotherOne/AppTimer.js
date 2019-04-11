import React ,{Component} from 'react'



class App extends Component{
     constructor(){
         super()
         this.state = {
             count :0
         }
         this.handleClick = this.handleClick.bind(this);
     }
     handleClick(){
        this.setState((prevState)=>{
            return {count : prevState.count + 1}
        })
     }
     render(){
         return(
             <div className = "container">
                 <h1>{this.state.count}
                </h1> 
                 <button className = "btn btn-primary" onClick = {this.handleClick}>update count</button>
             </div>
         )
     }


}
export default App ;