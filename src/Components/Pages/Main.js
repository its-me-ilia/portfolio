import React, {useEffect} from "react";
import Intro from './Intro/Intro';
import About from './About/About';
import Navbar from '../Reusable/Navbar/Navbar';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Contact from '../Pages/Contact/Contact';
import GreyBorder from '../Reusable/GreyBorder/GreyBorder';
import Footer from '../Reusable/Footer/Footer';
import {Events, scrollSpy} from 'react-scroll';

const Main = () => {

    useEffect(()=>{
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
          });
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    },[]);
    
    return (
        <main>
            <Navbar />
            <Intro />
            <About />
            <GreyBorder />
            <Portfolio />
            <GreyBorder />
            <Contact />
            <Footer />
        </main>
    );
};

export default Main;