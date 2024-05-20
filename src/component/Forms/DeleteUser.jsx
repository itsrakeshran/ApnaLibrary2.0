import React, { useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import {Stack, Box, Typography, Button, TextField} from '@mui/material'
import axios from 'axios';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material'


const DeleteUser = ({click,title}) => {
    const [userEmail, setUserEmail] = useState('');
                                                                                
    const handleChange = (e) => {
        setUserEmail(e.target.value);        
    };

    const handleSubmit = async() => {
        if(userEmail){
            try{
                const api_url=`http://localhost:8000/api/user/${userEmail}`;
                let res= await axios.delete(api_url)
                window.alert("user Deleted Sucessfully");
                setUserEmail('')
            }catch{
                console.error("userBlock Error")
            }
        }
        else{
            window.alert("Please Enter Email")
        }
    };

    return (
        <div className="form_container">
            <form id="contact" >
                <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div> 
                <Stack direction='column' spacing={2}>
                    <Typography variant='h6'>{title}</Typography>
                    <TextField label='Email Id' variant='outlined' value={userEmail} onChange={handleChange}></TextField>
                    <Box>
                        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                    </Box>                           
                </Stack>
            </form>
        </div>
    );
};

export default DeleteUser;



