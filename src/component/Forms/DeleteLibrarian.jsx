import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const DeleteLibrarianForm = ({click}) => {
    const [formData, setFormData] = useState({
        EmpID: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);

        const api_url="http://localhost:5000/librarian"
        // fetch add_student api
        const response = await fetch(api_url, {
            method: "DELETE",
            mode: "cors",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        });

        setFormData({EmpID:''});

    };

    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>
                
                <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>             
                
                <h3>Delete Librarian</h3>             

                <fieldset>
                    <input placeholder="Emp ID" type="text" name="EmpID" value={formData.EmpID} onChange={handleChange} required />
                </fieldset>

                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>

            </form>
        </div>
    );
};

export default DeleteLibrarianForm;
