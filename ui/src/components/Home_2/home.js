import React from 'react';
import ScrollSnap from 'scroll-snap'
import Header from './Header/header';
import Headline from './Headline/headline';
import ProjectsPage from './Project/projects';
import base_img from './images/base.svg';
function callback() {
    console.log('snapped')
}
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef()
    }
    bindScrollSnap() {
        const element = this.container.current
        const snapElement = new ScrollSnap(element, {
            snapDestinationY: '100%',
        })
        snapElement.bind(callback)
    }

    componentDidMount() {
        this.bindScrollSnap()
    }
    render() {
        return (
            <div>
                <div className="container">
                    <img style={{width:'100%',opacity:'0.05'}} className='position-absolute top-50 start-50 translate-middle d-none d-md-block' alt='avatar' src={base_img} />
                </div>
                <Header />
                <div id="container" ref={this.container}>
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