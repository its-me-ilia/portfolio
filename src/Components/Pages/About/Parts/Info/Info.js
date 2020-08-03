import React, { useState, useEffect, useRef } from "react";
import InfoItem from "./Parts/InfoItem/InfoItem";
import part from "../../../../../statics/about/part.svg";
import pencil from "../../../../../statics/about/pencil.svg";
import rocket from "../../../../../statics/about/rocket.svg";
import "./Info.css";
import useFade from "../../../../Hooks/useFade";
import { useSelector } from "react-redux";
import translate from "../../../../Functions/translate";

const Info = () => {
  const [projects,setProjects] = useState({
    curr: 0,
    max: 10
  });
  const [lines, setLines] = useState({
    curr: 19800,
    max: 20000
  });
  const [xp,setXp] = useState({
    curr: 0,
    max: 4
  });
  const lang = useSelector(state => state.lang.lang);
  const {returnVal: {loaded,className},element} = useFade('info-container', 'popfrom-left', 100);
  const interval = (val,setter) => {
    let int;
    let {curr,max} = val;
    int = setInterval(() => {
      if(max === curr){
        return clearInterval(int)
      }
      setter({
        ...val,
        curr: curr + 1
      });
      return clearInterval(int);
    }, 600 / (val.max - val.curr));
  }
  useEffect(() => {
    loaded && interval(projects,setProjects);
  }, [projects,loaded]);
  useEffect(() => {
    loaded && interval(lines,setLines);
  }, [lines,loaded]);
  useEffect(() => {
    loaded && interval(xp,setXp);
  }, [xp,loaded]);
  return (
    <div ref={element} className={className}>
      <InfoItem
        img={rocket}
        alt="Rocket"
        val={projects.curr}
        name={translate("შესრულებული პროექტების რაოდენობა | Finished Projects | Готовые проекты", lang)}
      />
      <InfoItem
        img={pencil}
        alt="Pencil"
        val={lines.curr}
        name={translate("დაწერილი კოდის ხაზების რაოდენობა | Lines Of Code Written | Строки написанного кода",lang)}
      />
      <InfoItem
       img={part}
       alt="Part"
       val={xp.curr} 
       name={translate("გამოცდილება | Experience | Опыт", lang)} />
    </div>
  );
}

export default Info;
