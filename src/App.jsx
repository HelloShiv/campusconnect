import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LostAndFound from "./pages/LostAndFound"
import Marketplace from "./pages/Marketplace";
import Query from "./pages/Query";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App(){

    return (
        <div>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/LostAndFound' element={<LostAndFound />}/>
        <Route path='/Marketplace' element={<Marketplace />}/>
        <Route path='/Query' element={<Query />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
        </div>
    );
}

export default App;