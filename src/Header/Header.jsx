import React from 'react';
import './Header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import brand from '../clothes/water.png';

const Header = () => {
  return (
    <>
    <div className="Header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <div className="container  p-2">
			<a className="navbar-brand" href="#"><h1 className="font-weight-bold">CineDrycleaners</h1></a> 
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon "></span>
					</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" style={{fontSize:"1.2rem",color:"orange"}} href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" style={{fontSize:"1.2rem",color:"#fff"}} href="#aboutus">About Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" style={{fontSize:"1.2rem",color:"#fff"}} href="#services">Services</a>
						</li> 
						<li className="nav-item">
							<a className="nav-link" style={{fontSize:"1.2rem",color:"#fff"}} href="#">Contact Us</a>
						</li>  
					</ul>
				</div>
				</div>
			</nav>
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

export default Header;
