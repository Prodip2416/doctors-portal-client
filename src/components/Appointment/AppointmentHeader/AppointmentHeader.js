import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar'

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <main>
            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;