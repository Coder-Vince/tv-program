import React from "react";
import program from "../assets/program.json";

console.log(program);

const Program = () => {
  return (
    <>
      {program.map((item) => (
        <div className="container">
          <p className="time">{item.time}</p>
          <img src={item.image} alt="show" />
          <div className="second-block">
            <h1 className="title">{item.title}</h1>
            <p className="type">{item.type}</p>
            <div className="container2">
              <span className="duration">{item.duration}</span>
              {item.direct && <li className="direct">direct</li>}
              {item.isUnseen && <li className="inédit">inédit</li>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Program;
