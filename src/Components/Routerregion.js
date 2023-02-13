import {Routes, Route} from "react-router-dom";
import Landing from "../Pages/Landing";
import Programs from "../Pages/Programs";
import Login from "../Pages/Login";
import Portal from "../Pages/Portal";
import Payments from "../Pages/Payments";
import { useState } from "react";
function Routerregion(){
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    return(
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/programs" element={<Programs/>}/>
            <Route path="/checkout" element={<Payments />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Portal user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        </Routes>
    )
}

export default Routerregion;