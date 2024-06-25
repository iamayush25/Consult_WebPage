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
                            <h5 className="card-title">Team Member 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                            <h5 className="card-title">Team Member 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                            <h5 className="card-title">Team Member 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default My_Team;
