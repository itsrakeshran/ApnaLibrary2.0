import React , {useEffect, useState} from 'react'

//icons
import { LiaBookSolid } from "react-icons/lia";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import {Link, Route,Routes} from 'react-router-dom';

//Dashboard page content
import Student_Dashboard from './Student_Dashboard';
import LogoutButton from '../Button/LoginButton'
import ProfileCard from '../Profile'

//books
// import BookFilter from './BookFilter';
// import BookData from '../data/book';
import Books from './Books'

//userdata
import fetchUser from '../../utils/fetchuser';

const Student_Menu = () => {
        //userdata
        const[userData,setUserData]=useState({})

        useEffect(() => {
                fetchUser(setUserData);
        }, []);  
        
        const[bookdata,setBookdata]=useState([]);
        console.log(bookdata);

        return (        
                <>
                        <div className='menu_container'>
                                <div className='left_sidebar'>
                                        <ProfileCard name={userData.name} role={userData.role}></ProfileCard>
                                        {/* onClick={()=>setShowBookfilter(false)}
                                        onClick={()=>setShowBookfilter(true)} */}

                                        <li><hr /></li>
                                        <Link to={"/student_menu"}><li ><p className='sidebar_button'><RiDashboard3Line />Dash Board<IoMdArrowDropright/></p></li></Link>
                                        <Link to={"/student_menu/books"}> <li ><p className='sidebar_button'><LiaBookSolid />Show Books<IoMdArrowDropright/></p></li></Link>      
                                        <div className="logout">
                                                <LogoutButton name={"Logout"} /> 
                                        </div>
                                </div>

                                <div className='right_sidebar'>
                                        <Routes>
                                                <Route path='' element={<Student_Dashboard/>}></Route>
                                                <Route path='books' element={<Books bookdata={bookdata}/>}></Route>    
                                        </Routes>
                                                
                                </div>
                        </div>
                </>
        
        )
}

export default Student_Menu;