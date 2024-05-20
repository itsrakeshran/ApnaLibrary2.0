import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const[user,setUser]=useState('Student');
  const navigate=useNavigate();

  function login(){
    localStorage.setItem('userType',user);
    console.log(user);
    console.log(localStorage.getItem('userType'));
    switch( localStorage.getItem('userType')){
      case 'Student':
        navigate('/student_menu');
        break;
      case 'Admin':
        navigate('/admin_menu');
        break;
      case 'Librarian':
        navigate('/librarian_menu');
        break;
      default:
        navigate('/');
    }
  }

  return (
    <>
      <div className="component">
          <select name="" id="" value={user} onChange={(e)=>setUser(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="Librarian">Librarian</option>
          </select>
          <input type="text" placeholder="Email address or phone number" />
          <input type="password" placeholder="Password" />
          <button id="login" onClick={login}>Log in</button>
      </div>
    </>
  )
}

export default LoginForm;


