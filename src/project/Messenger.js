import React  from 'react'
import Chat from './Chat'
import Profil from './Profil'
import Contacts from './Contacts'
import userlist from './userlist'





class Messenger extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentContact : {},
            listOfUsers : [],
            isLoading : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
   
    handleClick(e){
        console.log('inside click')
        console.log(e.target.innerText);
        let fullnameFromClickedDiv = e.target.innerText;
        console.log("e.target.innerText",e.target.innerText)
        console.log("mpainw stin map")
        this.state.listOfUsers.map((e)=> console.log(e.lastName + e.firstName))
        let filteredList = this.state.listOfUsers.filter((element)=>element.firstName+element.lastName ===fullnameFromClickedDiv);
        console.log(filteredList);
        let u = filteredList[0];
        console.log("currContac pri tn allagi",this.state.currentContact);
        console.log("u :",u);
        this.setState({currentContact : u});
        console.log("curr contact :", this.state.currentContact);
    }
    componentDidMount(){
            this.setState({isLoading :true})
            window.$.ajax({
                url: 'http://localhost:8080/api/profile/developers',
                dataType: 'json',                       
                type: 'GET'         
                
            }).done( (json) => {
                console.log("Fetched users");
                console.log(json);
                this.setState({listOfUsers : json ,
                              currentContact : json[0] ,
                              isLoading : false})
                console.log(this.state.listOfUsers)
               
                
            });
        
    }
    
    render(){
        
        console.log('curConta stin render',this.state.currentContact)
        return(
            
            <div className = "container-fluid row " >
              
                  <Contacts lista = {this.state.listOfUsers} funk = {this.handleClick}/>
                  <Chat  user = {this.state.currentContact}/>
                 
            </div>
            
        )
    }
    
}
export default Messenger ;