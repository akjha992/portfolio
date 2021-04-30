import React from 'react';
import Header from './Header/header';
import Headline from './Header/headline';
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <Headline profile={this.props.profile}/>
            </div>
        );
    }
}
export default Home;