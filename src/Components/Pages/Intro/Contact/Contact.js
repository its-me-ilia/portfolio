import React from "react";
import './Contact.css';
import ContactImg from './Parts/Images/Image'
import fbLogo from "../../../../statics/contact/fblogo.svg";
import linkedinLogo from "../../../../statics/contact/linlogo.svg";
import gmailLogo from "../../../../statics/contact/gmaillogo.svg";
import githubLogo from "../../../../statics/contact/ghlogo.svg";

const Contact = () => {
  return (
    <div className="social-contact-container">
      <ContactImg link={'https://facebook.com/ilia001'} img={fbLogo} name="fb" />
      <ContactImg link={'mailto:its.me.ilia04@gmail.com'} img={gmailLogo} name="gmail" />
      <ContactImg link={'https://www.linkedin.com/in/ilia-%C2%9E-5717b71a4/'} img={linkedinLogo} name="lin" />
      <ContactImg link={'https://github.com/its-me-ilia'} img={githubLogo} name="gh" />
    </div>
  );
};

export default Contact;
