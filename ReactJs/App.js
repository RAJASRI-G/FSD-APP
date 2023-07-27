import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Work from "./pages/Work";
import Navv from "./components/Navbar";
import Redux from './redux1/FeedbackForm'
import Chat from "./pages/Chat";
import Chart from "./pages/Chart";
import Text from "./title.js";
import './crud.css';
import Navbar1 from './component/Navbar1';
import Home1 from './component/Home2';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Sign from './Sign';
import Feed from './Feed';
import Contact from './Contact';
import Loginfrist from './login/Loginfrist';
import Loginsadmin from './Loginsadmin';
import Loginsleader from './Loginsleader';
import Loginsmember from './Loginsmember';
function App() {
  
  return (
    <div>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Loginfrist/>}></Route>
    <Route path="/Home" element={<Loginfrist/>}></Route>
    <Route path="/loginadmin" element={<Loginsadmin/>}></Route>
    <Route path="/loginleader" element={<Loginsleader/>}></Route>
    <Route path="/loginmember" element={<Loginsmember/>}></Route>
    <Route path="/SignUp" element={<Sign/>}></Route>
    <Route path="/signin" element={<Loginsadmin/>}></Route>
    <Route path="abc" element={<>
      <Navv/>
      <Home/>
      </>
  }></Route>
    <Route path="/a" element={<>
      <Navv/>
      <Text/>
      </>
  }></Route>
    <Route path="/chart" element={<>
      <Navv/>
      <Chart/>
      </>
  }></Route>
  
    <Route path="/work" element={
    <>
    <Navv/>
    <Work/>
    </>  
    }></Route>
    <Route path="/redux" element={
    <>
    <Navv/>
    <Redux/>
    </>  
    }></Route>
    <Route path="/contact" element={
      <>
      <Navv/>
      <Contact/>
      </>  
      }></Route>
    <Route path="/feed" element={
      <>
      <Navv/>
      <Feed/>
      </>  
      }></Route>
    <Route path="/task" element={<>
      <Navv/>
      <Task/>
      </>
  }></Route>
   <Route path="/nav" element={<>
    <Navv/>
    <Text/>
    </>
}></Route>
   <Route path="/turn" element={<Loginfrist/>}></Route>

   <Route path="/chat" element={<>
    <Navv/>
    <Chat/>
    </>
}></Route>
   <Route path="/new" element={<>
    <Navv/>
    <Navbar1/>
    <Home1/>
    </>
}></Route>
<Route path='/return' element={<>
  <Navv/>
  <Navbar1/>
  <Home1/>
  </>
}></Route>
<Route path='/addProduct' element={<>
  <Navbar1/>
<AddProduct />
</>}></Route>
<Route path='/editProduct/:id' element={<>
  <Navbar1/>
<EditProduct />
</>}></Route>
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;