import React from 'react';

 







function ToDoItem(props){
    console.log(props)
    return(
        <div>
           <input 
              type = "checkbox" checked  = {props.item.isCompleted}
              />
           <p style = {{color : props.item.isCompleted ? "blue" : "red"}}>{props.item.text} </p>
           
         


        </div>
    )
}


export default ToDoItem;