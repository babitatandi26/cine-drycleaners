import React from 'react';
import './Services.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import card1 from '../clothes/back1.jpg'
import card2 from '../clothes/alter.jpg'
import card3 from '../clothes/polish.jpg'
import card4 from '../clothes/iron.jpg'

const Services = () => {
  return (
    <>
    <div className="Services">
        <h1 style={{textAlign:"center",color:"orange",fontFamily:"san-serif",textDecoration:"underline"}}>Our<span style={{color:"#118574"}}>Services</span></h1><br/><br/>
        <div className="container">
          <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                  <div className="card" id="card" style={{width: "16rem"}}>
                      <img src={card1} className="card-img-top"  alt="..." height="300rem" style={{marginLeft:"0px"}}/>
                      <div className="card-body" style={{backgroundColor:"#118574"}}>
                          <h5 className="card-title" style={{color:"#fff",textAlign:"center"}}>Drycleaning</h5>
                      </div>
                    </div>
                </div> 
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="card" id="card" style={{width: "16rem"}}>
                      <img src={card2} className="card-img-top"  alt="..." height="300rem" style={{marginLeft:"0px"}}/>
                      <div className="card-body" style={{backgroundColor:"#118574"}}>
                          <h5 className="card-title" style={{color:"#fff",textAlign:"center"}}>Clothing Alteration</h5>
                      </div>
                    </div>
                </div> 
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="card" id="card" style={{width: "16rem"}}>
                      <img src={card3} className="card-img-top"  alt="..." height="300rem" style={{marginLeft:"0px"}}/>
                      <div className="card-body" style={{backgroundColor:"#118574"}}>
                          <h5 className="card-title" style={{color:"#fff",textAlign:"center"}}>Fabric Polish & color</h5>
                      </div>
                    </div>
                </div> 
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="card" id="card" style={{width: "16rem"}}>
                      <img src={card4} className="card-img-top"  alt="..." height="300rem" style={{marginLeft:"0px"}}/>
                      <div className="card-body" style={{backgroundColor:"#118574"}}>
                          <h5 className="card-title" style={{color:"#fff",textAlign:"center"}}>Laundry Services</h5>
                      </div>
                    </div>
                </div> 
          </div>
        </div>
    </div>
    </>
  );
}

export default Services;
