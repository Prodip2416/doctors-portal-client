import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const AppointmentCard = ({ appointment, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: '#1CC7C1' }}>{appointment.title}</h5>
                    <h6>{appointment.time}</h6>
                    <small className="text-secondary">{appointment.description}</small><br/>
                    <button onClick={openModal} className="btn button-color mt-3">BOOK NOW</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} title={appointment.title} date={date}/>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;