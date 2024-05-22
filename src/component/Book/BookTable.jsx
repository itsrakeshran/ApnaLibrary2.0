import * as React from 'react';
import {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function BasicTable() {
    const[bookdata,setBookdata]=React.useState([]);

    async function fetchBookData(){
      try{
        let getAllBook_url="http://localhost:8000/api/book"
        let res= await axios.get(getAllBook_url,{withCredentials:true})
        // let response=await fetch(getAllBook_url,{
        //     method:"GET",
        //     mode:'cors'
        // });
        // let bookdata=await response.json(response);
        // console.log(bookdata);
        setBookdata([...res.data]);
      }catch(err){
        console.error({"Get all books Error":err})
      }
    }

    useEffect(()=>{
        fetchBookData();
    },[]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Book Id</TableCell>
            <TableCell>Book Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Branch</TableCell>
            <TableCell align="left">year</TableCell>
            <TableCell align="center">Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookdata.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left" color='success'>{row.bookId}</TableCell>
                <TableCell component="th" scope="row">{row.title}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">{row.branch}</TableCell>
                <TableCell align="left">{row.publicationYear}</TableCell>
                <TableCell align="center">{row.availableCopies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}