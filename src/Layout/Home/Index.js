import React, { Component } from 'react';
import Application from '../../Components/Application/Application';
import Time from '../../Components/Time/Time';
import {Link} from 'react-router';

class Index extends Component {
    render() {
        var appData = {
            title: 'Something',
            namespace: 'com.name.space'
        };

        var apps = [
            <Application data={appData} />,
        ];

        return (
            <div className="home-index-view">
                <Link to="/deckbuilder">Deck Builder</Link>
            </div>
        );
    }
}

export default Index;
