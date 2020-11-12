import React, { useState } from "react";
import { useHistory } from "react-router-dom";

let Cartheader = (props) => {
  let [close, setclose] = useState(false);
  let his = useHistory();
  let togllemenue = () => {
    setclose(!close);
  };

  return (
    <div>
      <div className="carheader">
        <button onClick={togllemenue} className="resbtn">
          <span></span>
        </button>
        <div>
          <h1 className="carth1">
            olx c<span style={{ color: "rgb(195, 224, 235)" }}>Art</span>
          </h1>
        </div>
        <div className={close ? "responsive" : "responsive close"}>
          <div className="cartheadersec2">
            <h3>
              total : ${" "}
              <span style={{ color: "rgb(255, 108, 108)" }}>{props.total}</span>
            </h3>
            <button className="cartheaderbtn">payment</button>
            <button className="cartheaderbtn2" onClick={() => his.goBack()}>
              back to shopping
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cartheader;
