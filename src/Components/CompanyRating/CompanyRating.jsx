import React from 'react';
import './CompanyRating.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function CompanyRating() {
    return (
        <div className="company-rating-container">
            {/* Title Div */}
            <div className="title-div mb-4">
                <h2 className="title">Why You Choose Us!!!</h2>
            </div>
            <div className="main-container my-5">
                <div className="content-div d-flex flex-wrap justify-content-around">
                    {/* Sub-Content 1 Div */}
                    <div className="sub-content p-3">
                        <div className="nested-div mb-3">
                            <div className='icons' ><i className="fa-solid fa-percent" style={{ color: '#ff0000' }}></i></div>
                            <div><h3>Best In industry</h3></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-3">
                            <div className='icons' ><i className="fa-solid fa-percent" style={{ color: '#ffffff' }}></i></div>

                            <div><h3>99% Success Rate</h3></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-3">
                            <div className='icons' ><i class="fa-solid fa-award" style={{color: "#ffffff"}}></i></div>

                            <div><h3>Award Winning</h3></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                    </div>

                    {/* Sub-Content 2 Div */}
                    <div className="sub-content p-3">
                        <img
                            src={require('./featurePerson.jpg')}
                            alt="Example"
                            className="img-fluid"
                        />
                        <div className="below-image-content" style={{ backgroundColor: 'red', padding: '10px', color: 'white', borderRadius: '20px' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacinia quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas auctor neque ac sapien maximus eleifend. Nulla ac lacus purus. Cras quis nibh vehicula, tincidunt risus in, fermentum libero.</p>
                            <button type="button" className="btn btn-light mt-3">Learn More</button>
                        </div>
                    </div>

                    {/* Sub-Content 3 Div */}
                    <div className="sub-content p-3">
                        <div className="nested-div mb-3">
                            <div className='icons' ><i class="fa-regular fa-face-smile" style={{color: "#ffffff"}}></i></div>

                            <div><h3>100% Happy Clint</h3></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-3">
                            <div className='icons' ><i className="fa-solid fa-user-tie" style={{ color: '#ffffff' }}></i></div>

                            <div><h3>Professional Advisory  </h3></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-3">
                            <div className='icons' ><i className="fa-solid fa-headset" style={{ color: '#ffffff' }}></i></div>

                            <div><h3>24/7 Costomer Support</h3></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyRating;
