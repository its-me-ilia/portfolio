import React from "react";
import "./TechItem.css";
const TechItem = React.forwardRef((props,ref) => {
  return (
      <div ref={ref} className="tech-item">
        <div className="tech-img">
          <img src={props.img} alt="Tech Image" />
        </div>
        <div className="tech-name">
          <p>{props.name}</p>
        </div>
      </div>
  );
});

export default TechItem;
