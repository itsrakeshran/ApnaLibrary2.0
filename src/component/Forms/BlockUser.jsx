import React, { useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import {Stack, Box, Typography, Button, TextField} from '@mui/material'
import axios from 'axios';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material'







const BlockUser = ({click,title}) => {
 
    const [userEmail, setUserEmail] = useState('');
    const[IsBlocked,setIsBlocked]=useState('')
                                                                                
    const handleChange = (e) => {
        setUserEmail(e.target.value);        
    };

    const handleSubmit = async() => {
        let data={email:userEmail,status:IsBlocked}

        if(data){
            try{
                const api_url=`http://localhost:8000/api/user/block`;
                let res= await axios.patch(api_url,data,{withCredentials:true})
                setUserEmail('');
                window.alert("User Block Sucessfully");
            }catch{
                console.log("userBlock Error")
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
                   
                    <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                        ><Stack direction= 'row' >
                            <FormControlLabel value="true" control={<Radio />} label="Block" onChange={(e)=>setIsBlocked(e.target.value)} />
                            <FormControlLabel value="false" control={<Radio />} label="Unblock" onChange={(e)=>setIsBlocked(e.target.value)}/>
                        </Stack>
                    </RadioGroup>

                    <Box>
                        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                    </Box>
    
                </Stack>

            </form>
        </div>
    );
};

export default BlockUser;



