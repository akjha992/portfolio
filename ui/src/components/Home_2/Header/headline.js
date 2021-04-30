import React from 'react';
import avatar from './images/avatar-1.png';
import base_img from './images/base.svg';
class Home extends React.Component {
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
                <div className='row mt-5'/>
                <div className='row mt-4 mt-lg-5'>
                    <img style={{width:'250px'}} className='mx-auto img-thumbnail rounded-circle' alt='avatar' src={this.props.profile.displayImage} />
                </div>
                <div className='row mt-2'>
                    <h3 className='d-block text-center'>{this.props.profile.displayName}</h3>
                    <p className='d-block text-center'>
                        {this.props.profile.companies&&this.props.profile.companies.length>0&&`${this.props.profile.companies[0].title} `}
                        {this.props.profile.companies&&this.props.profile.companies.map((cp,ind)=>(<span><a target='_blank' href={cp.link}>{cp.companyName}</a> {ind<this.props.profile.companies.length-1?' | Ex ':'' }</span>))}
                    </p>
                </div>
                <div className='position-absolute fixed-bottom mb-4' style={{zIndex:-10}}>
                    <img style={{width:'500px'}} className='d-none d-lg-none d-md-block mx-auto' alt='avatar' src={base_img} />
                    <img style={{width:'600px'}} className='d-none d-lg-block mx-auto' alt='avatar' src={base_img} />
                    <img style={{width:'300px'}} className='d-md-none d-block mx-auto' alt='avatar' src={base_img} />
                </div>
            </div>
        );
    }
}
export default Home;