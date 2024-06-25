import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './My-Team.css';

function My_Team() {
    return (
        <div className="p-4">
            <h1 className="text-center mb-4 mt-4">Our Team</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img
                            src={require('../../Components/MyTeam/team-1.jpg')}
                            className="card-img-top img-fluid"
                            alt="Team member 1"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Front-end Devoloper</h5>
                            <p className="card-text">Focuses on creating and optimizing user-facing interfaces using HTML, CSS, and JavaScript frameworks.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img
                            src={require('../../Components/MyTeam/team-2.jpg')}
                            className="card-img-top img-fluid"
                            alt="Team member 2"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Back-end Devoloper</h5>
                            <p className="card-text">Manages server-side application logic and integration with databases using various programming languages and frameworks.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img
                            src={require('../../Components/MyTeam/team-3.jpg')}
                            className="card-img-top img-fluid"
                            alt="Team member 3"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Full Stack Devoloper</h5>
                            <p className="card-text">Handles both frontend and backend development, ensuring seamless integration and functionality of web applications across all layers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default My_Team;
