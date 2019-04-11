import React from 'react';
import MyInfo from './MyInfo';
import Joke from "./Joke";
import jokes from "./jokeData";
 import productsdata from './productsData';
 import Product from './Product';
import toDoItems from './todoitems';
import ToDoItem from './todoitem';

//function App(){
  // let ItemsComponents = toDoItems.map((e)=> <ToDoItem key = {e.id} item = {e}/>)
   //return (
   //    <div>
    //       {ItemsComponents}
     //  </div>
   //)
//}

class App extends React.Component {
    



    render(){
        let ItemsComponents = toDoItems.map((e)=> <ToDoItem key = {e.id} item = {e}/>)
        return(
            <div>
                  {ItemsComponents}
            </div>
        )
    }
       
    
}



export default App ;