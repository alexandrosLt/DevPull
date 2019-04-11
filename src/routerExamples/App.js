import React from 'react'
import { BrowserRouter, Route ,Switch } from 'react-router-dom' 
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navigation from './Navigation'

class App extends React.Component{

    render(){
        return(
           <BrowserRouter >
                  <Navigation/>
                  <Switch>
                    
                 
                       <Route  path = "/" exact component = {Home}/>
                       <Route  path = "/about" component = {About}/>
                       <Route  path = "/contact" component = {Contact}/>
                       <Route    component = {Error}/>
                  </Switch>
                 
           </BrowserRouter>
        )
    }
    
}
export default App ;