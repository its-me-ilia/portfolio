import React from "react";
import "./Footer.css";
import email from "../../../statics/footer/email.svg";
import phone from "../../../statics/footer/phone.svg";

const Footer = () => {
  return (
    <footer>
      <div className="contact-up-part">
      <div className="contact-info footer-item">
        <div className="contact-info-item">
          <div className="contact-info-item-img">
            <img src={email} alt="Email" />
          </div>
          <p>its.me.ilia04@gmail.com</p>
        </div>
        <div className="contact-info-item">
          <div className="contact-info-item-img">
            <img src={phone} alt="Phone" />
          </div>
          <p>(+995) 598 66 11 89</p>
        </div>
      </div>
      <div className="copyright footer-item inside-footer-madeby">
        <p>Made by <span className='heart'>&#10084;</span> and <a style={{color: 'rgb(0,131,255)', textDecoration: 'none'}} href="https://github.com/its-me-ilia">Me</a></p>
      </div>
      <div className="resources footer-item">
        <p>რესურსები</p>
        <div className="resources-ul-container">
          <ul>
            <a href="https://iconfinder.com">
              <li>Iconfinder</li>
            </a>
            <a href="https://www.freepik.com">
              <li>Freepik</li>
            </a>
          </ul>
        </div>
      </div>
      </div>
      <div className="copyright footer-item outside-footer-madeby">
        <p>Made by <span className='heart'>&#10084;</span> and <a style={{color: 'rgb(0,131,255)', textDecoration: 'none'}} href="https://github.com/its-me-ilia">Me</a></p>
      </div>
    </footer>
  );
};

export default Footer;
