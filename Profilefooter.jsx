import React from "react";

let Profilefooter = (props) => {
  let object = [
    {
      heading: "about us",
      f: "name : abdullah mehboob",
      s: "certificate : cisco linix certificate",
      t: "designation : matriculation",
      fo: "age : 17",
      fi: "contact no # 03121242728",
      si: "location : shadman town , karachi , pakistan",
    },
    {
      heading: "my website",
      f: "web name : olx clone",
      s: "built on  : react js",
      t: "languages used : html , css , javascript",
      fo: "laptop : toshiba",
      fi: "windows : 7",
      si: "prosessor : coure 2Do",
    },
    {
      heading: "team",
      f: "team name : one man army",
      s: "leading by : abdullah mehboob",
      t: "members : one",
      fo: "leader age : 17",
      fi: "workPlace : home",
      si: "location : shadman town , karachi , pakistan",
    },
    {
      heading: "talent",
      f: "interest : coding and making logics",
      s: "certificate : cisco linix certificate",
      t: "helped by : none",
      fo: "account fiver : yes",
      fi: "earning : none",
      si: "gigs : two",
    },
  ];
  return (
    <div className="profilefooter">
      {object.map((v, i) => {
        return (
          <div className="pfooterp1">
            <h2>{v.heading}</h2>
            <h5>{v.f}</h5>
            <h5>{v.s}</h5>
            <h5>{v.t}</h5>
            <h5>{v.fo}</h5>
            <h5>{v.fi}</h5>
            <h5>{v.si}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default Profilefooter;
