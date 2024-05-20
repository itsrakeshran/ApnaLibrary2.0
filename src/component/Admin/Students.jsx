
import HorizontalButton from '../HorizontalButton'
import React, { useState,useEffect } from 'react';
import StudentList from './StudentList.jsx'
import {Stack, Box, Typography, Button} from '@mui/material'


//forms
import StudentForm from '../Forms/AddStudent';
import DeleteStudent from '../Forms/DeleteUser.jsx';
import BlockStudentForm from '../Forms/BlockUser.jsx';
import StudentDetails from '../Forms/StudentDetails'



const Students = () => {
    const[showForm,setShowForm]=useState(false);
    const[showStudentDet,setshowStudentDet]=useState(false);
    const[showAdlb,setShowAdlb]=useState(false);
    const[showdltstd,setShowdltstd]=useState(false);
    const[showdblkstd,setShowdblkstd]=useState(false);
    const[showdblklib,setShowdblklib]=useState(false);
    const[showLibDetails,setShowLibDetails]=useState(false);
    const[showbg,setShowBg]=useState(true)
  
    useEffect(() => {
      if (showForm || showAdlb || showdltstd || showdblkstd || showdblklib || showStudentDet || showLibDetails) {
        setShowBg(false);
      } else {
        setShowBg(true);
      }
    }, [showForm, showAdlb, showdltstd, showdblkstd,showdblklib, showStudentDet,showLibDetails])



  return (
    <>
      <div id='formpopup'>
          <>
              {/* add student */}
              {showForm?<StudentForm click={setShowForm}/>:""}

              {/* deleteStudent */}
              {showdltstd?<DeleteStudent title='Delete Student' click={setShowdltstd}/>:""}

              {/* BlockStudent */}
              {showdblkstd?<BlockStudentForm title="Block Student"  click={setShowdblkstd}/>:""}

              {/* studentdetai? */}
              {showStudentDet?<StudentDetails click={setshowStudentDet}/>:""}
          </>
      </div>

      {showbg?
      
      <Stack spacing={2}>
          
          <div className='display_section'>
            <Typography variant='h5' align='center'>Student</Typography>
            <div className='display_sub_section'>
              <Stack direction='row' display='flex' spacing={6}>
                <Button variant='contained' onClick={()=>setShowForm(true)}>Add Student</Button>
                <Button variant='contained' onClick={()=>setshowStudentDet(true)}>Student Details</Button>
                <Button variant='contained' onClick={()=>setShowdblkstd(true)}>Block Student</Button>
                <Button variant='contained' onClick={()=>setShowdltstd(true)}>Delete Student</Button>
              </Stack>
            </div>
          </div>  
     
      <StudentList></StudentList>
      </Stack>

      :""}
      

    </>
  )
}

export default Students