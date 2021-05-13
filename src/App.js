import React from 'react';
import './App.css';
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.././node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Header1 from './Header/Header1';

const App = () => {
  return (
    <>
    <div className="App">
        {/* <Header1/> */}
        <Header/>
        <AboutUs/>
        <Services/>
        {/* <ContactUs/> */}
        <Footer/>
    </div>
    </>
  );
}

export default App;
