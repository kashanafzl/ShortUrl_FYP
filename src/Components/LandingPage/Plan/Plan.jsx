import React from "react";
import "./Plan.css";

export default function Plan() {
  return (
    <div>
      <div id="plain" className="pheading">
        <h1>Plans and Pricing</h1>
      </div>

      <div className="mainplain">
        <div className="plaindiv">
          <h2>Free</h2>
          <h3>$0</h3>
          <h4>Per user/month</h4>
          <h5>we provide</h5>

          <ul typeof="tick">
            <li>1 to 20 links free</li>
            <li> Standard link expiration options</li>
            <li>Public short URLs</li>
            <li>Basic analytics (click count)</li>
          </ul>
          <button>Get Started For Free</button>
        </div>

        <div className="plaindiv">
          <h2>Pro Plan</h2>
          <h3>$5</h3>
          <h4>Per user/month</h4>
          <h5>Great for small business</h5>

          <ul typeof="tick">
            <li> All Free Plan features</li>
            <li> Password-protected links</li>
            <li> No ads</li>
            <li>Increased API request limits</li>
          </ul>
          <button>Get Started For Pro</button>
        </div>
        <div className="plaindiv">
          <h2>Business Plan</h2>
          <h3>$15</h3>
          <h4>Per user/month</h4>
          <h5>For multiple teams</h5>

          <ul typeof="tick">
            <li>All Pro Plan features</li>
            <li> Team access & link management</li>
            <li> Bulk URL shortening</li>
            <li>Deep link support</li>
          </ul>
          <button>Get Started with business</button>
        </div>
      </div>
    </div>
  );
}
