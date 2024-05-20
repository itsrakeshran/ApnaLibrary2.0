import { Route,Routes } from "react-router-dom";

//components
import Admin_Menu from "./Admin/Admin_Menu";
import Student_Menu from "./Student/Student_Menu";
import Librarian_Menu from "./Librarain/Librarian_Menu";
// import MenuButton from './MenuButton';
import  Welcome from "./Welcome";
import ProtectedRoutes from './ProtectedRoutes'


const UserMenu = () => {
  return (
    <div className='userMenu'>
      {/* <MenuButton/> */}
      <Routes> 
        <Route path="/" element={<Welcome/>}></Route>       
        <Route path="/admin_menu/*" element={<ProtectedRoutes Component={Admin_Menu}/>}></Route>
        <Route path="/student_menu/*" element={<ProtectedRoutes Component={Student_Menu}/>}></Route>
        <Route path="/librarian_menu/*" element={<ProtectedRoutes Component={Librarian_Menu}/>}></Route>
      </Routes>
    </div>
  )
}

export default UserMenu;