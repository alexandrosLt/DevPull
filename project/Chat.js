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
    maxHeight: "calc(100vh - 64px)",
    minHeight : "calc(100vh - 64px)",
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
  backgroundColor : "rgb(168, 200, 209)"
 

}


class Chat extends React.Component{
    constructor(){
        super()
        this.state  = {
            messages : [],
            withUser : {},
            isLoading : false
        }
       this.handleClick = this.handleClick.bind(this)
    }
   
     
    
     
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
      this.setState({isLoading : true})
      window.$.ajax({
        url: 'http://localhost:8080/WebApp/api/messages',
        dataType: 'json',                       
        type: 'GET' ,
        data : {
          token : tok
        }       
        
    }).then(json => {   
       
       this.setState({messages : json,isLoading :false})
       console.log(this.state.messages)
      
    });
    }
    componentDidUpdate(){
      var objDiv = document.getElementById("scrollText");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
    
     render(){
      
    
    let listOfMsges = this.state.messages.map((e)=> <SingleMessage  key = {e.id} data = {e}/>)
    
    
  if(this.state.isLoading)
    return( 
         <div className ="col-6"  style = {box2} >
             <div id = "scrollText" style ={box} >
                  <div class="text-center">
                         <div class="spinner-border" role="status">
                             <span class="sr-only">Loading...</span>
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