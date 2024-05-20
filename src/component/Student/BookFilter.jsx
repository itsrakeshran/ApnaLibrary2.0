
// const BookFilter = ({bookdata,setBookdata}) => {

//   function csfilter(){
//     const filteredData = bookdata.filter((item)=>item.Branch==="Computer Science");
//     setBookdata(filteredData);
//   }

//   function civilfilter(){
//     const filteredData = bookdata.filter((item)=>item.Branch==="Civil Engineering");
//     setBookdata(filteredData);
//   }

//   function ecefilter(){
//     const filteredData = bookdata.filter((item)=>item.Branch==="Electronics and Communication");
//     setBookdata(filteredData);
//   }

//   function eefilter(){
//     const filteredData = bookdata.filter((item)=>item.Branch==="Electrical Engineering");
//     setBookdata(filteredData);
//   }

//   function cefilter(){
//     const filteredData = bookdata.filter((item)=>item.Branch==="Chemical Engineering");
//     setBookdata(filteredData);
//   }

//   function filter1st(){
//     const filteredData = bookdata.filter((item)=>item.year==="1st Year");
//     setBookdata(filteredData);
//   }

//   function filter2nd(){
//     const filteredData = bookdata.filter((item)=>item.year==="2nd Year");
//     setBookdata(filteredData);
//   }
  
//   function filter3rd(){
//     const filteredData = bookdata.filter((item)=>item.year==="3rd Year");
//     setBookdata(filteredData);

//   }

//   function filter4th(){
//     const filteredData =  bookdata.filter((item)=>item.year==="4th Year");
//     setBookdata(filteredData);
//   }

//   return (
    
//     <div className='book_filter'>
//         <div className='book_filer_subSection'>
//             <p>Year Wise</p>
//             <hr />
//             <div>
//                 <input type="checkbox" name="cs" value="Computer Science"  onChange={csfilter}/>
//                 <label htmlFor="cs">  Computer Science</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="ce" value="Civil Engineering" onChange={civilfilter}/>
//                 <label htmlFor="ce">  Civil Engineering</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="ece" value="Electronics and Communication" onChange={ecefilter}/>
//                 <label htmlFor="ce">  Electronics and Communication</label>
//             </div>

//             <div>
//                 <input type="checkbox" name="ee" value="Electronics and Communication" onChange={eefilter}/>
//                 <label htmlFor="ee">  Electrical Engineering</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="cec" value="Chemical Engineering" onChange={cefilter}/>
//                 <label htmlFor="cec">  Chemical Engineering</label>
//             </div>    
//         </div>

//         <div className='book_filer_subSection'>
//             <p>Year Wise</p>
//             <hr /> 
//             <div>
//                 <input type="checkbox" name="cec" value="1st Year" onChange={filter1st}/>
//                 <label htmlFor="cec"> 1st Year </label>
//             </div>

//             <div>
//                 <input type="checkbox" name="cec" value="2nd Year" onChange={filter2nd}/>
//                 <label htmlFor="cec"> 2nd Year </label>
//             </div>

//             <div>
//                 <input type="checkbox" name="cec" value="3rd Year" onChange={filter3rd}/>
//                 <label htmlFor="cec"> 3rd Year </label>
//             </div>

//             <div>
//                 <input type="checkbox" name="cec" value="4th Year" onChange={filter4th}/>
//                 <label htmlFor="cec"> 4th Year </label> 
//             </div>

                    
//         </div>   

//     </div>
//   )
// }

// export default BookFilter