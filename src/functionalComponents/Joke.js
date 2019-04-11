import React from 'react';

function Joke(props){
    console.log(props);
if (props.title == null){
    return(
        null
    )
}else
    return(
       
         <div >
             <h1>{props.title}</h1>
             <p><b>Question :</b>{props.question}</p>
             <p><b>Answer :</b>{props.answer}</p>
             <hr/>
         </div>
     );

   
}


export default Joke ;