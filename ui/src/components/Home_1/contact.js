import './styles/contact.css';
import mail_icon from './images/mail.svg';
import github_icon from './images/github.svg';
import linkedin_icon from './images/linkedin.svg';
function Contact(props) {
  const getClassName = (name, minCap, maxCap, extra) => {
    let val = props.page;
    if (minCap && val < minCap)
      val = minCap;
    if (maxCap && val > maxCap)
      val = maxCap;
    console.log(val);
    return `${name}-${val} ${extra}`;
  }
  return (
    <div className="contact">
      <div className={getClassName("ctitle", 1, 2)}>
        Contact Me
      </div>
      <div className='con-sub-title'>
        <a target="popup" href='mailto:akjha992@gmail.com'>
          <img className={getClassName("contact-tile", 1, 2, 'mail')} src={mail_icon} />
        </a>
        <a target="popup" href='https://www.linkedin.com/in/ashish-jha-642479137/'>
          <img className={getClassName("contact-tile", 1, 2, 'linkedin')} src={linkedin_icon} />
        </a>
        <a target="popup" href='https://github.com/akjha992'>
          <img className={getClassName("contact-tile", 1, 2, 'github')} src={github_icon} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
