import React,{Component} from 'react'
import toDoItems from '../functionalComponents/todoitems'
import ToDoItem from '../functionalComponents/todoitem'
// to sue state i need a constructor 
//for a constructor i need to call super
class App extends Component{
    constructor(){
        super()
        this.state ={
            todos : toDoItems
        }
    }
    render(){
        
       let listOfComponents =  this.state.todos.map(function(e){
           return (
               <ToDoItem item = {e} key = {e.id}/>
           )
       })
       
        
        return(
            <div>
                 {listOfComponents}
            </div>
        )
    }
}


export default App;