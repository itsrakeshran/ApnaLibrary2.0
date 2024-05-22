import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
import {Button, Stack, Typography, TextField, Link } from '@mui/material';


const SignForm = () => {
    
    const[role,setRole]=useState('')

    //navigate multiple page
    const navigate =useNavigate();

    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleOnChangePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleOnChangeEmail=(e)=>{
        setEmail(e.target.value)
    }


    const[newpassword,setN_password]=useState('');
    const[newEmail,setN_email]=useState('');

    const handleNewPassword=(e)=>{
        setN_password(e.target.value)
        console.log(newpassword)
        
    }
    
    const handleNewEmail=(e)=>{
        setN_email(e.target.value)
        console.log(newEmail)
    }


    //login singup form transation
    const[isSignup, setIsSignup]=useState(false);
    function SignUpClick(){
        setIsSignup(true)
    }
    function LoginClick(){
        setIsSignup(false)
    }
    useEffect(()=>{
        let role = localStorage.getItem('role')
        if(role){
            findDashBoard(role);
        }
    },[role]);

    async function findDashBoard(role){
        switch(role){
            case 'student':
                navigate('/student_menu');
                console.log('/student_menu')
                break;
            case 'admin':
                navigate('/admin_menu');
                break;
            case 'librarian':
                navigate('/librarian_menu');
                break;
            default:
                navigate('/');
        }
    }

    
    async function login(email,password){
            try{
                let loginUrl='http://localhost:8000/api/auth/login';
                let data={email,password};
                const response = await axios.post(loginUrl, data);
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("role",response.data.role);
                localStorage.setItem("useremail",response.data.email)
                Cookies.set('token', response.data.token);
                setRole(response.data.role)
            }catch(err){
                console.warn({"Login Eroor": err})
            }
    }
    

    async function createPassword(email, password){
            try{
                let data={email:email,password:password}
                console.log(data);
                let setpassword_url='http://localhost:8000/api/auth'
                const res=await axios.post(setpassword_url,data)
            }catch(err){
                console.warn({"Set Password Err": err})
            }
    }

    
  return (
    <>
        <div className="component">
            <Typography variant='h6'>{isSignup?'Sign Up':'Login'}</Typography>
            <Stack direction='column' spacing={3}>
            {isSignup?
                <>
                    <TextField
                     label="email id" 
                     value={newEmail} 
                     onChange={handleNewEmail}
                     variant="outlined" 
                     size='small' 
                     helperText="Email must be register with Libray dept of college" />

                    <TextField
                     label="new password" 
                     variant="outlined" 
                     size='small'  
                     value={newpassword}
                     onChange={handleNewPassword}
                     type="password"/>
                    
                    {/* <TextField
                     label="confirm password" 
                     variant="outlined" 
                     size='small'  
                     name='c_pswd'
                     type="password"/> */}

                    <Button
                     size="small" 
                     variant="Contained" 
                     onClick={()=>createPassword(newEmail,newpassword)}>SignUp</Button>

                    <Typography variant='p'>if you have already account<br/>
                    <Link onClick={LoginClick}>Login Here...</Link> </Typography>
                </>
                :
                <>
                    <TextField
                     id="outlined-basic" 
                     label="email id" 
                     variant="outlined" 
                     size='small' value={email} 
                     onChange={handleOnChangeEmail} />


                    <TextField
                     id="outlined-basic" 
                     label="password" 
                     variant="outlined" 
                     size='small'  
                     type="password" 
                     value={password} 
                     onChange={handleOnChangePassword}/>


                    <Button size="small" variant="Contained" onClick={()=>login(email,password)}>Login</Button>

                    <Typography variant='p'>

                    <Link onClick={SignUpClick}> Create account... </Link> </Typography>
                </>}              
            </Stack>
        </div>
    </>
    )
}

export default SignForm;