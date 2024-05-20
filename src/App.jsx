
import UserMenu from "./component/UserMenu";
import {BrowserRouter} from "react-router-dom";

import './App.css'

function App() {
  
  return (
    <div>
        <BrowserRouter>
            <UserMenu/>
        </BrowserRouter>                
    </div>
  )
}

export default App;
