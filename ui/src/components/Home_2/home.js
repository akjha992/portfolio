import React from 'react';
import ScrollSnap from 'scroll-snap'
import Header from './Header/header';
import Headline from './Headline/headline';
import ProjectsPage from './Project/projects';
import base_img from './images/base.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <img style={{width:'100%',opacity:'0.08'}} className='position-absolute top-50 start-50 translate-middle d-none d-md-block' alt='avatar' src={base_img} />
                </div>
                <Header />
                <div id="container">
                    <div className="page">
                        <Headline className="page" profile={this.props.data.home} />
                    </div>
                    <div className="page">
                        <ProjectsPage className="page" projects={this.props.data.projects} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;