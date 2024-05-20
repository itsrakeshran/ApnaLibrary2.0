import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const DeleteStudentForm = ({click}) => {
    const [formData, setFormData] = useState({
        StudentID: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);

        const api_url="http://localhost:5000/student"
        // fetch add_student api
        const response = await fetch(api_url, {
            method: "DELETE",
            mode: "cors",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        });

        setFormData({StudentID:''});

    };

    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>                
                <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>           
                <h3>Delete Student</h3>               

                <fieldset>
                    <input placeholder="Student ID" type="text" name="StudentID" value={formData.StudentID} onChange={handleChange} required />
                </fieldset>

                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>

            </form>
        </div>
    );
};

export default DeleteStudentForm;
