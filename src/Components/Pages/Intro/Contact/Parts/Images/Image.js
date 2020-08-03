import React from "react";
import "./Image.css";
import { Link } from "react-router-dom";
const Image = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className={`social-btn ${props.name}`}>
        <img src={props.img} />
      </div>
    </a>
  );
};

export default Image;
