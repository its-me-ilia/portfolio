import {useEffect, useState, useRef} from 'react';
const useFade = (initialClassName, animation) => {
    const element = useRef(null);
    const [returnVal,setReturnVal] = useState({
        className: `${initialClassName} popable`,
        loaded: false
    }); //for only 1 rerender when element is reached
    const elemDistance = useRef(null);

    const scrollCb = () => {
        let rect = element.current.getBoundingClientRect();
        if (rect.top >= 0
            && rect.left >= 0
            && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            && !returnVal.loaded){
            setReturnVal({
                className: `${initialClassName} ${animation}`,
                loaded: true
            })
        };
    };
    useEffect(()=> {
        elemDistance.current = element.current.offsetTop;
        element.current && window.addEventListener('scroll', scrollCb);
        if(returnVal.loaded){
            window.removeEventListener('scroll', scrollCb)
        }
        return () => {
            window.removeEventListener('scroll', scrollCb);
        }
    },[element,returnVal])
    return {returnVal,element};

};

export default useFade;
