import React from 'react';
import ScrollSnap from 'scroll-snap'
import Header from './Header/header';
import Headline from './Header/headline';
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
                <Header />
                <div id="container" ref={this.container}>
                    <div className="page">
                        <Headline className="page" profile={this.props.profile} />
                    </div>
                    <div className="page">
                        <Headline className="page" profile={this.props.profile} />
                    </div>
                    <div className="page">
                        <Headline className="page" profile={this.props.profile} />
                    </div>
                    <div className="page">
                        <Headline className="page" profile={this.props.profile} />
                    </div>
                    <div className="page">
                        <Headline className="page" profile={this.props.profile} />
                    </div>
                    <div className="page">
                        <Headline className="page" profile={this.props.profile} />
                    </div>
                    <div className="page">
                        <Headline className="page" profile={this.props.profile} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;