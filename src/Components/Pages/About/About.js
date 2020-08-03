import React, { useEffect, useRef } from 'react';
import Info from './Parts/Info/Info';
import Header from '../../Reusable/Header/Header';
import AboutPart from './Parts/AboutPart/AboutPart';
import Techs from './Parts/Techs/Techs';
import GreyBorder from "../../Reusable/GreyBorder/GreyBorder";
import './About.css';
import {useSelector} from 'react-redux';
import translate from '../../Functions/translate';

const About = () => {
    const lang = useSelector((state) => state.lang.lang);
    return (
        <div name="about" className="about-container pfolio-sector">
            <Header name={translate("ჩემს შესახებ | About Me | Обо мне",lang)} />
            <Info />
            <GreyBorder />
            <AboutPart />
            <Techs />
        </div>
    )
};

export default About;