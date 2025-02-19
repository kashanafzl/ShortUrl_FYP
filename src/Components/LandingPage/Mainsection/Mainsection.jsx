import React from 'react'
import './Mainsection.css'

// pastetheurl

import { useNavigate } from "react-router-dom";

export default function Mainsection() {


      
         const navigate = useNavigate();
          
            const handlepastetheurl = () => {
              navigate("/pastetheurl"); 
            };
  

  return (
    <div>
        <div className="bgdiv">

          <div className="contentdiv">
          <h1>ShorT Your Long URL</h1>
            <h2>And Effective</h2>
            <p>When shortening URLs, consider these <br />
             key tips for a better user experience</p>
            <button onClick={handlepastetheurl}>Get Started</button>
          </div>

        </div>
    </div>
  )
}
