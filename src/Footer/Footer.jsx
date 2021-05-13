import React from 'react';
import './Footer.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo1 from '../clothes/logo1.jpg';
import logo2 from '../clothes/logo2.jpg';

const Footer = () => {
  return (
    <>
     <div className="map">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0854314254602!2d82.69811811447686!3d22.350402846723412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a278f2fb00d6f4d%3A0x798a92ab482b5dda!2sCine%20Dry-Cleaners!5e0!3m2!1sen!2sin!4v1620393231624!5m2!1sen!2sin" 
      allowfullscreen="" loading="lazy"></iframe>
      </div>
    <div className="Footer">
      <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-12 footer_div1" style={{color:"#fff",marginTop:"70px"}}>
                  <form action="">
                    <div className="form-group">
                      {/* <label for="">Name</label> */}
                      <input type="text" className="form-control" style={{background:"transparent",outline:"none",borderRight:"none",borderLeft:"none",borderTop:"none",borderBottom:"1px solid white",borderRadius:"none"}} placeholder="Name" name="name" required autocomplete="off"/>
                    </div><br/>
                    <div className="form-group">
                      {/* <label for="">Mobile</label> */}
                      <input type="text" className="form-control" style={{background:"transparent",outline:"none",borderRight:"none",borderLeft:"none",borderTop:"none",borderBottom:"1px solid white",borderRadius:"none"}} placeholder="Mobile" maxlength="10" name="mob" required autocomplete="off"/>
                    </div><br/>
                    <div className="form-group">
                          {/* <label for="">Query</label> */}
                            <textarea className="form-control" style={{background:"transparent",outline:"none",borderRight:"none",borderLeft:"none",borderTop:"none",borderBottom:"1px solid white",borderRadius:"none",resize:"none"}} placeholder="Query" name="que" rows="1" id=""></textarea>
                          </div> <br/>
                    <div className="d-flex justify-content-around form-button">
                        <div class="footer-buttons">
                            <a href="#">Submit</a>
                        </div>		
                    </div>
                </form>
            </div>
            <div className="col-lg-1 col-md-1 col-0"></div>
            <div className="col-lg-4 col-md-4 col-12 footer_div2" style={{marginTop:"90px"}}>
                <div className="" style={{color:"#fff", display:"flex"}}>
                    <CallIcon style={{color:"#fff"}}/>
                    <p style={{textShadow:"2px 5px 5px rgba(0,0,0,0.4)"}}>9039898643</p>
                </div><br/>
                <div className="" style={{color:"#fff", display:"flex"}}>
                    <RoomIcon style={{color:"#fff"}}/>
                    <p style={{textShadow:"2px 5px 5px rgba(0,0,0,0.4)"}}>P.H. Road Korba C.G.</p>
                </div><br/>
                <div className="" style={{color:"#fff", display:"flex"}}>
                    <MailIcon style={{color:"#fff"}}/>
                    <p style={{textShadow:"2px 5px 5px rgba(0,0,0,0.4)"}}>cinedrycleaners@gmail.com</p>
                </div><br/>
            </div>
            <div className="col-lg-1 col-md-1 col-0"></div>

            <div className="col-lg-2 col-md-2 col-12 footer_div3" style={{marginTop:"90px"}}>
              <img src={logo1} alt="" width="150px" height="150px"/><br/><br/>
              <div className="">
                  <FacebookIcon style={{color:"#fff",marginRight:"16px"}}/>
                  <InstagramIcon style={{color:"#fff",marginRight:"16px"}}/>
                  <TwitterIcon style={{color:"#fff",marginRight:"16px"}}/>
                  <LinkedInIcon style={{color:"#fff",marginRight:"16px"}}/>
              </div>
            </div>
        </div>
      </div><br/>
    </div>
    </>
  );
}

export default Footer;
