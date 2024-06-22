// EmployeeProfile.jsx

import React from 'react';
import './Employee.css';

function EmployeeProfile() {
    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary" id='main-container'>
            <div className="col-md-6 p-lg-5 mx-auto my-5" id='main-text'>
                <p className="display-12 fw-bold">BUSINESS CONSULTANCY</p>
                <h1 className="display-6 fw-bold" id='EmployeeText'>We Provide Solutions On Your Business</h1>
                <div className="d-flex gap-3 justify-content-center lead fw-normal">
                    <a className="icon-link" href="#">
                        Learn more
                        <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                    </a>
                    <a className="icon-link" href="#">
                        Buy
                        <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                    </a>
                </div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    );
}

export default EmployeeProfile;
