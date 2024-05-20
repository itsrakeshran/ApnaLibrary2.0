import React, {useState, useEffect} from 'react'
import { CiUser } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import ManageBook from './Books';
import Admin_Dashboard from './Admin_Dashboard';
import {Link,Routes,Route} from 'react-router-dom'
import Students from './Students';
import Libraian from './Librarian'
import LogoutButton from '../Button/LoginButton'
import fetchUser from '../../utils/fetchuser';
import ProfileCard from '../Profile.jsx'





const Admin_Menu = () => {
        //userdata
        const[userData,setUserData]=useState({});

        useEffect(() => {  
                fetchUser(setUserData);
        }, []);  
 
        return (        
                <>                
                <div className='menu_container'>
                        
                        <div className='left_sidebar'>
                                <ProfileCard name={userData.name} role={userData.role}></ProfileCard>
                                {/* <li id="username">
                                        <img src="https://source.unsplash.com/400x400?profile" alt="" height="50px" />
                                        <p >Hii {userData.name}</p>
                                        <p>{userData.role}</p>
                                </li>  */}
                                <li><hr /></li>
                                <Link to="/admin_menu"><li><p className='sidebar_button'><RiDashboard3Line />Dash Board<IoMdArrowDropright/></p></li></Link>
                                <Link to="/admin_menu/managebook"><li><p className='sidebar_button'><LiaBookSolid />Books<IoMdArrowDropright/></p></li></Link>
                                <Link to="/admin_menu/student"><li><p className='sidebar_button'><CiUser />Students<IoMdArrowDropright/></p></li></Link>     
                                <Link to="/admin_menu/librarian"><li><p className='sidebar_button'><CiUser />Librarian<IoMdArrowDropright/></p></li></Link>     
                               
                                <div className="logout">
                                        <LogoutButton name={"Logout"}/> 
                                </div>
                        </div>

                        <div className='right_sidebar'>
                                <Routes>                         
                                        <Route path='/managebook' element={<ManageBook/>}></Route>  
                                        <Route path='/student' element={<Students/>}></Route>  
                                        <Route path='/librarian' element={<Libraian/>}></Route>  
                                        <Route path='' element={<Admin_Dashboard/>}></Route>  
                                </Routes>                              
                        </div>                        

                </div>
                </>        
        )
};

export default Admin_Menu;