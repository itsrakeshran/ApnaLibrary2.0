import React, {useState,useEffect} from 'react'
import { CiUser } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
// import ManageBook from "./ManageBook";
import Librarian_Dashboard from './Librarian_Dashboard';
import LogoutButton from '../Button/LoginButton'
import fetchUser from '../../utils/fetchuser';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import IssueBook from '../Forms/IssueBook'
import ReturnBook from '../Forms/ReturnBook';
import NoDues from '../Forms/NoDues'
import {Button} from '@mui/material'
import ProfileCard from '../Profile.jsx'

const Librarian_Menu = () => { 

        //userdata
        const[userData,setUserData]=useState({});
        const[showForm,setShowForm]=useState('')

        useEffect(() => {
                fetchUser(setUserData);
        }, []);  
        

        
        return (             
                <div className='menu_container'>  
                        <div className='left_sidebar'>
                                <ProfileCard name={userData.name} role={userData.role}></ProfileCard>
                                {/* <li id="username">
                                                <img src="https://source.unsplash.com/400x400?profile" alt="" height="50px" />
                                                <p >Hii {userData.name}</p>
                                                <p>{userData.role}</p>
                                </li>  */}
                                <li><hr /></li>
                                {/* <li><Button variant='contained'>Issue Book</Button></li> */}
                                <li onClick={()=>setShowForm('')}><p className='sidebar_button'><LiaBookSolid />Issue Books<IoMdArrowDropright/></p></li>
                                <li onClick={()=>setShowForm('ReturnBook')}><p className='sidebar_button'><AssignmentReturnIcon />Return Books<IoMdArrowDropright/></p></li>
                                <li onClick={()=>setShowForm('NoDues')}><p className='sidebar_button'><FindInPageIcon />Check No Dues<IoMdArrowDropright/></p></li>
                                  
                        </div>

                        <div className='right_sidebar'>
                                {showForm=='ReturnBook'?<ReturnBook/>
                                :showForm=='NoDues'?<NoDues/>:<IssueBook/>}
                        </div>
                        
                        <div className="logout">
                                <LogoutButton name={"Logout"}/> 
                        </div>
                </div>        
        )
}

export default Librarian_Menu