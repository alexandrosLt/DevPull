import React from 'react'


class Logout extends React.Component{
    constructor(props){
        super(props)
    this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        //ajax call  to backend
        //++++++++
        

        localStorage.removeItem('token');
        localStorage.removeItem('username');
       
    }
    render(){
        return(
            <button onClick ={this.handleClick}>Logout</button>
        )
    }
}
export default Logout