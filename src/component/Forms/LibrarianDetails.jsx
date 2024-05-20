import React, { useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const LibrarianDetails = ({click}) => { 

    const [EmpID, setEmpID] = useState('');
    const [ShowLibDetl,setShowLibDetl] = useState(
        {
            EmpID:'',
            Name:'',
            Email:'',
            Mob:'',
            Password:'',
            IsBlocked: false,
            BlockReason: ""
        }
    );


    useEffect(() => {
        console.log(ShowLibDetl);
    }, [ShowLibDetl]);
                                                                                
    const handleChange = (e) => {
        setEmpID(e.target.value);        
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        const api_url=`http://localhost:5000/librarian/${EmpID}`;


        // fetch add_student api
        const response = await fetch(api_url, {
            method: "GET",
            mode: "cors"
        });        

        const data= await response.json();
        setShowLibDetl({...data});
        setEmpID('');
    };

    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>
                <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>             
                <h3>Librarian Details</h3>               

                <fieldset className='searchbar'>
                    <input placeholder=" Enter Student ID" type="text" name="EmpID" value={EmpID} onChange={handleChange} required />
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
                    <hr />
                    {
                        ShowLibDetl.Name?
                        <fieldset className='searchdata'>
                            <p>Name:{ShowLibDetl.Name}</p>
                            <p>Email:{ShowLibDetl.Email}</p>
                            <p>Mob No:{ShowLibDetl.Mob}</p>
                            <p>Status:{ShowLibDetl.IsBlocked?"Block":"Active"}</p>
                        </fieldset>:""
                    }
            </form>
        </div>
    );
};

export default LibrarianDetails;


