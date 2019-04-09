import React from 'react'



class SingleMessage extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        
        let singleMessageObject = this.props.data
        
        let activeUser = localStorage.getItem("username")
        return(
           
            <div style ={ { float :  singleMessageObject.sender === activeUser ? "right" :"left" ,
                           backgroundColor : singleMessageObject.sender===activeUser ? "rgb(255, 0, 76)" :"lightgrey",
                           color: singleMessageObject.sender===activeUser ? "white" :"black",
                           display: singleMessageObject.msg ==="" ? "none" : "inline-block",
                           fontFamily : "Mark Script , cursive",
                           
                           padding: "5px 20px",
                           wordWrap: "break-word",
                           margin: "5px 0",
                           borderRadius: "30px",
                           clear: "both",
                           maxWidth: "250px"

            }}>
            
                    {singleMessageObject.msg}
                    
            </div>
               
        )
    }
}
export  default SingleMessage 