import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        borderRadius: '5px'
    }
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, title, date }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.service = title;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                     alert('Appointment created successfully.');
                }
            })
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center mb-4" style={{ color: '#1CC7C1' }}>{title}</h2>
                <p className="text-secondary text-center"> <small>On {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className="form-control m-2" placeholder="Your Name" ref={register} required />
                    <input name="phoneNo" className="form-control m-2" placeholder="Your Phone Number" ref={register} required />
                    <input type="email" name="email" className="form-control m-2" placeholder="Email" ref={register} required />
                    <div className="form-group row m-2">
                        <div className="col-4">
                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                        </div>
                    </div>
                    <div className="text-right">
                        <input type="submit" className="btn button-color" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;