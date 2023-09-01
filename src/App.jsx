import React from "react";
import Navbar from "./Navbar";
import LostAndFound from "./LostAndFound"
import { Routes, Route } from "react-router-dom";
import Marketplace from "./Marketplace";
import Query from "./Query";
import Home from "./Home";
import Login from "./Login";

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