import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LostAndFound from "./pages/LostAndFound"
import Marketplace from "./pages/Marketplace";
import Query from "./pages/Marketplace";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App(){
    
    return (
        <div>
        <Navbar />

        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/LostAndFound' element={<LostAndFound />}/>
        <Route path='/Marketplace' element={<Marketplace />}/>
        <Route path='/Query' element={<Query />}/>
        <Route path='/Login' element={<Login />}/>
        </Routes>
       
        </div>
    );
}

export default App;