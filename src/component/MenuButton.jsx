import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedRoutes = () => {
  return (
    <div className='toggle_Button'>
        <Link to={"/student_menu"}><button>Student</button></Link>
        <Link to={"/admin_menu"}><button>Admin</button></Link>
        <Link to={"/librarian_menu"}><button>Librarain</button></Link>
        <Link to={"/"}><button>Home</button></Link>
    </div>
  )
}

export default ProtectedRoutes