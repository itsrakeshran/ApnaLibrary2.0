import React, { useState } from 'react';
import BookData from '../data/book';
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';


const AddBook = ({click}) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        branch:'',
        publicationYear: '',
        availableCopies: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData)
        const api_url=`http://localhost:8000/api/book`;
        try {
            const res = await axios.post(api_url, formData);
            window.alert("Book Added Successfully");
            setFormData({
                title: "",
                author: "",
                branch: "",
                publicationYear: "",
                availableCopies: "",
            });
        } catch (error) {
            console.error("Error adding book:", error.message);
            // Handle the error (e.g., display an error message)
            window.alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>
                    <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>   
                    
                    <h3>Add Book Form</h3>
                    <fieldset>
                        <textarea placeholder="Title" name="title" value={formData.title} onChange={handleChange} required></textarea>
                    </fieldset>

                    <fieldset>
                        <input placeholder="Author" type="text" name="author" value={formData.author} onChange={handleChange} required />
                    </fieldset>

                    <fieldset id='select_branch'>
                        <select name="branch" value={formData.branch} onChange={handleChange} required>
                            <option value="">Select Branch...</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Electronics and Communication">Electronics and Communication</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Chemical Engineering">Chemical Engineering</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <input placeholder="Edition" type="text" name="publicationYear" value={formData.publicationYear} onChange={handleChange} required />
                    </fieldset>

                    <fieldset>

                        <input 
                        placeholder="Copies" 
                        type="text" 
                        name="availableCopies" 
                        value={formData.availableCopies} onChange={handleChange} 
                        required />

                    </fieldset>

                    <fieldset>

                        <button 
                        name="submit" 
                        type="submit" 
                        id="contact-submit" 
                        data-submit="...Sending">
                            Submit
                        </button>

                    </fieldset>
            </form>
        </div>
    );
};

export default AddBook;

