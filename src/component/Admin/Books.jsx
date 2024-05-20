
import HorizontalButton from '../HorizontalButton'
import AddBook from '../Forms/AddBook'
import React, { useEffect, useState } from 'react';
import SearchAppBar from '../Book/Booklistnavbar'
import Booklist from '../Book/Booklist';
import BookTable from '../Book/BookTable'
import PieChar from '../PieChar'

const ManageBook = () => {
  const[isAddBookmode,setAddbookMode]=useState(false)

  const[bookdata,setBookdata]=useState([
    {
      id: '',
      title:'',
      author:'',
      Branch: '',
      year: '',
      edition:'',
      quantity: ''
    }
  ]);

  const[showAddBookForm,setShowAddBookForm] =useState(false);

  const[showBackGrnd,setShowBackGrnd]=useState(true);

  useEffect(()=>{if(showAddBookForm){
      setShowBackGrnd(false);
    }else{
      setShowBackGrnd(true)
    }}
  ,[showAddBookForm]);


  useEffect(()=>{fetchBookdata()},[bookdata]);

  async function fetchBookdata(){
    const getallbook_api_ulr="http://localhost:5000/book"
    const response= await fetch(getallbook_api_ulr,{
      method:"Get",
      mode:"cors"     
    });
    const booklist= await response.json(response);
    console.log(...booklist);
    setBookdata(...booklist);
    console.log(bookdata);
  }

  return (
      <div className='display'> 
        {
          isAddBookmode?<AddBook click={setAddbookMode}/>:
            <>
              <h1>Book Statics:</h1> 
              <div className="dispay-upper">
                <PieChar/>
              </div>   
            
              <div className="display-right">
                    <div className="display-right-header">
                      <SearchAppBar click={setAddbookMode}/>
                    </div>
                    
                    <div className="display-right-list">
                      <div className="display-right-list-booklist">
                        <BookTable/>
                      </div>
                    </div>        
              </div>
          </>
        }
      </div>
  )
}

export default ManageBook;