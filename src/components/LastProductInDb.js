import React from 'react';
import imagenFondo from '../assets/images/campera_rosa.png';

function LastProductInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Esta prenda es una excelente segunda piel por sus propiedades térmicas. Con muy poco volumen brinda confort y mantiene la temperatura corporal.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
