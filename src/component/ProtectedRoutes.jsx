import React, { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoutes = (props) => {
    const{Component}= props;

    const navigate =useNavigate();
    useEffect(()=>{
        let token = localStorage.getItem('token');
        console.log(token)
        if(!token) {
            navigate('/');
        }
    },[])
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoutes;