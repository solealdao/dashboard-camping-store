import React, {useEffect, useState} from 'react';
import ProductsListRow from './ProductsListRow';

function ProductsList (){
    let [productsList, SetProductsList] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then ( res => res.json())
            .then ( data => {
                let parsedData= data.products;
                for (let i=0; i<parsedData.length; i++) {
                    let product= parsedData[i][0];
                    let categorias= ''
                    for (let j=0; j<product.categorias.length; j++) {
                        categorias += product.categorias[j].name
                        
                        if (j < product.categorias.length-1) {
                            categorias += ', '
                        }
                    }
                    product.categorias=categorias;
                    parsedData[i][0]= product
                    
                }
                SetProductsList(parsedData)
            })
            .catch (err => console.log(err));
        }, []);

        useEffect(() => {
        }, [productsList]);

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
                                    name= {product[0].name}
                                    description= {product[0].description}
                                    categorias= {product[0].categorias}
                                    
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