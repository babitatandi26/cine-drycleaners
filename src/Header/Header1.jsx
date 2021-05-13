import React, { useState } from 'react';
import './Header1.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header1= (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <> 
    <div className="Header">
    <div className="">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-1">
                <a className="navbar-brand" href="#"><h1 className="font-weight-bold">CineDrycleaners</h1></a> 
                </div>
                <div className="col-lg-5 col-md-5 col-3"></div>
                <div className="col-lg-5 col-md-5 col-8">
                    <div className="" style={{display:"flex"}}>
							<a className="nav-link" style={{fontSize:"1.2rem",color:"orange"}} href="#">Home <span className="sr-only">(current)</span></a>
					
							<a className="nav-link" style={{fontSize:"1.2rem",color:"#fff"}} href="#aboutus">About Us</a>
						
							<a className="nav-link" style={{fontSize:"1.2rem",color:"#fff"}} href="#services">Services</a>
						
							<a className="nav-link" style={{fontSize:"1.2rem",color:"#fff"}} href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="header-section">
				<div className="center-div">
										<p>A Tradition of Right quality </p>
					<h3>Since 1985</h3>
					<div className="header-buttons">
						<a href="#Track-your-Order">Order  Tracking </a>
						<a href="#Schedule-a-pickup">Schedule pickup</a>
					</div>
				</div>
			</section>
      </div>
    </>
  );
}

export default Header1;
