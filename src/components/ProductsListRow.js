import React from 'react';
import PropTypes from 'prop-types';


function ProductsListRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>
                        <ul>
                            {props.categorias}
                        </ul>
                    </td>
                </tr>
            )
    }
    ProductsListRow.defaultProps = {
        name: 'No name',
        description: 'No description',
        categorias: 'No categoría'        
    }
    
    /* PROPTYPES */
    
    ProductsListRow.propTypes = {
        atritutes: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            categorias: PropTypes.string.isRequired            
        })
    }    
        

export default ProductsListRow;