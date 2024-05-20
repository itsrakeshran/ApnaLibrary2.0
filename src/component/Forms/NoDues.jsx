import React, { useState } from 'react';
import BookData from '../data/book';
import { IoMdCloseCircleOutline } from "react-icons/io";
import {TextField, Stack, Box, Button, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


const NoDues = ({click}) => {
    const [email, setEmail] = useState('');
    const [dueBook, setDueBook] = useState();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async() => {
        if(email==''){
            window.alert("Please Enter Student Email")
        }else{
            const api_url=`http://localhost:8000/api/user/chekdues`;
            const data={email:email}
            try {
                const res = await axios.post(api_url,data);
                setDueBook(res.data);
                console.log(res.data)
                setEmail('');
            } catch (error) {
                console.error("No Dues Fetch Error:", error.message);
            
            }
        }
    };


    return (
        <div className="form_container">
            <form id="contact">
                <Stack spacing={3}>
                    <Typography variant='h6'>No Dues Check</Typography>
                    <TextField 
                    id="outlined-basic" 
                    label="Student Email Id" 
                    variant="outlined" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} required />
                    <hr></hr>
                    
                    <Typography variant='body1'>
                    {dueBook>0?`Total number of remaining Books : ${dueBook}`:dueBook==0?'All Book Clear':''}
                    </Typography> 
 
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

export default NoDues;

