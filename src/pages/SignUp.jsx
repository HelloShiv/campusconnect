import React , { useEffect, useState }from "react";
import { useFirebase } from "../context/Firebase";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function SignUp() {
  const firebase = useFirebase();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if name, email, and password are provided
    if (!username ) {
      message.error("Please provide your name.");
      return;
    } else if (!email){
      message.error("Please provide email.");
      return;
    } else if (!password){
      message.error("Please provide password.");
      return;
    } else if (password.length < 8) {
      message.warning("Password is too short. It should be at least 8 characters.");
      return;
    }

    // Check if the email ends with ".edu.in"
    if (!email.endsWith(".edu.in")) {
      message.warning("Email should end with .edu.in");
      return;
    }

    try {
      const userCredential = await firebase.SignupUserWithEmailAndPass(
        email,
        password
      );

      // User signed up successfully
      const user = userCredential.user;

      // Now, you can add the username
      await user.updateProfile({
        displayName: username,
      });

      message.success(
        "Sign up successful! Please check your email to verify your account."
      );

    } catch (error) {
      // Handle errors
      console.error("Error signing up:", error);
      message.error("Error signing up. Please try again.");
    }
  };

    

    return ( 
    <div className="login-container">
  <div className="login-form">
    <div className="login-form-inner">
      <div className="logo"><svg height="512" viewBox="0 0 192 192" width="512" xmlns="http://www.w3.org/2000/svg">
          <path d="m155.109 74.028a4 4 0 0 0 -3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 0 0 -7.373-2.614l-63.724 111.642a4 4 0 0 0 3.407 6.095h51.617l-6.962 67.224a4.024 4.024 0 0 0 7.411 2.461l62.671-111.63a4 4 0 0 0 .048-4.027z" />
        </svg></div>
      <h1>SignUp</h1>

      <div className="login-form-group">
        <label name="username">UserName <span className="required-star">*</span></label>
        <input type="text" required 
        placeholder="Username" id="username"  
        onChange={e => setUserName(e.target.value)} value={username} />
      </div>

      <div className="login-form-group">
        <label name="email">Email <span className="required-star">*</span></label>
        <input type="text" required
        onChange={e => setEmail(e.target.value)} value={email}
        placeholder="email@website.com" id="email" />
      </div>
      
      <div className="login-form-group">
        <label name="pwd">Password <span className="required-star">*</span></label>
        
        <input autoComplete="off" required
        onChange={e => setPassword(e.target.value)} value={password}
        type="password" placeholder="Minimum 8 characters" id="pwd" />
      </div>
      

      <a href="#" className="rounded-button login-cta" onClick={handleSubmit}>SignUp</a>

      <div className="register-div"> Are you Registered <a href="/Login" className="link create-account" >Login</a></div>
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

export default SignUp;