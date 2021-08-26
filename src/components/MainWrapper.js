import React from 'react';
import TopBar from './TopBar';
import SimplePanelTop from './SimplePanelTop';
import Footer from './Footer';
function MainWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <SimplePanelTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default MainWrapper;