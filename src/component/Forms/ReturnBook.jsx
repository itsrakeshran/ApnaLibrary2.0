import React, { useState } from 'react';
import BookData from '../data/book';
import { IoMdCloseCircleOutline } from "react-icons/io";
import {TextField, Stack, Box, Button, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


const ReturnBook = ({click}) => {
    const [formData, setFormData] = useState({
        email: '',
        bookId: '',
        type:"Returned"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async(e) => {
        if(formData.email=='' & formData.bookId==''){
            window.alert("Please Enter Email and book id")
        }else{
        try {
            const api_url=`http://localhost:8000/api/booktransaction`;
            const res = await axios.post(api_url, formData);
            window.alert("Transaction Succes fully");
            setFormData({
                email: '',
                bookId: '',
                type:"Returned"
            });
        } catch (error) {
            console.error("Error  book book Transcation:", error.message);
            window.alert("An error occurred. Please try again later.");
        }
     }
    };


    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>

                        <Stack spacing={3}>
                            <Typography variant='h6'>Return Book</Typography>
                            <TextField 
                            id="outlined-basic" 
                            label="Book Id" 
                            variant="outlined" 
                            name="bookId" 
                            value={formData.bookId} 
                            onChange={handleChange} required />

                            <TextField 
                            id="outlined-basic" 
                            label="Student Email" 
                            variant="outlined" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} required />

                            <Box>
                                <Button variant='contained' onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Box> 
                        </Stack>
                  
            </form>
        </div>
    );
};

export default ReturnBook;

