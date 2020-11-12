import React, { useState, useContext } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Button from "@material-ui/core/Button";
import { FlashAutoRounded } from "@material-ui/icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import userimage from "../images/user.png";
import { Datacontext } from "./Dataprovider";
import Copyright from "./Copyright";

let Loginauth = (props) => {
  let [state, setstate123] = useContext(Datacontext).loginauth;
  console.log(state.islogedin);
  // let [state, setstate123] = useState({
  //   islogedin: false,
  //   isphotourl: false,
  //   name: "",
  // });
  let history = useHistory();
  let responseFacebook = (response) => {
    if (response.status !== "unknown") {
      setstate123({
        islogedin: true,
        name: response.name,
      });
    }
  };
  let responseGoogle = (response) => {
    setstate123({
      islogedin: true,
      name: response.profileObj.givenName,
      isphotourl: response.profileObj.imageUrl,
    });
  };
  let responseGoogle2 = (response) => {
    console.log(response);
    // console.log(response.profileObj);
  };
  if (state.islogedin === true) {
    return (
      <div className="loginauth">
        <div className="logindiv2">
          <h1>loged in </h1>
          <div className="divimage">
            {state.isphotourl ? (
              <img
                className="loginimage"
                width="90"
                src={state.isphotourl}
                alt=""
              />
            ) : (
              <img className="loginimage" width="90" src={userimage} alt="" />
            )}
          </div>
          <h2>hello {state.name} </h2>
          <h3>thank you for using our services</h3>
          <div className="aligncenter">
            <button onClick={() => history.goBack()} className="navbtn3">
              go back
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="loginauth">
          <div className="logindiv">
            <h1 className="loginh1">log in</h1>
            <GoogleLogin
              clientId="1062266828706-snkfof9rfop7s639n79i1kpbho9l7d0u.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  style={{ width: "100%", marginBottom: "10px" }}
                  variant="contained"
                  variant="contained"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  login with google
                </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle2}
              cookiePolicy={"single_host_origin"}
            />
            ,
            {/* facebook login starts ========================================================================================== */}
            <FacebookLogin
              appId="678561796182739"
              callback={responseFacebook}
              fields="name,email,picture"
              render={(renderProps) => (
                <Button
                  style={{
                    width: "100%",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={renderProps.onClick}
                >
                  login with facebook
                </Button>
              )}
            />
            {/* facebook login ends ========================================================================================== */}
            <div className="secondrybtn">
              <Button
                style={{
                  width: "100%",
                }}
                variant="contained"
                color="secondary"
                onClick={() => history.push("/")}
              >
                go back
              </Button>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
};
export default Loginauth;
