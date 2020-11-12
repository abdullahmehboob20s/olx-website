import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Datacontext } from "./Dataprovider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

let Showproduct = (props) => {
  let [state, setstate123] = useContext(Datacontext).loginauth;
  let addfav = useContext(Datacontext).addfav;
  let history = useHistory();
  let { id } = useParams();
  let value = useContext(Datacontext);
  let [products] = value.products;
  let addcart = value.addcart;
  let details = products.filter((pr, index) => {
    return pr.id == id;
  });
  return (
    <div>
      {details.map((va) => {
        return (
          <div className="shoproduct">
            <div className="showimage">
              <img src={va.image} alt="" />
            </div>
            <div className="shown">
              <div className="showcontent">
                <h1> price : {va.price} </h1>
                <h3> Product : {va.name} </h3>
                <button
                  className="shoeaddtocartbtn"
                  onClick={
                    state.islogedin
                      ? () => addcart(va.id)
                      : () =>
                          alert("you need to login first to get this feature")
                  }
                >
                  add to cart
                </button>
                <button
                  onClick={() => history.goBack()}
                  className="showgobackbutton"
                >
                  back to shopping
                </button>
                <div className="heartdiv2">
                  <FavoriteBorderIcon
                    onClick={
                      state.islogedin
                        ? () => addfav(va.id)
                        : () =>
                            alert("you need to login first to get this feature")
                    }
                  />
                </div>
              </div>
              <div className="showshipper">
                <h3>
                  <span style={{ color: "rgb(154, 154, 160)" }}>
                    Seller Name{" "}
                  </span>
                  {va.sellername}
                </h3>
                <h4>
                  <span style={{ color: "rgb(154, 154, 160)" }}>
                    Contact number{" "}
                  </span>
                  {va.number}
                </h4>
                <h4 style={{ marginTop: "10px" }}>
                  <span style={{ color: "rgb(154, 154, 160)" }}>location </span>
                  {va.location}
                </h4>
              </div>
              <div className="showdetails">
                <h2>product details </h2>
                <h4>{va.Description}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Showproduct;
