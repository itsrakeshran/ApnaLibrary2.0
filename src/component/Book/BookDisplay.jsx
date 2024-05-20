import React, {useEffect,useState} from 'react';
import BookCard from './BookCard'
import axios from 'axios';


const BookDisplay = () => {
    const[bookdata,setBookdata]=useState([]);

    async function fetchBookData(){

        try {
            const getAllBook_url = "http://localhost:8000/api/book";
            const res = await axios.get(getAllBook_url);
            // Assuming 'setBookdata' is a function to update your state
            setBookdata([...res.data]);
        } catch (error) {
            console.error("Error fetching book data:", error.message);
            // Handle the error here (e.g., show an error message to the user)
        }
    }

    useEffect(()=>{
        fetchBookData();
    },[]);

    return (
        <>
            {
                bookdata.map((data)=><BookCard key={data.id} data={data}/>)
            }
        </>
    )
}

export default BookDisplay