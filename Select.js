import React, { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

let Select = (props) => {
  let vehicals123 = [
    { value: "corolla" },
    { value: "mehran" },
    { value: "honda civic" },
    { value: "suzuki swift" },
    { value: "every" },
    { value: "city" },
  ];
  let groceries123 = [
    { value: "banana" },
    { value: "apples" },
    { value: "grapes" },
    { value: "tapal tea" },
    { value: "macroni" },
    { value: "bread" },
  ];
  let animals123 = [
    { value: "dogs" },
    { value: "cats" },
    { value: "american dog" },
    { value: "russian cat" },
    { value: "american cat" },
    { value: "kittens" },
  ];
  let fashion123 = [
    { value: "lipsticks" },
    { value: "desighners clothes" },
    { value: "sana safinaz clothes" },
    { value: "branden accesorries" },
    { value: "hair dryers" },
    { value: "makeup accesorries" },
  ];
  let mobailes123 = [
    { value: "branded mobailes" },
    { value: "accecorries" },
    { value: "tablets" },
  ];
  let furniture123 = [
    { value: "beds" },
    { value: "sofas" },
    { value: "pillows" },
    { value: "dinning tables" },
    { value: "dressing tables" },
    { value: "caboard" },
    { value: "desks" },
    { value: "iron tables" },
  ];
  let kids123 = [
    { value: "kids toys" },
    { value: "carpanter toys" },
    { value: "pants and shirt " },
    { value: "baby caps" },
    { value: "baba and baby fiders" },
    { value: "kids trolly" },
  ];
  let bikes123 = [
    { value: "scooter" },
    { value: "honda 70" },
    { value: "honda 125" },
    { value: "super power 70"},
    { value: "bicycles" },
    { value: "scooties" },
  ];


  return (
    <div className="disp">
      <ul className="ul">
        <div>
          <h4>vehicals</h4>
          {vehicals123.map((v, i) => {
            return (
              <li>
                <Link to="/asjdadsjh" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <h4>groceries</h4>
          {groceries123.map((v, i) => {
            return (
              <li>
                <Link to="/jash" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <h4>animals</h4>
          {animals123.map((v, i) => {
            return (
              <li>
                <Link to="/jash" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <h4>fashion and beauty</h4>
          {fashion123.map((v, i) => {
            return (
              <li>
                <Link to="/ahsg" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <h4>mobailes</h4>
          {mobailes123.map((v, i) => {
            return (
              <li>
                <Link to="/ahsg" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <h4>furniture </h4>
          {furniture123.map((v, i) => {
            return (
              <li>
                <Link to="/ahsg" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <h4>kids accesorries</h4>
          {kids123.map((v, i) => {
            return (
              <li>
                <Link to="/ahsg" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <h4>bikes</h4>
          {bikes123.map((v, i) => {
            return (
              <li>
                <Link to="/ahsg" key={i}>
                  {v.value}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
      <button className="hide" onClickCapture={() => props.closeaa()}>
        close it
      </button>
    </div>
  );
};
export default Select;
