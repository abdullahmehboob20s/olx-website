import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import { Datacontext } from "./Dataprovider";
import Tooltip from "@material-ui/core/Tooltip";
import Cartheader from "./Cartheader";
import Decicon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Footer from "./Profilefooter";
import Copyright from "./Copyright";

let Cart = (props) => {
  let value = useContext(Datacontext);
  let [cart, setcart] = value.cart;
  let [total, settotal] = useState(0);
  useEffect(() => {
    let gettotal = () => {
      let res = cart.reduce((prev, item) => {
        return prev + item.count * item.price;
      }, 0);
      settotal(res);
    };
    gettotal();
  }, [cart]);

  let redec = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setcart([...cart]);
  };
  let addit = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setcart([...cart]);
  };
  let removeproduct = (id) => {
    if (window.confirm("do you really want to delete this item ? ")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setcart([...cart]);
    }
  };

  if (cart.length === 0) {
    return (
      <div>
        <div className="cartempty ">
          <Cartheader total={total} />
          <h1 className="empty">cart is empty</h1>
        </div>
        <Footer />
        <Copyright />
      </div>
    );
  }

  return (
    <div>
      <Cartheader total={total} />
      <div className="cartmain">
        {cart.map((va) => {
          return (
            <div className="shoproduct2">
              <Tooltip title="remove item" placement="left">
                <div className="cartcross">
                  <CancelIcon onClick={() => removeproduct(va.id)} />
                </div>
              </Tooltip>
              <div className="cartquantity">
                <Decicon onClick={() => redec(va.id)} className="dec" />
                <span> {va.count} </span>
                <AddBoxIcon onClick={() => addit(va.id)} className="inc" />
              </div>
              <div className="showimage2">
                <img src={va.image} alt="" />
              </div>
              <div>
                <div className="showcontent2">
                  <h1>
                    price :{" "}
                    <span style={{ color: "rgb(255, 143, 143)" }}>
                      {va.price}
                    </span>
                  </h1>
                  <h4 className="h4">
                    {" "}
                    <span style={{ fontWeight: "bold" }}> Product : </span>{" "}
                    {va.name}{" "}
                  </h4>
                  <h4 className="h4">
                    <span style={{ fontWeight: "bold" }}>Seller Name : </span>
                    {va.sellername}
                  </h4>
                  <h4 className="h4">
                    <span style={{ fontWeight: "bold" }}>
                      Contact number :{" "}
                    </span>
                    {va.number}
                  </h4>
                  <h4 className="h4">
                    <span style={{ fontWeight: "bold" }}>location : </span>
                    {va.location}
                  </h4>
                  <h4 className="h4">
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      product details :{" "}
                    </span>{" "}
                    {va.Description}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};
export default Cart;
