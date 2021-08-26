import React from 'react';
import Box from './Box';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Products in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total categories --> */

let categoriesQuantity = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Users quantity --> */

let usersQuantity = {
    title:'Users quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let boxProps = [productsInDB, categoriesQuantity, usersQuantity];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            {boxProps.map( (product, i) => {

                return <Box {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;