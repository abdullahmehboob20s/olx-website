import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import img from "../images/shoping.png";
import Loginauth from "./Loginauth";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { Datacontext } from "./Dataprovider";
import Usimg from "../images/user.png";

let ProfileHeader = (props) => {
  let [state, setstate123] = useContext(Datacontext).loginauth;
  let [close, setclose] = useState(false);
  let value = useContext(Datacontext);
  let [cart] = value.cart;
  let [homestate, sethomestate] = useState(false);
  let history = useHistory();

  let togllemenue = () => {
    setclose(!close);
  };
  return (
    <div style={{ paddingTop: "70px" }}>
      <nav className="navbar">
        <button onClick={togllemenue} className="resbtn">
          <span></span>
        </button>
        <div className="usingflex">
          <span className="navspan">
            <img className="navbarimg" src={img} alt="" />
          </span>
          <h1 className="navheading">
            o<span style={{ color: "skyblue" }}>l</span>x cl
            <span style={{ color: "skyblue" }}>one</span>
          </h1>
        </div>
        <div className={close ? "responsive" : "responsive close"}>
          <div className="homebtndiv">
            {state.islogedin ? null : (
              <div>
                <Link to="./loginauth" className="navbtn1">
                  login
                </Link>
              </div>
            )}
            {state.islogedin ? (
              <div className="headerselling">
                <span className="headercarticon101">
                  <Link to="/cart">
                    <span> {cart.length} </span>
                    <ShoppingCartRoundedIcon className="headercarticon" />
                  </Link>
                </span>
                <button className="navbtn2" onClick={() => history.goBack()}>
                  go back
                </button>
                {state.isphotourl ? (
                  <img
                    className="belownavbtn2"
                    src={state.isphotourl}
                    width="36"
                    height="36"
                    alt=""
                  />
                ) : (
                  <img
                    className="belownavbtn2"
                    src={Usimg}
                    width="36"
                    height="36"
                    alt=""
                  />
                )}
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default ProfileHeader;
