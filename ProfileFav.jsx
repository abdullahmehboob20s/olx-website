import React, { useContext } from "react";
import { Datacontext } from "./Dataprovider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

let ProfileFav = (props) => {
  let [fav, setfav] = useContext(Datacontext).fav;

  let deletefav = (id) => {
    if (window.confirm("do you really want to delete this item")) {
      fav.forEach((item, idx) => {
        if (item.id === id) {
          fav.splice(idx, 1);
        }
      });
      setfav([...fav]);
    }
  };
  return (
    <div className="favmain">
      {fav.map((p) => {
        return (
          <div className="fav1">
            <img src={p.image} alt="" />;
            <div className="fav1div">
              <h3>
                $$ :{" "}
                <span style={{ color: "rgb(255, 160, 160)" }}>{p.price}</span>{" "}
              </h3>
              <h5> PRODUCT : {p.name} </h5>
              <h5> seller name : {p.sellername} </h5>
              <h5> ad from : {p.from} </h5>

              <Link to={`/showproduct/${p.id}`}>Details</Link>
              <div className="favicon">
                <DeleteIcon onClick={() => deletefav(p.id)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProfileFav;
