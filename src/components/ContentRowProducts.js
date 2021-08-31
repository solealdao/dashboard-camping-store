import React, { useState, useEffect } from 'react';
import Box from './Box';


function ContentRowProducts(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then ( response => response.json())
            .then ( data => {
                setProducts(data)
            })
            .catch (e => console.log(e));
    }, []);

    useEffect(() => {

    }, [products]);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/products/categories')
            .then ( res => res.json())
            .then ( categories => {
                setCategories(categories.countByCategory)
                
            })
            .catch (e => console.log(e));
    }, []);
    useEffect(() => {

    }, [categories]);



    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then ( res => res.json())
            .then ( users => {
                setUsers(users)
                
            })
            .catch (e => console.log(e));
    }, []);
    useEffect(() => {

    }, [users]);


    useEffect(()=> console.log('Componente desmontado'),[]);

    let productsInDB = {
        title: 'Total Productos',
        color: 'primary', 
        quantity: products.count,
    }
    
    /* <!-- Total categories --> */
    
    let categoriesQuantity = {
        title:' Total Categorías', 
        color:'success', 
        quantity: categories.length,
    }
    console.log (categories.countByCategory)
    
    /* <!-- Users quantity --> */
    
    let usersQuantity = {
        title:'Total Usuarios' ,
        color:'warning',
        quantity: users.count,
    }

    let boxProps = [productsInDB, categoriesQuantity, usersQuantity];

    return (
    
        <div className="row">
            
            {boxProps.map( (product, i) => {

                return <Box {...product} key={i}/>
            
            })}

        </div>
    )
}
/* <!-- Products in DB --> */


export default ContentRowProducts;