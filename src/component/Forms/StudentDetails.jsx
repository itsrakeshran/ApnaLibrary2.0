import React, { useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const StudentDetails = ({click}) => {
    const [StudentID, setStudentID] = useState('');
    const [ShowStdDetl,setShowStdDetl] = useState(
        {
            StudentID: '',
            Name: '',
            Email: '',
            Mob: '',
            Password: '',
            IsBlocked:'' ,
            BlockReason: '',
            MaxBooks: 2,
            CurrentBooks: 0,
            msg:''
        }
    );

    useEffect(() => {
        console.log(ShowStdDetl);
    }, [ShowStdDetl]);
    const [StudentDetails, setStudentDetails] = useState({Name:'',Email:'',Book_due:'',Fine_due:'',Status:''});
       
    
    const handleChange = (e) => {
        setStudentID(e.target.value);        
    };


    const handleSubmit = async(e) => {
        e.preventDefault();

        // fetch add_student api
        const api_url=`http://localhost:5000/student/${StudentID}`;      
        const response = await fetch(api_url, {
            method: "GET",
            mode: "cors"
        });        

        // receive data
        const data= await response.json();
        console.log(data);        
        setShowStdDetl({...data});
        console.log(StudentDetails);

        if(response.status===404)
        {
            console.error('Error: Student not found');
            const data= await response.json();
            console.log(data);
            setShowStdDetl({...data});
        }
        setStudentID('');
    };

    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>
                <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>             
                <h3>Student Details</h3>               

                <fieldset className='searchbar'>
                    <input placeholder=" Enter Student ID" type="text" name="StudentID" value={StudentID} onChange={handleChange} required />
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
                    <hr />
                        {ShowStdDetl.Name?
                        <fieldset className='searchdata'>
                            <p>Name:{ShowStdDetl.Name}</p>
                            <p>Email:{ShowStdDetl.Email}</p>
                            <p>Mob No:{ShowStdDetl.Mob}</p>
                            <p>Status:{ShowStdDetl.IsBlocked?"Block":"Active"}</p>
                            <p>No of Books:{ShowStdDetl.CurrentBooks}</p>
                        </fieldset>:"" }

                        {ShowStdDetl.msg?
                        <fieldset className='searchdata'>
                            <p style={{color:'red'}}>{ShowStdDetl.msg}</p>
                        </fieldset>:""}              

            </form>
        </div>
    );
};

export default StudentDetails;



