import React from 'react';
import './Navbar-Top.css';
import "bootstrap/dist/css/bootstrap.min.css";

const UpperNavbar = () => {
    return (
        <div className="container">
            <div className="Nav">
                <div className="Nav-left">
                    <a href="#faqs" className="nav-link">FAQs</a>
                    <hr className='hr'/>
                    <a href="#support" className="nav-link">Support</a>
                    <hr className='hr'/>
                    <a href="#privacy" className="nav-link">Privacy</a>
                    <hr className='hr'/>
                    <a href="#policy" className="nav-link">Policy</a>
                    <hr className='hr'/>
                    <a href="#career" className="nav-link">Career</a>
                </div>
                <span className="Nav-right">
                    <div className="contact-info">
                        <p>contact@example.com</p>
                        <hr className='hr'/>
                        <p>+1234567890</p>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default UpperNavbar;
