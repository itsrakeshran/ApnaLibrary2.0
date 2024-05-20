import React, {useState} from 'react'
import Itemcard from '../Itemcard'
// import { CiUser } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import BookData from '../data/book';
// import { BiSolidCategoryAlt } from "react-icons/bi";
// import { RiDashboard3Line } from "react-icons/ri";
// import { IoMdArrowDropright } from "react-icons/io";

const Admin_Dashboard = () => {
  const[book,setBook]=useState(BookData.length)
  return (
    <div>
        <div className='row_grp'>
                <li className="row_row">  
                        <Itemcard name="Books" data={book} icon={<LiaBookSolid/>}/> 
                        <Itemcard name="Issued Books" data="100" icon={<LiaBookSolid/>}/>
                        <Itemcard name="Active user" data="100" icon={<LiaBookSolid/>}/> 
                        <Itemcard name="Active Member" data="100" icon={<LiaBookSolid/>}/> 
                        <Itemcard name="Books Inside Library" data="100" icon={<LiaBookSolid/>}/> 
                 </li>
         </div>
    </div>
  )
}

export default Admin_Dashboard