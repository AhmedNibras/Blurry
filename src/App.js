import React from 'react';
import { Sidebars } from './components/Sidebar/Sidebars';
import { Topbar } from './components/topbar/Topbar';
import Home  from './components/pages/Home/Home';
import UserList from './components/pages/userList/UserList';
// import Survey from './Survey';
import "./App.css";
import User from './components/pages/user/User';
// import Feedback from './components/pages/feedback/Feedback';
import Review from './components/pages/feedback/Review';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  return (
    <div>

    <Topbar />
          {/* <Survey /> */}
    <div className="container">
    
      <Sidebars/>
          {/* <Home />  */}
          {/* <UserList /> */}
          {/* <User /> */}
          {/* <Feedback /> */}
          <Review />
    </div>
    </div> 
  
  );
}

export default App;
