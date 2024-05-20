import React,{useEffect, useState} from 'react';
import Book from '../Book/Book';
import BookCard from '../Book/BookCard'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BookDisplay from '../Book/BookDisplay'

const ManageBook = ({bookdata}) => {

  // let[currnetBook,setBookdata]=useState(bookdata);

  // useEffect(() => {
  //   setBookdata(bookdata);
  // }, [bookdata]);

  return (        
      <div className='product_container'>
          <BookDisplay/>
      </div>         
    
  )
}

export default ManageBook