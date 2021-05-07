import React from 'react';
import base_img from './images/base.svg';
import download_cv from './images/download_cv.png';
class Headline extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className='row mt-5'>
                    <h1 className='d-none d-md-block text-center'>{this.props.profile.headline}</h1>
                    <h5 className='d-md-none d-block text-center'>{this.props.profile.headline}</h5>
                </div>
                <div className='row'>
                    <h5 className='d-none d-md-block text-center'>{this.props.profile.subheader}</h5>
                    <p className='d-md-none d-block text-center'>{this.props.profile.subheader}</p>
                </div>

                <div className='row mt-md-5'>
                    <a className='text-decoration-none text-center ' target="popup" href='mailto:akjha992@gmail.com'>
                        <img style={{ height: '50px' }} className='' src={download_cv} /> Download Resume
                    </a>
                </div>
                <div className='row mt-4 mt-lg-5'>
                    <img style={{ width: '200px', height: '200px' }} className='shadow-lg mx-auto img-thumbnail rounded-circle' alt='avatar' src={this.props.profile.displayImage} />
                </div>
                <div className='row mt-3'>
                    <h3 className='d-block text-center'>{this.props.profile.displayName}</h3>
                    <p className='d-block text-center text-info fw-bold'>
                        {this.props.profile.title}
                    </p>
                </div>
                <div className='row mt-md-3'>
                    <img style={{ width: '600px', height: '400px' }} className='d-none d-md-block mx-auto' alt='base' src={base_img} />
                    <img style={{ width: '300px', height: '400px' }} className='d-md-none d-block mx-auto' alt='base' src={base_img} />
                </div>
            </div>
        );
    }
}
export default Headline;