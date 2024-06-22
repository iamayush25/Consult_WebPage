import React from 'react';
import './Navbar-Top.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const UpperNavbar = () => {
    return (
        <div className="Nav">
            <div className="Nav-left">
                <a href="#faqs">FAQs</a>
                <hr className='hr'/>
                <a href="#support">Support</a>
                <hr className='hr'/>
                <a href="#privacy">Privacy</a>
                <hr className='hr'/>
                <a href="#policy">Policy</a>
                <hr className='hr'/>
                <a href="#career">Career</a>
            </div>
            <span className="Nav-right">
                <div className="contact-info">
                    <p>contact@example.com</p>
                    <hr className='hr'/>
                    <p>+1234567890</p>
                </div>
            </span>
        </div>
    );
};

export default UpperNavbar;
