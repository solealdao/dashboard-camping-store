import React, { useState, useEffect } from 'react';

function LastProductInDb(){

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then( res => res.json())
            .then ( data => {
                setProduct(data);
            })
            .catch( err => console.log(err));
        }, []);
    
    
    
    useEffect(() => {}, [product]);

    let productLast = {
        name:product.name,
        description:product.description,
        image: product.image,
    }

    let ultProd = [productLast];


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/api/products/${ultProd.image} `} alt=" Último producto "/>                        
                    </div>
                    <h2> {ultProd.name}</h2>
                    <p>{ultProd.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="noreferrer" href='{ultProd.detail}'>Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
