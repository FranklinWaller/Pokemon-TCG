import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 10,
            minutes: 10,
            seconds: 10,
        }
    }

    tick() {
        var now = new Date();

        this.setState({
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        });
    }

    componentDidMount() {
        // Keep ticking time to update hours/minutes
        // 500ms for accuracy.
        setInterval(() => this.tick(), 500);
    }

    render() {
        return (
            <div className="time">
                <span>{this.state.hours}</span>
                <span>:</span>
                <span>{this.state.minutes}</span>
                <span>:</span>
                <span>{this.state.seconds}</span>
            </div>
        );
    }
}

export default Time;
