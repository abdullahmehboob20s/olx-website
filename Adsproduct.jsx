import React, { useContext } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Datacontext } from "./Dataprovider";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

let Adsproduct = (props) => {
  let [state, setstate123] = useContext(Datacontext).loginauth;
  let [fav, setfav] = useContext(Datacontext).fav;
  let addfav = useContext(Datacontext).addfav;
  let value = useContext(Datacontext);
  let [products] = value.products;
  let addcart = value.addcart;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="sho">
      {products.map((product) => {
        return (
          <div key={product.id} className="adscard">
            <div className="productimagediv">
              <Link to={`/showproduct/${product.id}`}>
                <img src={product.image} alt="" />
              </Link>
            </div>
            <div className="heartdiv">
              <Tooltip title="favourite">
                <FavoriteBorderIcon
                  className="myheart"
                  onClick={
                    state.islogedin
                      ? () => addfav(product.id)
                      : () =>
                          alert("you have to login first to get this feature")
                  }
                />
              </Tooltip>
            </div>
            <div className="adscardcontent">
              <Link to={`/showproduct/${product.id}`} className="nthchild1">
                <span style={{ color: "rgb(255, 108, 108)" }}>Rs : </span>
                {product.price}{" "}
              </Link>
              <Link to={`/showproduct/${product.id}`} className="nthchild2">
                {product.name}
              </Link>
            </div>
            <div className="adsfrom">
              <h5> {product.from} </h5>
            </div>
            <div className="carticon">
              <Tooltip title="Add to cart">
                <ShoppingCartOutlinedIcon
                  onClickCapture={state.islogedin ? () => handleClick() : null}
                  onClick={
                    state.islogedin
                      ? () => addcart(product.id)
                      : () =>
                          alert("you need to login first to get this feature")
                  }
                />
              </Tooltip>
            </div>
          </div>
        );
      })}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="product has been added to cart"
      />
    </div>
  );
};
export default Adsproduct;
