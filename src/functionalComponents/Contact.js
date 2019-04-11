import React from 'react';


function Contact(props){
    console.log(props)
    return(
        <div>
            <p>{props.contact.name}</p>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
            <hr/>
        </div>
    )
}



export default Contact; 