import React from 'react';
import './Offers.css'; // Ensure Offers.css is imported for any custom styles

function Offers() {
    return (
        <main className="container mt-4">
            <div className="row justify-content-center"> {/* Centering the row horizontally */}
                {/* Box 1 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card custom-card">
                        <div className='RoundLogos'>

                            <i className="fa-solid fa-chart-line" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Business</h5>
                            <p className="card-text">Explore business strategies and insights to grow your enterprise.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card custom-card">
                        <div className='RoundLogos'>
                            <i className="fa-solid fa-chart-line" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Research</h5>
                            <p className="card-text">Delve into the latest research and developments in various fields.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card custom-card">
                        <div className='RoundLogos'>

                            <i className="fa-solid fa-chart-line" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Technology</h5>
                            <p className="card-text">Stay updated with the latest technology trends and innovations.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Box 4 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card custom-card">
                        <div className='RoundLogos'>

                            <i className="fa-solid fa-chart-line" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Marketing</h5>
                            <p className="card-text">Discover effective marketing strategies and campaigns.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Box 5 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card custom-card">
                        <div className='RoundLogos'>

                            <i className="fa-solid fa-chart-line" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Finance</h5>
                            <p className="card-text">Get insights into financial management and investment tips.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Box 6 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card custom-card">
                        <div className='RoundLogos'>

                            <i className="fa-solid fa-chart-line" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Health</h5>
                            <p className="card-text">Explore topics on health, wellness, and medical advancements.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Offers;
