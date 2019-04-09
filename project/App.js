import React ,{Component} from 'react'
import Main from './Main'
import Nav from './Nav'
import Messenger from './Messenger'
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBath, faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons' 
import Login from './Login'
import Register from './Register'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
   
    render(){
       
       library.add(faBath,faCheck,faLaptopCode)
        return(
            <BrowserRouter >
                <Nav/>
                <Switch>
                   <Route path ="/" exact component={Login}/>
                   <Route path ="/login"  component={Login}/>
                   <Route path = "/messenger" component = {Messenger}/>
                   <Route path = "/main" component = {Main}/>
                   <Route path = "/signUp" component = {Register}/>
                </Switch>
             
            </BrowserRouter>
            
        )
    }
}


export default App ;