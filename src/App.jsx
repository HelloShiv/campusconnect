import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LostAndFound from "./pages/LostAndFound";
import Marketplace from "./pages/Marketplace";
import Query from "./pages/Query";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import NotFound from "./components/NotFound";

// import NotFound from "./NotFound"; // Import the NotFound component

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/LostAndFound" element={<LostAndFound />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/Query" element={<Query />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* Add a catch-all route for 404 errors */}
        <Route path="*" element={<NotFound />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
