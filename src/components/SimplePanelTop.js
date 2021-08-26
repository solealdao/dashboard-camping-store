import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowProducts from './ContentRowProducts';
import ProductsList from './ProductsList';

function SimplePanelTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Camping Store Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Products-->*/}
					<ContentRowProducts />
					<ContentRowCenter />
					<ProductsList />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default SimplePanelTop;