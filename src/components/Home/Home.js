import React from 'react';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Exceptional from './Exceptional/Exceptional';
import Header from './Header/Header';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import Testimonial from './Testimonial/Testimonial';
import Doctors from './Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Header />
            <ServiceDetail />
            <Exceptional />
            <MakeAppointment />
            <Testimonial />
            <Doctors />
        </div>
    );
};

export default Home;