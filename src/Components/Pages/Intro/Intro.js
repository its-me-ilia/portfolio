import React from "react";
import Contact from "./Contact/Contact";
import "./Intro.css";
import arrow from '../../../statics/parts/arrow.svg';
import {Link} from 'react-scroll';
import translate from "../../Functions/translate";
import { useSelector } from "react-redux";

const Intro = () => {
  const lang = useSelector(state => state.lang.lang);
  return (
    <div name="intro" className="main-container">
      <div className="intro-container">
        <div className="intro-wrapper">
          <div className="intro popfrom-bottom">
            <h1>
              {translate("გამარჯობა! მე ვარ | Hi! I'm | Привет! Я",lang)} <span className='devname'>{translate("ილია | Ilia | Илья",lang)}</span>.
            </h1>
            <h1>{translate("და მე ვარ Full Stack (MERN) დეველოპერი | And I'm Full Stack (MERN) Developer | и я Full Stack (MERN) программист",lang)}</h1>
          </div>
          <div className="work-redir">
              <Link smooth={true} spy={true} to="portfolio">
                <button className="redir-btn">
                  {translate("ჩემი ნამუშევრები | My Projects | Мои проекты",lang)} <span className="redir-arrow"><img src={arrow} alt="arrow" /></span>
                </button>
              </Link>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Intro;
