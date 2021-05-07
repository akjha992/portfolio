import React from 'react';
import mail_icon from './images/mail.png';
import github_icon from './images/github.svg';
import linkedin_icon from './images/linkedin.png';
class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className='row mt-md-5'/>
                <div className='row mt-5'>
                    <h1 className='d-none d-md-block text-center'>Contact Me</h1>
                    <h2 className='d-md-none d-block text-center'>Contact Me</h2>
                </div>
                <div className='row mt-md-5'/>
                <div className='row mt-5 align-items-center justify-content-center'>
                    <div className='col-md-2 text-center mt-5'>
                        <a target="popup" href='mailto:akjha992@gmail.com'>
                            <img style={{width:'100px', height:'100px'}} className='' src={mail_icon} />
                        </a>
                    </div>
                    <div className='col-md-2 text-center mt-5'>
                        <a target="popup" href='https://www.linkedin.com/in/ashish-jha-642479137/'>
                            <img  style={{width:'100px', height:'100px'}} className='' src={linkedin_icon} />
                        </a>
                    </div>
                    <div className='col-md-2 text-center mt-5'>
                        <a target="popup" href='https://github.com/akjha992'>
                            <img style={{width:'100px', height:'100px', color: 'orange'}} className='' src={github_icon} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default ExperiencePage;