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
        width:'40%',
        borderRadius: '5px'
    }
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, title }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <h2 className="text-center mb-4" style={{ color: '#1CC7C1' }}>{title}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select name="selectTime" className="form-control m-2" id="selectTime" ref={register}>
                        <option>Select Time</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <input name="name" className="form-control m-2" placeholder="Your Name" ref={register} required/>
                    <input name="phoneNo" className="form-control m-2" placeholder="Your Phone Number" ref={register} required/>
                    <input type="email" name="email" className="form-control m-2" placeholder="Email" ref={register} required />
                    <input type="date" name="calender" className="form-control m-2" placeholder="Email" ref={register} required />
                    <div className="text-right">
                        <input type="submit" className="btn button-color" />
                    </div>       
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;