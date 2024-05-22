import React, {useEffect, useState} from 'react';
import Itemcard from '../Itemcard';
import { LiaBookSolid } from "react-icons/lia";
import axios from 'axios';


const Student_Dashboard = () => {
  
const[issueBook, setIssueBook]=useState(0);
  const email=localStorage.getItem("useremail");
  useEffect(()=>{
    fetchIssuedBook();
  },[issueBook])

  const fetchIssuedBook = async()=>{
    const api_url=`http://localhost:8000/api/user/chekdues`;
    const data={email}
    try {
        const res = await axios.post(api_url,data,{withCredentials:true});
        setIssueBook(res.data)
    } catch (error) {
        console.error("Fetch dues Issue:", error.message);
    }
  }

  return (
    <div>
        <div className='row_grp'>
                <li className="row_row">  
                        <Itemcard name="Total Active Book" data={issueBook} icon={<LiaBookSolid/>}/> 
                 </li>
         </div>
    </div>
  )
}

export default Student_Dashboard;