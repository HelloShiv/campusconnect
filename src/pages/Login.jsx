import React ,{ useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { message , Alert } from "antd";



function Login(){
  const firebase = useFirebase();
  const navigate = useNavigate();
  
  useEffect(() => {
  if(firebase.isLoggedIn){
    navigate('/')
  }
  });

  // for login

  const [loginEmail ,setLoginEmail] = useState("");
  const [loginPassword , setLoginPassword] = useState("");
  
  const handleLogin = async (e) => {
    try {
      const res = await firebase.signInUserWithEmailAndPass(loginEmail, loginPassword);
      
      // Display a success message
      message.success("Login successful!");
  
      // Redirect the user or perform any other necessary actions
      navigate('/');
    } catch (error) {   
      // Display an error message
      message.error("Login failed. Please check your email and password.");
    }
  };
  
  
    return ( 
    <div className="login-container">
  <div className="login-form">
    <div className="login-form-inner">
      <div className="logo"><svg height="512" viewBox="0 0 192 192" width="512" xmlns="http://www.w3.org/2000/svg">
          <path d="m155.109 74.028a4 4 0 0 0 -3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 0 0 -7.373-2.614l-63.724 111.642a4 4 0 0 0 3.407 6.095h51.617l-6.962 67.224a4.024 4.024 0 0 0 7.411 2.461l62.671-111.63a4 4 0 0 0 .048-4.027z" />
        </svg></div>
      <h1>Login</h1>

      <div className="login-form-group">
        <label name="login-email">Email <span className="required-star">*</span></label>
        <input type="text" required
        onChange={e => setLoginEmail(e.target.value)} value={loginEmail}
        placeholder="email@website.com" id="email " />
      </div>
      
      <div className="login-form-group">
        <label name="login-pwd">Password <span className="required-star">*</span></label>
        
        <input autoComplete="off" required
        onChange={e => setLoginPassword(e.target.value)} value={loginPassword}
        type="password" placeholder="Enter your Password" id="login-pwd" />
      </div>

      <a href="#" className="rounded-button login-cta" onClick={handleLogin}>
        Login</a>




      <div className="register-div">Not registered yet? <a href="/SignUp" className="link create-account" >Create an account ?</a></div>
    </div>

  </div>
  <div className="onboarding">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide color-1">
          <div className="slide-image">
            <img src="https://picsum.photos/600/600" loading="lazy" alt="" />
          </div>
          <div className="slide-content">
            <h2>Turn your ideas into reality.</h2>
            <p>Consistent quality and eperience across all platform and devices</p>
          </div>
        </div>

      </div>
      <div className="swiper-pagination"></div>
    </div>
  </div>
  </div>

    );
}

export default Login;