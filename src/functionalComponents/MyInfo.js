import React from 'react';

let styling = {
    backgroundColor:"lightblue"
}
function MyInfo(){

    const hobbies = ["basket","volley","football"]
    
    
    return(  

            
               
               <div className = "container" >
                    <h1>Alex Litras</h1>
                    <p style = {styling}>im a programmer </p>
                    <ul>
                         <li>{hobbies[0]}</li>
                         <li>{hobbies[1]}</li>
                         <li>{hobbies[2]}</li>
                    </ul>
                    
                   
               </div>
)
}

export default MyInfo