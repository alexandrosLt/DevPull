import React from 'react'
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading : false,
            character : {}
        }
    }
    componentDidMount(){
        this.setState({isLoading : true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data=> this.setState({character : data,isLoading : false }))
         
    }
    render(){
       const text = this.state.isLoading ? "loading .. " : this.state.character.name
       return(
            <div>
                  {text}
            </div>
       )
    }
}
export default App ;