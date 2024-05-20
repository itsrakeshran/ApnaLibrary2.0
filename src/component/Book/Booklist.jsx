import React,{useState} from 'react'

let flag=0;
const Booklist = () => {
    const[mode,setMode]=useState(true);
   
    function changemode(){
        
        if(flag === 0){
            setMode(false);
            flag=1; 
        }

        else{
            setMode(true);
            flag=0;
        }      
    }
  return (
    <div className='book-list'>
        <div className="id">
            {mode?<p>1020</p>:<input type="text" value={1020} /> }         
        </div>

        <div className="book-title">
            {mode?<p>Book name</p>:<input type="text" value={"BookName"} /> }
        </div>

        <div className="book-author">
            {mode?<p>abcd author</p>:<input type="text" value={"abcd author"} /> }
        </div>

        <div className="branch-year">
            {mode?<p>CompuerScience/1st year</p>:<input type="text" value={"CompuerScience/1st year"} /> }
        </div>

        <div className="book-quantity">
            {mode?<p>500</p>:<input type="text" value={500} /> }
        </div>

        <div onClick={changemode} className='update'>
            <span>{mode?"Update":"Submit"}</span>
        </div>
    </div>)
}

export default Booklist