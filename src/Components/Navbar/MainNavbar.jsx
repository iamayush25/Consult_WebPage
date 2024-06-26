import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Main-Navbar.css'

function MainNavbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light py-3 mb-4">
            <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <i className="fa-regular fa-face-smile" style={{ color: "rgb(227, 43, 43)", fontSize: '1.5rem' }}></i>
                    <span className="fs-4 text-danger" style={{ fontWeight: '600' }}>CONSULT</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Service</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="./">Front-end Data</a></li>
                                <li><a className="dropdown-item" href="./">Back-end Data</a></li>
                                <li><a className="dropdown-item" href="./">Full Stack Data</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">More Details</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;
