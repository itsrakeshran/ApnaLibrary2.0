import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import {TextField, Stack, Button, Typography, Box} from '@mui/material';
import axios from 'axios';


const IssueBook = ({click}) => {
    const [formData, setFormData] = useState({
        email: '',
        bookId: '',
        type:"Borrowed"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async() => {
        if(formData.email=='' & formData.bookId==''){
            window.alert("Please Email and book id")
        }else{
    
        const api_url=`http://localhost:8000/api/booktransaction`;
        try {
            const res = await axios.post(api_url, formData);
            window.alert("Transaction Succes fully");
            setFormData({
                email: '',
                bookId: '',
                type:"Borrowed"
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
                <Stack direction='column' spacing={2}>
        
                    <Typography variant='h6'>Issue Book </Typography>
                    <TextField
                     id="outlined-basic" 
                     label="Student Email" 
                     variant="outlined"
                     name="email"  
                     value={formData.email} 
                    onChange={handleChange} required/>

                    <TextField
                     id="outlined-basic" 
                     label="Book Id" 
                     variant="outlined"
                     name="bookId"  
                     value={formData.bookId} 
                     onChange={handleChange} required/>
                    <Box>
                        <Button
                        variant="contained"
                        onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                    </Stack>
            </form>
            
        </div>
    );
};

export default IssueBook;

