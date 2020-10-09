import React from 'react';
import winson from '../../../images/winson.png';
import marry from '../../../images/marry.png';
import ema from '../../../images/ema.png';
import Patient from './Patient/Patient';

const Testimonial = () => {
    const patients = [
        { id: 1, name: 'Winson Harry', location: 'California', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore in sapiente voluptatum rerum sed, repudiandae velit. Blanditiis, unde, ullam officiis porro, laboriosam deleniti soluta architecto incidunt eligendi veniam ipsam eaque placeat? Odio, fugit veritatis.', img: winson },
        { id: 2, name: 'Marry Wis', location: 'California', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore in sapiente voluptatum rerum sed, repudiandae velit. Blanditiis, unde, ullam officiis porro, laboriosam deleniti soluta architecto incidunt eligendi veniam ipsam eaque placeat? Odio, fugit veritatis.', img: marry },
        { id: 3, name: 'Ema Harry', location: 'California', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore in sapiente voluptatum rerum sed, repudiandae velit. Blanditiis, unde, ullam officiis porro, laboriosam deleniti soluta architecto incidunt eligendi veniam ipsam eaque placeat? Odio, fugit veritatis.', img: ema }
    ]
    return (
        <section className="mt-5">
            <div className="row ml-2">
                <div className="col-md-6 mt-5 mb-5">
                    <h6 className="ml-5" style={{ color: '#1CC7C1' }}>TESTIMONIAL</h6>
                    <h2 className="ml-5">What's Our Patients <br />Says</h2>
                </div>
                <div className="col-md-6"></div>
            </div>
            <div style={{ width: '90%' }} className="d-flex justify-content-center">
                <div className="row ml-5">
                    {
                        patients.map(item => <Patient key={item.id} patient={item} />)
                    }
                </div>
               
            </div>
        </section>
    );
};

export default Testimonial;