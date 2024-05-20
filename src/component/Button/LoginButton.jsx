import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';

export default function LogoutButton({name,onclick}) {


  const handleRemoveUserData = () => {
    console.log("Handle Remove is Clicked");
    localStorage.clear();
    Cookies.remove('token');
    Cookies.remove('role')
};

return (
    <>
    <Link to={'/'}>
      <Button variant="contained" onClick={handleRemoveUserData}>{name}</Button>
    </Link>
    </>
  );
}

