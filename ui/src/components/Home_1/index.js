import React from 'react';
import Header from './header';
import Headline from './headline';
import Portfolio from './portfolio';
import Contact from './contact';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            inTransition: false,
            startPage: 0,
            endPage: 2
        }
    }
    switchPage = (e) => {
        let value = e.deltaY < 0 ? -1:1;
        if (!this.state.inTransition) {
            this.setState({ inTransition: true }, () => {
                this.setState((prev) => {
                    let nextPage =  value + prev.page ;
                    if(nextPage<this.state.startPage){
                        nextPage=this.state.startPage;
                    }else if(nextPage>this.state.endPage){
                        nextPage=this.state.endPage;
                    }
                    return {page: nextPage};
                }, ()=>{
                    setTimeout(() => { this.setState({inTransition: false})}, 800);
                });
            });
        }
    }
    changePage = (pageNo)=>{
        console.log(pageNo)
        this.setState({ inTransition: true }, () => {
            this.setState({page: pageNo}, ()=>{
                setTimeout(() => { this.setState({inTransition: false})}, 800);
            });
        });
    }
    render() {
        return (
            <div onWheel={this.switchPage} className="home1">
                <Header changer={this.changePage} page={this.state.page} />
                <Headline page={this.state.page} />
                <Portfolio page={this.state.page} />
                <Contact page={this.state.page} />
            </div>
        );
    }

}

export default App;
