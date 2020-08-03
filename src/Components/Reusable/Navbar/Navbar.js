import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../Actions';
import translate from '../../Functions/translate';

const Navbar = () => {
    const [isNavScrolled, setNavScrolled] = useState(false);
    const [isHamClicked, setHamClicked] = useState(false);
    const [activeLinkName, setActiveLinkName] = useState('');
    const [langClicked,setLangClicked] = useState(false);
    const handleScroll = () => {
        if(window.scrollY > 0){
            setNavScrolled(true);
        }else{
            setNavScrolled(false);
        };
    };
    const lang = useSelector((state) => state.lang.lang);
    const langHelper = {
        ka: 'ქა',
        en: 'EN',
        ru: 'РУ'
    };
    const dispatch = useDispatch(data => data);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    const linkSetActive = (e) => {
        if(isHamClicked){
            setHamClicked(false);
        };
    };
    const linkIsActive = (e) => {
        if(e.target.name !== activeLinkName){
            e.target.className = `${e.target.className || ''} inactive-li`;
        };
    };
    const changeLang = (e,language) => {
        if(language !== lang){
            dispatch({
                type: actions.CHANGE_LANG,
                data: language
            })
        }
    }
    return (
        <nav className={`navbar${isNavScrolled ? ' nav-scrolled': ''}`}>
            <div className="nav-bg"></div>
            <div className={`hamburger-menu ${isHamClicked && 'ham-clicked'}`} onClick={()=> setHamClicked(!isHamClicked)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`ul-container ${isHamClicked && 'mobul-active'}`}>
                <ul>
                    <Link className={e=> linkIsActive(e)} name="a-main" onClick={linkSetActive} onSetActive={()=> setActiveLinkName('a-main')} activeClass="li-active" spy={true} smooth={true} to="intro">
                        <li>{translate("მთავარი | Main | Главный",lang)}</li>                    
                    </Link>
                    <Link className={e=> linkIsActive(e)} name="a-about" onSetActive={()=> setActiveLinkName('a-about')} onClick={linkSetActive} activeClass="li-active" spy={true} smooth={true} to="about">
                        <li>{translate("შესახებ | About | Обо мне",lang)}</li>                    
                    </Link>
                    <Link className={e=> linkIsActive(e)} name="a-portfolio" onSetActive={()=> setActiveLinkName('a-portfolio')} onClick={linkSetActive} activeClass="li-active" spy={true} smooth={true} to="portfolio">
                        <li>{translate("პორტფოლიო | Portfolio | портфолио",lang)}</li>                    
                    </Link>
                    <Link className={e=> linkIsActive(e)} name="a-contact" onSetActive={()=> setActiveLinkName('a-contact')} onClick={linkSetActive} activeClass="li-active" spy={true} smooth={true} to="contact">
                        <li>{translate("კონტაქტი | Contact | контакт",lang)}</li>                    
                    </Link>
                </ul>
            </div>
            <div className={`lang-container`}>
                <div onClick={() => setLangClicked(!langClicked)} className="lang-txt">
                    <p>{langHelper[lang]} <span className={`${langClicked ? 'lang-arrow-active': 'lang-arrow'}`}>&#x025B4;</span></p>
                </div>
                <div className={`lang-opts-container ${langClicked ? 'visible' : 'invisible'}`}>
                    <div className="lang-opts">
                        <div onClick={(e) => changeLang(e, 'ka')} className={`lang-opts-item ${lang === 'ka' && 'active-lang'}`}>ქა</div>
                        <div onClick={(e) => changeLang(e, 'en')} name="en" className={`lang-opts-item ${lang === 'en' && 'active-lang'}`}>EN</div>
                        <div onClick={(e) => changeLang(e, 'ru')} name="ru" className={`lang-opts-item ${lang === 'ru' && 'active-lang'}`}>РУ</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;