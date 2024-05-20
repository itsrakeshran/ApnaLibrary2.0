// import React, { useState } from 'react';
// import { IoMdCloseCircleOutline } from "react-icons/io";

// const AddLibrarianForm = ({click}) => {
//     const [formData, setFormData] = useState({
//         EmpID: '',
//         Name: '',
//         Mob:'',
//         Email: '',
//         Password: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         console.log(formData);
//         const api_url="http://localhost:5000/librarian"

//         // fetch add_student api
//         const response = await fetch(api_url, {
//             method: "POST",
//             mode: "cors",
//             headers: {"Content-Type": "application/json",},
//             body: JSON.stringify(formData),
//         });
//         setFormData({
//             EmpID: '',
//             Name: '',
//             Mob:'',
//             Email: '',
//             Password: ''
//         })
//     };

//     return (
//         <div className="container">
//             <form id="contact" onSubmit={handleSubmit}>
//                 <div id='lib_cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>   
//                 <h3>Add Librarian Form</h3>

//                 <fieldset>
//                     <input placeholder="Emp ID" type="text" name="EmpID" value={formData.EmpID} onChange={handleChange} required />
//                 </fieldset>

//                 <fieldset>
//                     <input placeholder="Name" type="text" name="Name" value={formData.Name} onChange={handleChange} required />
//                 </fieldset>

//                 <fieldset>
//                     <input placeholder="Mobile" type="text" name="Mob" value={formData.Mob} onChange={handleChange} required />
//                 </fieldset>

//                 <fieldset>
//                     <input placeholder="Email" type="email" name="Email" value={formData.Email} onChange={handleChange} required />
//                 </fieldset>                

//                 <fieldset>
//                     <input placeholder="Password" type="text" name="Password" value={formData.Password} onChange={handleChange} required />
//                 </fieldset>

                
//                 <fieldset>
//                     <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
//                 </fieldset>
//             </form>
//         </div>
//     );
// };

// export default AddLibrarianForm;



import React, { useState } from 'react';
import {Stack, Box, Typography, Button, TextField} from '@mui/material'
import { IoMdCloseCircleOutline } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const AddLibrarianForm = ({click}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile:'',
        role:'librarian'
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
                window.alert("Librarian Created Sucess fully")
                setFormData({
                    name: '',
                    email: '',
                    mobile:'',
                    role:'librarian'
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
                    <Typography variant='h5'>Add Librarin</Typography>
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

export default AddLibrarianForm;
