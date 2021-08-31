import React from 'react';


function ProductsListRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>
                        <ul>
                            {props.categorias.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                </tr>
            )
    }
    
        

export default ProductsListRow;