import React, { useState } from "react";
import "./Paste.css";
import Navbar from "../LandingPage/Navbar/Navbar";
import Footer from "../LandingPage/Footer/Footer";
import axios from "axios"; // Import axios for API request

import facebookimg from "../../Assets/Img/facebook.svg";
import instragramimg from "../../Assets/Img/instragram.svg";
import twitterimg from "../../Assets/Img/twitter.svg";
import githubimg from "../../Assets/Img/github.svg";


export default function Paste() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // Function to shorten URL
  const handleShortenUrl = async () => {
    if (!longUrl) {
      alert("Please enter a URL");
      return;
    }

    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${longUrl}`
      );

      setShortUrl(response.data); // Set the shortened URL
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten the URL. Please try again.");
    }
  };

  // Function to copy URL
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Short URL copied to clipboard!");
  };

  // Function to open URL in social media
  const openInPlatform = (platform) => {
    if (!shortUrl) {
      alert("Please generate a short URL first.");
      return;
    }

    let platformUrl = "";
    switch (platform) {
      case "facebook":
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${shortUrl}`;
        break;
      case "youtube":
        platformUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(shortUrl)}`;
        break;
      case "twitter":
        platformUrl = `https://twitter.com/intent/tweet?url=${shortUrl}`;
        break;
      case "instagram":
        platformUrl = `https://www.instagram.com/`;
        break;
      case "github":
        platformUrl = `https://github.com/`;
        break;
      default:
        return;
    }

    window.open(platformUrl, "_blank");
  };

  return (
    <div>
      <Navbar />

      <div className="bgdiv">
        <div className="contentdiv">
          <h1>Paste the URL to be shortened</h1>
          <input
            type="text"
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button onClick={handleShortenUrl}>Short URL</button>

          {shortUrl && (
            <p className="short-url">
              Shortened URL:{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>{" "}
              <button onClick={handleCopyUrl}>Copy URL</button>
            </p>
          )}

          <p>
            URL Shortening is a tool to shorten URLs and generate short links.
            <br />
            It allows you to create a shortened link, making it easy to share.
          </p>
        </div>

        {/* Social Media Icons */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="iconsmaindiv">
            <img
              src={facebookimg}
              alt="Facebook"
              onClick={() => openInPlatform("facebook")}
            />
            <img
              src={instragramimg}
              alt="Instagram"
              onClick={() => openInPlatform("instagram")}
            />
            <img
              src={twitterimg}
              alt="Twitter"
              onClick={() => openInPlatform("twitter")}
            />
            <img
              src={githubimg}
              alt="GitHub"
              onClick={() => openInPlatform("github")}
            />
     
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
