import React from "react";
import './PortfolioItem.css'
const PortfolioItem = (props) => {
  return (
    <a href={props.link} className="portfolio-item">
      <h1 className="portfolio-item-name">{props.name}</h1>
      <p className="portfolio-item-desc"><span>{props.desc}</span></p>
      <div className="portfolio-img">
        <button className="portfolio-btn">დეტალურად</button>
        <img src={props.img} alt={props.name} />
      </div>
    </a>
  );
};

export default PortfolioItem;