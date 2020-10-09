import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';

const Appointment = () => {
    return (
        <div className="row appointment mt-5 mb-5">
            <div className="col-md-6">
                <img src={doctor} className="" alt=""/>
            </div>
            <div className="col-md-6 mt-5">
                <h6 style={{ color: '#1CC7C1'}}>APPOINTMENT</h6>
                <h2 className="text-white mb-3">Make an appointment <br/> Today</h2>
                <p style={{color: 'lightgray'}} className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus vel soluta cupiditate distinctio praesentium quae pariatur neque, accusantium illum? Explicabo eos vitae aliquam sint.</p>
                <button className="btn button-color">LEAR MORE</button>
            </div>
        </div>
    );
};

export default Appointment;