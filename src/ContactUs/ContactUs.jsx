import React from 'react';
import './ContactUs.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const ContactUs = () => {
  return (
    <>
    <div className="ContactUs">
      <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-0"></div>
            <div className="col-lg-6 col-md-6 col-12">
            <form action="">
              <div className="form-group">
                <label for="">Name</label>
                <input type="text" className="form-control" placeholder="" name="name" required autocomplete="off"/>
              </div><br/>
              <div className="form-group">
                <label for="">Mobile</label>
                <input type="text" className="form-control" placeholder="" maxlength="10" name="mob" required autocomplete="off"/>
              </div><br/>
              <div className="form-group">
                    <label for="">Query</label>
                      <textarea className="form-control" placeholder="" name="que" rows="4" id=""></textarea>
                    </div> <br/>
              <div className="d-flex justify-content-around form-button">								  
                <button type="submit" className="btn btn-primary"  name="submit" id="sub">Submit</button>
              </div>
					</form>
            </div>
            <div className="col-lg-3 col-md-3 col-0"></div>
          </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0854314254602!2d82.69811811447686!3d22.350402846723412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a278f2fb00d6f4d%3A0x798a92ab482b5dda!2sCine%20Dry-Cleaners!5e0!3m2!1sen!2sin!4v1620393231624!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
