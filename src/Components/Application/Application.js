import React, { Component } from 'react';
import Application from '../../Components/Application/Application';

class Index extends Component {
    render() {
        return (
            <div className="application">
                <h2>{this.props.data.title}</h2>
                <span>{this.props.data.namespace}</span>
            </div>
        );
    }
}

export default Index;
