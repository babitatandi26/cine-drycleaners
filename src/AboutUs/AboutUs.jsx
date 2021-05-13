import React from 'react';
import './AboutUs.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const AboutUs = () => {
  return (
    <>
    <div className="AboutUs">
        <h1 style={{textAlign:"center",color:"#118574",textDecoration:"underline",fontFamily:"san-serif"}}>About<span style={{color:"orange"}}>Us</span></h1><br/><br/>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-4"></div>
                <div className="col-lg-4 col-md-4 col-4"></div>
                <div className="col-lg-4 col-md-4 col-4"></div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                <p>	
                  Cine Drycleaners offers quality laundering and dry cleaning service to both individuals and corporations in the Power City of Chhattisgarh and Korba Sub-urban areas. With more than 25 years experience in the business, you can count on quality and superior service from us.
                <br/>
                  We specialize in the following commercial industries Hospitality industries Health care facilities Uniform service industries Commercial offices Small businesses. With our special services for corporate clients, you get more than just quality cleaning.	
						</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default AboutUs;
