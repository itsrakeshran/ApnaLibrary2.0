import React, { useState } from 'react';
import {Stack, Box, Typography, Button, TextField} from '@mui/material'
import { IoMdCloseCircleOutline } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const StudentForm = ({click}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile:'',
        role:'student'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async() => {
        console.log(formData)
       try{
        const api_url="http://localhost:8000/api/user"
        const res= await axios.post(api_url,formData);
        console.log(res);
        console.log(res.statusText);
            if(res.statusText === 'OK'){
                window.alert("Student created Sucess fully")
                setFormData({
                    name: '',
                    email: '',
                    mobile:'',
                    role:'student'
                });
            }
        
       }catch(err){
        console.log({"Error at Add student":err});
       }

    };

    return (
        <>
        <div className="form_container">
            <form id="contact">
            <div id='cross_btn' onClick={()=>click(false)}><CloseIcon /></div>
                <Stack direction='column' spacing={2} >
                    <Typography variant='h5'>Add Student</Typography>
                    <TextField label='Name' name='name' variant='outlined' value={formData.name} onChange={handleChange}/>
                    <TextField label='Email' name='email' variant='outlined'  value={formData.email}  onChange={handleChange}/>
                    <TextField label='Mobile no' name='mobile' variant='outlined' value={formData.mobile}  onChange={handleChange}/>
                    <Box>
                        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Stack>
            </form>
        </div>

        </>
    );
};

export default StudentForm;
