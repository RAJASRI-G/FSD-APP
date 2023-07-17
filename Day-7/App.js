import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Work from "./pages/Work";
import SignUp from "./login/SignUp";
import SignIn from "./login/SignIn";
import Navv from "./components/Navbar";
import Chart from "./pages/Chart"
export default function App() {
  return (
    <Router>

                <Routes>
                <Route path="/" element={<SignUp/>}></Route>
                <Route path="abc" element={<Home/>}></Route>
                <Route path="work" element={<Work/>}></Route>
                <Route path="task" element={<Task/>}></Route>
               <Route path="/admin" element={<SignIn/>}></Route>
               <Route path="/nav" element={<Navv/>}></Route>
               <Route path="/chart" element={<Chart/>}></Route>
               </Routes>
               </Router>
  );
}
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import StudentLogin from "./studentLogin";
// import AdminLogin from "./adminLogin";
// import Dashboard from "./dashboard";
// import StudentComponent from "./StudentComponent";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Contact from './Contact';
// import Profile from './profile';
// import Fees from './Fees/Fees';
// import View from './view';
// const RouteComponent = ()=>{
//     return(
//         <Router>
//             <Routes>
//             <Route path="/" element={<StudentLogin/>}></Route>
//             <Route path="/admin" element={<AdminLogin/>}></Route>
//             <Route path="/dashboard" element={<Dashboard/>}></Route>
//             <Route path="/registration" element={<StudentComponent/>}></Route>
//             <Route path="/contact" element={<Contact/>}></Route>
//             <Route path="/profile" element={<Profile/>}></Route>
//             <Route path="/fees" element={<Fees/>}></Route>
//             <Route path="/view" element={<View/>}></Route>
           
//             </Routes>
//         </Router>
//     )
// }
// export default RouteComponent
// <div className="formField">
// <button className="formFieldButton"

// onClick = {()=>{navigate('/dashboard')}}
// >SUBMIT</button>{" "}
// </div>