import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function MainNavbar() {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4">Consult</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Service</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">PAGES</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </header>
        </div>
    );
}

export default MainNavbar;
