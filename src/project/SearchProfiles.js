import React from 'react' 
import Profil from './Profil'
import userlist from './userlist'


class SearchProfiles extends React.Component{
    constructor(){ 
        super()
        this.state = {
            profiles : userlist,
            index : 0
        }
        this.handleLeftClick = this.handleLeftClick.bind(this)
        this.handleRightClick = this.handleRightClick.bind(this)
    }
    
    handleLeftClick(){
           if(this.state.index === 0){
               this.setState({
                   index : this.state.profiles.length-1
               })
           }
           else{
               this.setState((prevState)=> {
                   return {index : prevState.index - 1}
               })
           }
      
   
    }   
    handleRightClick(){
          
        if(this.state.index === this.state.profiles.length-1){
              this.setState({index : 0})
        }
        else {
            this.setState((prevState)=> {
                return {index : prevState.index + 1}
            })
        }
    }
    
    
    render(){
       
        return(
            <div   >
                <div className = "col-3"></div>
                <div className = "col-6">
                     <div className = "row">
                     <button className = "btn btn-primary" onClick = {this.handleLeftClick}>prev</button>
                     <Profil user = {this.state.profiles[this.state.index]}/>
                     <button className = "btn btn-primary" onClick = {this.handleRightClick}>next</button></div>
                     
                </div>
               
            </div>
        )
    
}
}
export default SearchProfiles