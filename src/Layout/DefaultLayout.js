import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div className="default-layout">
                {this.props.children}
            </div>
        );
    }
}

export default Index;
