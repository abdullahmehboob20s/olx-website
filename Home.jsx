import React, { useContext } from "react";
import Homeheader from "./Homeheader";
import Secondnavbar from "./Secondnavbar";
import im from "../images/sellundraw.png";
import Ads from "./Ads";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./Profilefooter";
import Copyright from "./Copyright";

let Home = (props) => {
  return (
    <div>
      <Homeheader />
      {/* <Secondnavbar /> */}
      <div className="hero">
        <div>
          <h1 className="homeh1">
            o<span style={{ color: "skyblue" }}>l</span>x cl
            <span style={{ color: "skyblue" }}>One</span>{" "}
          </h1>
          <h3 className="homeh3">
            we are the best <span style={{ color: "skyblue" }}>seller</span>{" "}
            accross the country by abdullah mehboob
          </h3>
          <button className="homebtn">get started</button>
        </div>
        <div className="homeres">
          <img src={im} alt="" />
        </div>
      </div>
      <Ads />
      <Footer />
      <Copyright />
    </div>
  );
};
export default Home;
