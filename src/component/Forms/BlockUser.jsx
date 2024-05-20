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
                let res= await axios.patch(api_url,data)
                console.log(res);
                setUserEmail('')
            }catch{
                console.log("userBlock Error")
            }
        }
        else{
            console.log(userEmail)
            window.alert("Please Enter Email")
        }
    };

    return (
        <div className="form_container">
            <form id="contact" >
                {/* <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>             
                <h3>Block Student</h3>               

                <fieldset className='searchbar'>
                    <input placeholder=" Enter Student ID" type="text" name="StudentID" value={StudentID} onChange={handleChange} required />
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
                    <hr />
                    {
                        ShowStdDetl.Name?
                        <fieldset className='searchdata'>
                            <p>Name:{ShowStdDetl.Name}</p>
                            <p>Email:{ShowStdDetl.Email}</p>
                            <p>Mob No:{ShowStdDetl.Mob}</p>
                            <p>Status:{ShowStdDetl.IsBlocked?"Block":"Active"}</p>
                            <p>No of Books:{ShowStdDetl.CurrentBooks}</p>
                        </fieldset>:""
                    } */}

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

                        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
                            
                    </Stack>

            </form>
        </div>
    );
};

export default BlockUser;



