import React, {useState} from 'react';
import Form from './Parts/Form/Form';
import './Contact.css';
import Header from '../../Reusable/Header/Header';
import contactImg from '../../../statics/contactform/contact.jpg';
import useFade from '../../Hooks/useFade';
import swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import translate from '../../Functions/translate';

const Contact = () => {
    const lang = useSelector(state => state.lang.lang);
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        message: ''
    });
    const setInput = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    };
    const errorOccured = async () =>{
        await swal.fire(translate(" უპს! | Oops! | Ой!",lang), translate("დაფიქსირდა შეცდომა | Error Occured | Произошла ошибка", lang), 'error');
    };
    const sendMail = async (e) => {
            e.preventDefault()
            fetch('/api/v1/contact/send-mail', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formFields)
            }).then(res => {
                if(res.ok){
                    swal.fire(
                        translate("მესიჯი წარმატებით გამოიგზავნა | E-Mail was sent successfully | E-mail был успешно отправлен",lang),
                        translate("მალევე წავიკითხავ და დაგიბრუნებთ პასუხს | I will read it soon and get back to you with the response | Я скоро прочитаю и вернусь к вам с ответом",lang),
                        'success'
                    );
                }else{
                    errorOccured()
                }
            })
            .catch(err=> {
                errorOccured();
            });
    }; 
    const {returnVal: {className}, element} = useFade('contact-img-container', 'popfrom-right', 100);
    return (
        <div name="contact" className="contact pfolio-sector">
            <Header name={translate("კონტაქტი | Contact | Контакт", lang)} />
            <div className="contact-container">
                <Form sendMail={sendMail} setInput={setInput} />
                <div className={className} ref={element}>
                    <img src={contactImg} alt="Contact Image"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;