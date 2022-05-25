import React from "react";
import Login from "./component/Login/Login.js"
import Home from "./component/Home/Home.js"

import { Route, Routes } from 'react-router-dom';

function Routers(){
    return (
       
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/home" element={<Home/>}/>
        </Routes>
        
    );
}

export default Routers;