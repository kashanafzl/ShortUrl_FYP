import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import "./Login.css";

import { useNavigate } from "react-router-dom";

import loginbg from "../../Assets/Img/loginbg.png";
import googleimg from "../../Assets/Img/google.svg";
import facebookimgb from "../../Assets/Img/facebookb.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate();
  
    const handlesignup = () => {
      // Add authentication logic here if needed
      navigate("/signup"); // Navigate to Dashboard or any route
    };
  

  return (
    <div className="loginmaindiv">
      {/* Left Image */}
      <div className="loginbgdiv">
        <img src={loginbg} alt="Login Background" />
      </div>

      {/* Right Login Content */}
      <div className="logincontentdiv">
        <h1>Login to your Account</h1>
        <p>Welcome back, select method to login</p>

        {/* Social Login Buttons */}
        <div className="flexbtndiv">
          <div className="googlebtnandspandiv">
            <img src={googleimg} alt="Google" />
            <span>Google</span>
          </div>
          <div className="googlebtnandspandiv">
            <img src={facebookimgb} alt="Facebook" />
            <span>Facebook</span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="line">____________________or____________________</div>

        {/* Email Input */}
        <div className="input-container">
          <input type="email" placeholder="Email" />
        </div>

        {/* Password Input with Toggle */}
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>


      <div className="checkboxandforgot">

    <div>
    <input type="checkbox" name="" id="" /> <span>Remember Me</span>
 
    </div>

   <div>
   <p>Forgot Password?</p>
   </div>
      </div>

      <button>Login</button>

      <div className="accoutlinediv">
      <p>Don’t have an account?</p><span onClick={handlesignup} >Create account</span>
      </div>

    
      </div>
    </div>
  );
}
