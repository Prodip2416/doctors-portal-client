import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import 'react-calendar/dist/Calendar.css';
import AppointmentBook from './AppointmentBook/AppointmentBook';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (date) => {
        setDate(date);
    }

    return (
        <div>
            <Navbar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <AppointmentBook/>
        </div>
    );
};

export default Appointment;