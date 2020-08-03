import React from 'react';
import './Form.css';
import useFade from '../../../../Hooks/useFade';
import { useSelector } from 'react-redux';
import translate from '../../../../Functions/translate';

const Form = ({setInput,sendMail}) => {
    const {returnVal: {className}, element} = useFade('form-container', 'popfrom-left', 100);
    const lang = useSelector(state => state.lang.lang);
    return (
        <div className={className} ref={element}>
            <form className="contact-form">
                <input name="name" placeholder={translate("სახელი | Name | Имя",lang)} className="contact-input" onChange={setInput} />
                <input name="email" placeholder={translate("ელ. ფოსტა | Email | Эл. почта",lang)} className="contact-input" onChange={setInput} />
                <textarea name="message" placeholder={translate("მესიჯი | Message | Сообщение",lang)} className="contact-input contact-txtarea" onChange={setInput} />
                <button onClick={sendMail} className="contact-btn"><span className="contact-btn-span">{translate("გაგზავნა | Send | Послать",lang)}</span></button> 
            </form>
        </div>   
    );
};

export default Form;