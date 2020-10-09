import React from 'react';
import fluoride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png';
import Service from './Service/Service';

const ServiceDetail = () => {
    const services=[
        { id: 1, name: 'Fluoride Treatment', img: fluoride, description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quod consequuntur tempore voluptatem.'},
        { id: 2, name: 'Cavity Feeling', img: cavity, description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quod consequuntur tempore voluptatem.'},
        { id: 3, name: 'Teath Whitening', img: tooth, description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quod consequuntur tempore voluptatem.'},
    ]
    return (
        <section>
            <div className="text-center mt-5">
                <h6 style={{ color:'#1CC7C1'}}>OUR SERVICES</h6>
                <h2>Service we provide</h2>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <div className="row w-75">
                    {
                        services.map(item=> <Service key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;