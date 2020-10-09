import React from 'react';
import './Patient.css';

const Patient = ({ patient}) => {
    return (
        <div className="col-md-4  mb-5">
            <div className="patient p-3">
                <p>{patient.comment}</p>
                <div className="d-flex justify-content-center mt-5">
                    <div>
                        <img src={patient.img} className="w-75" alt="" />
                    </div>
                    <div>
                        <h6 style={{ color: '#1CC7C1' }}>{patient.name}</h6>
                        {patient.location}
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Patient;