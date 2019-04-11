import React from 'react'
import SingleMessage from './SingleMessage'
import messagesData from './messagesData'


let box2 = {
  padding: "0px"
}

let box = {
    boxShadow :" 10px 10px 5px grey",
    boxSizing: "borderBox",
    position: "relative",
    width: "100%",
    border: "1px solid rgba(0,0,0, .3)",
     
    padding: 20,
    paddingBottom: "70px",
    maxHeight: "calc(100vh - 46px)",
    minHeight : "calc(100vh - 46px)",
    overflowY: "scroll",
    
    
}
let searchbox = {
  display: "inline-block",
  boxSizing: "borderBox",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "50px",
  border: "1px solid rgba(0,0,0, .3)",
  padding: "5px 10px",
  backgroundColor : "lightgrey"
 

}


class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            messages : [],
            withUser : {},
            isLoading : false
        }
       this.handleClick = this.handleClick.bind(this)
    }
   
     
    
     //insert message from enter 
    handleClick(e){
       
       if(e.key==='Enter'){
         
        let inputValue = document.getElementById("inp").value
        let prevMessages = this.state.messages
         prevMessages.push({id :4 , msg : inputValue,sender : "admin"})
 
        console.log("prevmessages : ",prevMessages,"input value :",inputValue)
 
        this.setState({
          messages : prevMessages
        })
        document.getElementById("inp").value = ""
       }
      
    }
    componentDidMount(){
        
        var objDiv = document.getElementById("scrollText");
        objDiv.scrollTop = objDiv.scrollHeight;

        let tok = localStorage.getItem("token");
        this.setState({isLoading : true ,withUser : this.props.user})
        window.$.ajax({
          url: 'http://localhost:8080/api/messages/get_messages_between',
          dataType: 'json',                       
          type: 'GET' ,
          data :{
            token : tok,
            receiverId : this.state.withUser.id
          }
         
        
        }).then(json => {   
        this.setState({messages : json,
                       
                       isLoading :false
                      })
        console.log(this.state.messages)
        });
    }

    componentDidUpdate(){
       var objDiv = document.getElementById("scrollText");
       objDiv.scrollTop = objDiv.scrollHeight;
    }
    
     render(){
      
    console.log('o withuser',this.state.withUser)
    let listOfMsges = this.state.messages.map((e)=> <SingleMessage  key = {e.id} data = {e}/>)
    
     if(this.state.isLoading===false && listOfMsges.length===0)return (
        <div className ="col-6"  style = {box2} >
               <div id = "scrollText" style ={box} >
                     <div style = {{textAlign : "center",fontWeight : 200 ,fontSize :30}}  >
                          Start a conversation
                     </div>
               </div >
               <div  >
                  <input style ={searchbox}
                         id ="inp"
                         placeholder="Type your message  " 
                         //style = {{width : "80%" , height :""}} 
                         onKeyPress = {this.handleClick}
                   />
                </div>
         </div>
  )
  if(this.state.isLoading)
    return( 
         <div className ="col-6"  style = {box2} >
             <div id = "scrollText" style ={box} >
                  <div className="text-center">
                         <div className="spinner-border" role="status">
                             <span className="sr-only">Loading...</span>
                         </div>
                  </div>
               
        
            </div >
           <div  >
         
           <input style ={searchbox}
                 id ="inp"
                 placeholder="Type your message  " 
                 //style = {{width : "80%" , height :""}} 
                 onKeyPress = {this.handleClick}
           />
         
                            
            
           </div>
        


    </div>
    )
     
     
    return(
        <div className ="col-6"  style = {box2} >
          <div id = "scrollText" style ={box} >
            {listOfMsges}
            
          </div >
          <div  >
             
              <input style ={searchbox}
                     id ="inp"
                     placeholder="Type your message  " 
                     //style = {{width : "80%" , height :""}} 
                     onKeyPress = {this.handleClick}
               />
             
                                
                
               </div>
            

  
        </div>
    )
  }
    
}
export default Chat ;