
import HorizontalButton from '../HorizontalButton'
import React, { useState,useEffect } from 'react';
import {Stack, Box, Typography, Button} from '@mui/material'
import LibrarianList from './LibrarianList.jsx'

// Librarian forms

import AddLibrarianForm from '../Forms/AddLibrarian';
// import DeleteLibrarianForm from '../Forms/DeleteLibrarian';
import LibrarianDetails from '../Forms/LibrarianDetails';
import BlockLibrarian from '../Forms/BlockUser.jsx';
import DeleteLibrarianForm from '../Forms/DeleteUser.jsx';


const Libraian = () => {
    const[showForm,setShowForm]=useState(false);
    const[showStudentDet,setshowStudentDet]=useState(false);
    const[showdltstd,setShowdltstd]=useState(false);
    const[showdblkstd,setShowdblkstd]=useState(false);

    const[showAdlb,setShowAdlb]=useState(false);
    const[showLibDelete,setShowLibDelete]=useState(false);
    const[showdblklib,setShowdblklib]=useState(false);
    const[showLibDetails,setShowLibDetails]=useState(false);
    const[showbg,setShowBg]=useState(true)
  
    useEffect(() => {
      if (showLibDelete || showForm || showAdlb || showdltstd || showdblkstd || showdblklib || showStudentDet || showLibDetails) {
        setShowBg(false);
      } else {
        setShowBg(true);
      }
    }, [showLibDelete,showForm, showAdlb, showdltstd, showdblkstd,showdblklib, showStudentDet,showLibDetails])



  return (
    <>
      <div id='formpopup'>
          <>
              {/* add librarian */}
              {showAdlb?<AddLibrarianForm click={setShowAdlb}/>:""}

              {/* Deletelibrarin */}
              {showLibDelete?<DeleteLibrarianForm title='Delete Librarian' click={setShowLibDelete}/>:""}

              {/* librarian details */}
              {showLibDetails?<LibrarianDetails click={setShowLibDetails}/>:""}

              {/* Block librarian */}
              {showdblklib?<BlockLibrarian title='Block Librarian'click={setShowdblklib}/>:""}
          </>
      </div>

      {showbg?
      <Stack spacing={2}>
        <div className='ManageUser'> 
        
            <div className='display_section'>
              <Typography variant='h5' align='center'>Librarian</Typography>
              <div className='display_sub_section'>
                <Stack direction='row' display='flex' spacing={6}>
                  <Button variant='contained' onClick={()=>setShowAdlb(true)}>Add Librarian</Button>
                  <Button variant='contained' onClick={()=>setShowLibDetails(true)}>Lbrarian Details</Button>
                  <Button variant='contained' onClick={()=>setShowdblklib(true)}>Block librarian</Button>
                  <Button variant='contained' onClick={()=>setShowLibDelete(true)}>Delete librarian</Button>
                </Stack>
              </div>
            </div> 
        </div>
        <LibrarianList/>
      </Stack>
      :""}

    </>
  )
}

export default Libraian