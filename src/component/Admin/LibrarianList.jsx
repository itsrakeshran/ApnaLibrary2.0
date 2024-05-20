import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'fullName', headerName: 'Student name', width: 180 },
  { field: 'mobile', headerName: 'Mobile No',  type: 'string', width: 150},
  { field: 'email', headerName: 'Email id', type: 'string', width: 250},
  { field: 'status',headerName: 'Status',type: 'string', width: 120},
];

let rows = [];

const fetchAllStudents=async()=>{
  const getAllStudent_url=`http://localhost:8000/api/user/librarians`
  const res= await axios.get(getAllStudent_url);
  transformedArray(res.data)
}

const transformedArray = (originalArray)=>{
  let newarray=originalArray.map((obj, index) => ({
    id: index + 1,
    fullName: obj.name,
    mobile: obj.mobile,
    email:obj.email,
    status:obj.IsBlocked?"Block":"Active"
  }));
  rows=newarray;
};


export default function LibrarianList() {

  useEffect(()=>{
    fetchAllStudents();
  },[]);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
