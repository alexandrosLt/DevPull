import React from 'react';

function Product(props){
    console.log(props); 
    return(
        <div>
             <h1>Name of product :{props.product.name}</h1>
             <p style = {{backgroundColor : (props.product.price > 3) ? "blue": "green" }}>Price :{props.product.price}</p>
             <hr/>
        </div>
    )
}
    
export default Product ;