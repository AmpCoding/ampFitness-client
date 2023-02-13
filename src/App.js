import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Routerregion from "./Components/Routerregion";
import {Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing";
import Programs from "./Pages/Programs";
import Login from "./Pages/Login";
import Portal from "./Pages/Portal";
import Payments from "./Pages/Payments";
import { useState } from "react";

const App = () => {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    function SwitchUser(theUser){
      console.log("About to set user to ", theUser)
      // setUser({
      //   id: theUser.id,
      //   username: theUser.userName
      // })
    }
    function ChangedLogIn(){
      setLoggedIn(!loggedIn)
    }
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/programs" element={<Programs/>}/>
            <Route path="/checkout" element={<Payments />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Portal user={user} setUser={SwitchUser} loggedIn={loggedIn} setLoggedIn={ChangedLogIn}/>}/>
        </Routes>
    </Router>
  )
}

export default App
