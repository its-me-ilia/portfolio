import React from "react";
import './InfoItem.css';

const InfoItem = ({img,alt,val,name}) => {
  return (
    <div className="info-item">
      {/* xp lines of code projects */}
      <div className="info-item-img">
        <div className="info-item-img-container">
          <img src={img} alt={alt} />
        </div>
        <div className="info-item-img-txt-container">
          <p><span>{val}+</span></p>
        </div>
      </div>
      <div className="info-item-txt">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default InfoItem