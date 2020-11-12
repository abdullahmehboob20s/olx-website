import React, { useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import img from "../images/user.png";
import { Datacontext } from "./Dataprovider";
import ProfileFav from "./ProfileFav";
import Profilefooter from "./Profilefooter";
import Copyright from "./Copyright";

let Profile = (props) => {
  let [state, setstate123] = useContext(Datacontext).loginauth;
  return (
    <div>
      <ProfileHeader />
      <div className="profileusingflex">
        <div className="profileleftnav">
          <div className="profileimgbox">
            {state.isphotourl ? (
              <img src={state.isphotourl} alt="" />
            ) : (
              <img src={img} alt="" />
            )}
            <h3> {state.name} </h3>
          </div>
        </div>
        <div className="profilerightnav">
          <h1>
            y<span style={{ color: "#cabbe9" }}>our</span> fav
            <span style={{ color: "pink" }}>ourites</span>
          </h1>
          <div>
            <ProfileFav />
          </div>
        </div>
      </div>
      <Profilefooter />
      <Copyright />
    </div>
  );
};
export default Profile;
