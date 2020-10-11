import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [doctor, setDoctor] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleBlur = (e) => {
        const newDoctor = { ...doctor };
        newDoctor[e.target.name] = e.target.value;
        setDoctor(newDoctor);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', doctor.name);
        formData.append('email', doctor.email);

        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Doctor successfully Added.')
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }

    return (
        <div className="container-fluid row" >
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label>Name</label>
                        <input name="name" type="text" class="form-control" onBlur={handleBlur} />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input name="email" type="email" class="form-control" onBlur={handleBlur} />
                    </div>
                    <div class="form-group ">
                        <label>Upload a image</label>
                        <input type="file" class="form-control" onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;