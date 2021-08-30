import React from 'react';
import ProductsListRow from './ProductsListRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia']
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia']
    },
    
]


function ProductsList (){
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
                                <th>Precio</th>
                                <th>Categoría</th>
                            </tr>
                        </thead>                        
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ProductsListRow { ...row} key={i}/>
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