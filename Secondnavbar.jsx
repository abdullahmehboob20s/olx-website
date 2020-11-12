import React, { createContext, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Select from "./Select";

let Secondnavbar = (props) => {
  let [hide123, sethide] = useState(false);

  const closhandler123 = () => sethide(false);

  return (
    <div>
      <nav className="snavbar">
        <div className="snavbardiv">
          <select className="cate">
            <option value="">select region</option>
          </select>
        </div>
        <div>
          <button onClick={() => sethide(true)} className="select">
            categories >>
            {hide123 === true ? <Select closeaa={closhandler123} /> : null}
          </button>
          {hide123 === true ? (
            <div onClick={closhandler123} className="divs"></div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};
export default Secondnavbar;
