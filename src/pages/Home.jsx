// src/Home.js
import "../styles/home.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React,{ useEffect, useState } from "react";

function Home() {

  const [text, setText] = useState("");
  const newText = `Welcome to Campus Connect 
    A easy way of connecting students`;

  useEffect(() => {
    let index = 0;
    const speed = 50; // Adjust the speed of auto-writing

    const writeText = () => {
      if (index < newText.length) {
        setText((prevText) => prevText + newText.charAt(index));
        index++;
        setTimeout(writeText, speed);
      }
    };

    writeText();
  }, []);
  
  return (
    <>
    <div className="home-main">
        <Navbar />      
      <h1><strong>Why Choose Campus Connect?</strong></h1>
      <section className="features">
        <div className="feature">
          <h2>Efficiency</h2>
          <p>Quickly report lost items or find listings with our user-friendly platform.</p>
        </div>
        <div className="feature">
          <h2>Trust</h2>
          <p>Connect with fellow students, enhancing the sense of community and trust on campus.</p>
        </div>
        <div className="feature">
          <h2>Affordability</h2>
          <p>Discover budget-friendly deals on study materials, electronics, and more.</p>
        </div>
      </section>
      <section className="working">
        <div className="works">
            
                <h2>Lost & Found</h2>
                <p>Report lost items with details and a photo; let fellow students assist their recovery</p>
              
          
                <h2>Marketplace</h2>
                <p>Explore listings or create your own for buying and selling; connect directly with other students.</p>
            
       
                <h2> Safety Measures</h2>
                <p>Rest easy knowing that CampusConnect prioritises safety with user verification</p>
     
                <h2>Notifications</h2>
                <p>Get real-time updates on lost item matches, messages from buyers or sellers, and community activities.</p>
        </div>  
        
      </section>
      <div id="wrapper">{text}</div> 
      {/* <section className="image-stack">
        <div className="image-container">
          <img src="" alt="Image 1" class="stacked-image" />
          <p class="image-caption">Image 1 Caption</p>
        </div>
        <div className="image-container">
          <img src="" alt="Image 2" class="stacked-image" />
          <p class="image-caption">Image 2 Caption</p>
        </div>
        <div className="image-container">
          <img src="" alt="Image 3" class="stacked-image" />
          <p class="image-caption">Image 3 Caption</p>
        </div>
        <div className="image-container">
          <img src="" alt="Image 4" class="stacked-image" />
          <p class="image-caption">Image 4 Caption</p>
        </div>
      </section> */}
    </div>
       <Footer />
       </>
  );
}

export default Home;
