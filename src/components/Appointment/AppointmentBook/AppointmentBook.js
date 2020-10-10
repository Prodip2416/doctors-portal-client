import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const AppointmentBook = ({ date }) => {
    const appointments = [
        { id: 1, title: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', description: '11 space available' },
        { id: 2, title: 'Cosmetic Dentistry', time: '10:00 AM - 11:00 AM', description: '13 space available' },
        { id: 3, title: 'Teeth Cleaning', time: '5:00 PM - 7:00 PM', description: '11 space available' },
        { id: 4, title: 'Cavity Protection', time: '8:00 PM - 9:00 PM', description: '13 space available' },
        { id: 5, title: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', description: '15 space available' },
        { id: 6, title: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', description: '09 space available' }
    ];
    return (
        <section>
            <h2 className="text-center" style={{ color: '#1CC7C1' }}>Available appointment on {date.toLocaleDateString()}</h2>
            <div className="container">
                <div className="row mt-5">
                    {
                        appointments.map(item => <AppointmentCard key={item.id} appointment={item} date={date} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AppointmentBook;