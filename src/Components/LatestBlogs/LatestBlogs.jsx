import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LatestBlog.css';

function LatestBlogs() {
    const img_01 = require('../../Components/LatestBlogs/blog-1.jpg');
    const img_02 = require('../../Components/LatestBlogs/blog-2.jpg');
    const img_03 = require('../../Components/LatestBlogs/blog-3.jpg');
    
    return (
        <div className="latest-blogs p-4">
            <h1 className="text-center mb-4 mt-4">Latest Blog Post</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={img_01} className="card-img-top img-fluid" alt="Blog post 1" />
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className='icon-date'>
                                    <p className="m-0">01<br />JAN</p>
                                </div>
                                <div className="ms-2">
                                    <div className="d-flex admin-info">
                                        <p className="me-2"><i className="fa-regular fa-user"></i> ADMIN</p>
                                        <p><i className="fa-regular fa-bookmark"></i> WEB DESIGN</p>
                                    </div>
                                    <h6 className="card-title">Magna sea dolor ipsum amet lorem eos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={img_02} className="card-img-top img-fluid" alt="Blog post 2" />
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className='icon-date'>
                                    <p className="m-0">01<br />JAN</p>
                                </div>
                                <div className="ms-2">
                                    <div className="d-flex admin-info">
                                        <p className="me-2"><i className="fa-regular fa-user"></i> ADMIN</p>
                                        <p><i className="fa-regular fa-bookmark"></i> WEB DESIGN</p>
                                    </div>
                                    <h6 className="card-title">Magna sea dolor ipsum amet lorem eos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={img_03} className="card-img-top img-fluid" alt="Blog post 3" />
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className='icon-date'>
                                    <p className="m-0">01<br />JAN</p>
                                </div>
                                <div className="ms-2">
                                    <div className="d-flex admin-info">
                                        <p className="me-2"><i className="fa-regular fa-user"></i> ADMIN</p>
                                        <p><i className="fa-regular fa-bookmark"></i> WEB DESIGN</p>
                                    </div>
                                    <h6 className="card-title">Magna sea dolor ipsum amet lorem eos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestBlogs;
