import React from 'react';
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav_bar'>
        <h1>Apna Library</h1>
        <ul className='nav_ul'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About page</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
          <li><Link to='/hello'>Hello</Link></li>                
            <li> <IoNotificationsCircleSharp /></li>
            <li id='profile'><CgProfile/> <p>hii name</p></li>
            {/* <div className='profile'>
                <CgProfile/>
            </div>
            <div className='notification'>
               
                <IoNotificationsCircleSharp />
            </div> */}
        </ul>
    </div>
  )
}

export default Nav