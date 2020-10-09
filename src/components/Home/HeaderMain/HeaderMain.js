import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main>
            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color:'#3A4256'}}>Your New Smile <br /> Start Here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius a magni accusantium nemo, exercitationem neque?</p>
                    <Link to="/appointment"><button className="btn button-color">GET APPOINTMENT</button></Link>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;