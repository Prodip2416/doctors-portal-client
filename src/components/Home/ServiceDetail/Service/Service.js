import React from 'react';

const Service = ({ item }) => {
    return (
        <div className="col-md-4 mt-5 text-center">
            <div>
                <img src={item.img} alt="" className="img-fluid " />
            </div>
            <div className="mt-4">
                <h4 className="mb-3">{item.name}</h4>
                <p className="text-secondary">{item.description}</p>
            </div>
        </div>
    );
};

export default Service;