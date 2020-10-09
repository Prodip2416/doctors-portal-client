import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import { faClock, faPhoneVolume, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infos = [
        { id: 1, title: 'Opening Hours', description: 'Lorem ipsum dolor sit amet?', icon: faClock, bgColor: 'primary' },
        { id: 2, title: 'Visit Our Location', description: 'Broolyn 100068, USA', icon: faMapMarker, bgColor: 'dark' },
        { id: 3, title: 'Contact Us Now', description: '+10743727435', icon: faPhoneVolume, bgColor: 'primary' }
    ]
    return (
        <div className="d-flex justify-content-center">
           <div className="row w-75 text-white">
                {
                    infos.map(item => <InfoCard key={item.id} info={item} />)
                }
           </div>
        </div>
    );
};

export default BusinessInfo;