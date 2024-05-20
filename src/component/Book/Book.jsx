import React, { useEffect, useState } from 'react';

const Book = ({book}) => {
  const[minbook,setMinbok]=useState(true);

  useEffect(()=>{if(book.quantity>10){
      setMinbok(true);
    }else{
      setMinbok(false); 
    }})


  return (  
    <>    
        <div className="book_card" key={book.id}>
          <div className='book_card_top'>
            <p className='id '>ID: {book.id}</p>
          </div>
          <div className='book_card_mid'>
                <img src={`https://source.unsplash.com/800x400?Books`} alt="Book Cover" />
                <p>
                    <span id="book_name">{book.title}</span> <br />{" "}
                    <span id="book_category">{book.year} <br /> {book.Branch} </span> <br />
                    <span id="book_writer">{book.edition}|{book.author}</span> <br />
                </p>
          </div>
          <div className={minbook?'book_card_btm':'book_card_btm_min'} >
                  <p>{minbook?"Available":"Only for Reading"}</p>
                  {/* <p>Only for Reading</p> */}
          </div>
            
        </div>
    </>
  )
}

export default Book

