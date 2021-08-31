import React, {useEffect, useState} from 'react';
import ProductsListRow from './ProductsListRow';

function ProductsList (){
    let [productsList, SetProductsList] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then ( res => res.json())
            .then ( data => {
                SetProductsList(data.data)
            })
            .catch (err => console.log(err));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre del Producto</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                            </tr>
                        </thead>                        
                        <tbody>
                            {
                                productsList &&
                            productsList.map((product, i) => {
                                return <ProductsListRow 
                                name= {product.name}
                                description= {product.description}
                                categorias= {product.categorias}
                                
                                key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ProductsList;