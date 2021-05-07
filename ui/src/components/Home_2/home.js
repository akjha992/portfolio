import React from 'react';
import ScrollSnap from 'scroll-snap'
import Header from './Header/header';
import Headline from './Headline/headline';
import Contact from './Contact/contact';
import ProjectsPage from './Project/projects';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <div id="container">
                    <div className="page">
                        <Headline className="page" profile={this.props.data.home} />
                    </div>
                    <div className="page">
                        <ProjectsPage className="page" projects={this.props.data.projects} />
                    </div>
                    <div className="page">
                        <Contact className="page" projects={this.props.data.projects} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;