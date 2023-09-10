import React from "react";
import { Button, Radio, Space, Divider  } from 'antd';
import "../styles/home.css"
import lostAndFoundImage from "../images/lostandfound.jpg";
import campus from "../images/campus.jpg"

function Home(){

    return <div className="homepage" style={{paddingTop:"10vh" }}>

        <div className="herosection">
            <p className="heading-envlope"><h1  className="heading">CAMPUS<br/>CONNECT</h1></p>
            <p  className="herosection-envlope">
                <h1 className="herosection-envlope-h1">Discover Lost Treasures</h1>
                <p className="herosection-detail">
                    "Are you tired of looking for stuff on campus? Do you want a simple place to buy and sell study things or other important items? Well, CampusConnect
                    is here to help make your time at university easier and more connected!"
                </p>
                <br />
                Ready to Get Started ?
                <Button type="primary" className="getStarted-btn" >
                <a href='/Login'>Get Started</a>
                </Button>
            </p>
        </div>

        <div className="homepage-space" />

        <div className="coverPhoto">
            <img src={campus} alt="space cover photo" />
        </div>

        <div className="homepage-space" />

        <h1 style={{fontSize:"2rem"}}><strong><hr style={{width:"80vw", marginRight:"10vw" ,marginLeft:"10vw" ,marginBottom:"2vh"}}/>Why Choose Campus Connect?</strong></h1>
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

      <div className="homepage-space" />

      <section className="working">
        <div className="works">
            <ul>
                <li>
                <h2>Lost & Found</h2>
                <p>Report lost items with details and a photo let fellow students assist their recovery</p>
                </li>
                <li>
                <h2>Marketplace</h2>
                <p>Explore listings or create your own for buying and selling  connect directly with other students.</p>
                </li>
                <li>
                <h2> Safety Measures</h2>
                <p>Rest easy knowing that CampusConnect prioritises safety with user verification</p>
                </li>
                
                <li>
                <h2> Data Safety</h2>
                <p>Compulosry login for accesing the website </p>
                </li>
            </ul>   
        </div>  
        <div  >
          <img src={lostAndFoundImage} className="lastimg" alt="" />
        </div>

      </section>
        


    </div>
}

export default Home;