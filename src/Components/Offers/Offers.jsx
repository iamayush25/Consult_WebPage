import React from 'react';
import './Offers.css';

function Offers() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>What We Offer</h1>
            <main className="container mt-4">
                <div className="row justify-content-center" style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                    <div className="col-lg-4 col-md-6 mb-4 myCard">
                        <div className="card custom-card p-3" style={{ display: "flex", alignItems: "center", textAlign: "center", backgroundColor: '#fffef9' }}>
                            <div className='RoundLogos' style={{backgroundColor : "red"}} >
                            <i class="fa-solid fa-user-tie" style={{color : "white"}}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Business Research</h5>
                                <p className="card-text">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 myCard">
                        <div className="card custom-card p-3" style={{ display: "flex", alignItems: "center", textAlign: "center", backgroundColor: '#fffef9' }}>
                            <div className='RoundLogos' style={{backgroundColor : "red"}}>
                                <i className="fa-solid fa-chart-pie" style={{color : "white"}}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Strategic Planning</h5>
                                <p className="card-text">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 myCard">
                        <div className="card custom-card p-3" style={{ display: "flex", alignItems: "center", textAlign: "center", backgroundColor: '#fffef9' }}>
                            <div className='RoundLogos' style={{backgroundColor : "red" }}>
                                <i className="fa-solid fa-chart-line" style={{color : "white"}}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Market Analysis</h5>
                                <p className="card-text">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 myCard">
                        <div className="card custom-card p-3" style={{ display: "flex", alignItems: "center", textAlign: "center", backgroundColor: '#fffef9' }}>
                            <div className='RoundLogos' style={{backgroundColor : "red"}}>
                                <i className="fa-solid fa-chart-area" style={{color : "white"}}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Financial Analysis</h5>
                                <p className="card-text">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 myCard">
                        <div className="card custom-card p-3" style={{ display: "flex", alignItems: "center", textAlign: "center", backgroundColor: '#fffef9' }}>
                            <div className='RoundLogos' style={{backgroundColor : "red"}}>
                                <i className="fa-solid fa-scale-balanced" style={{color : "white"}}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Legal Advisory</h5>
                                <p className="card-text">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 myCard">
                        <div className="card custom-card p-3" style={{ display: "flex", alignItems: "center", textAlign: "center", backgroundColor: '#fffef9' }}>
                            <div className='RoundLogos' style={{backgroundColor : "red"}}>
                                <i className="fa-solid fa-house-crack" style={{color : "white"}}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Tax & Insurance</h5>
                                <p className="card-text">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Offers;
