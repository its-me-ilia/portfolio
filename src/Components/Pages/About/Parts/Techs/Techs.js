import React from "react";
import TechItem from "./Parts/TechItem";
import "./Techs.css";
import Header from "../../../../Reusable/Header/Header";
import useFade from "../../../../Hooks/useFade";
import { useSelector } from "react-redux";
import translate from "../../../../Functions/translate";

const Technologies = () => {
  const lang = useSelector(state => state.lang.lang);
  const techs = [
    {
      img: require("../../../../../statics/techs/nodejs.svg"),
      name: "Node.js",
    },
    {
      img: require("../../../../../statics/techs/express.svg"),
      name: "Express.js",
    },
    {
      img: require("../../../../../statics/techs/react.svg"),
      name: "React.js",
    },
    {
      img: require("../../../../../statics/techs/redux.svg"),
      name: "Redux",
    },
    {
      img: require("../../../../../statics/techs/typescript-icon.svg"),
      name: "TypeScript",
    },
    {
      img: require("../../../../../statics/techs/mongodb.svg"),
      name: "MongoDB",
    },
    {
      img: require("../../../../../statics/techs/css-3.svg"),
      name: "CSS 3",
    },
    {
      img: require("../../../../../statics/techs/javascript.svg"),
      name: "JavaScript",
    },
  ];
  const {returnVal: {className}, element} = useFade('techs-container pfolio-sector', 'popfrom-bottom', 10);
  return (
    <div className="techs-wrapper pfolio-sector">
      <Header name={translate("ტექნოლოგიები | Technologies | Технологии", lang)} />
      <div className={className}>
        {techs.map((val, i) => {
          if(i === 0){
            return <TechItem ref={element} img={val.img} name={val.name} />;
          }else{
            return <TechItem img={val.img} name={val.name} />;
          }
        })}
      </div>
    </div>
  );
};

export default Technologies;
