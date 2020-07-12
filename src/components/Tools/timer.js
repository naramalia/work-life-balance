import React, { Component } from 'react';
import moment from 'moment';

export default class Timer extends Component {

    state = {
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval (() => {
            const { timeOut, timeFormat } = this.props;
            const then = moment(timeOut, timeFormat);
            const now = moment();
            const timer = moment(then-now);
            const minutes = timer.format('mm');
            const seconds = timer.format('ss');

            this.setState({ minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInternval(this.interval);
        }
    }

    render () {
        const { minutes, seconds } = this.state;

        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }
        
        return (
            <div className='timer-bar'>
                <div className='timer-wrapper'>
                    {minutes && (
                        <div className="timer-item">
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className='timer-item'>
                        <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const SVGCircle = ({ radius }) => (
    <svg className='timer-svg'>
        <path
            fill="none"
            stroke="#333"
            strokeWidth="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians= ((angleInDegrees - 90)) * Math.PI / 180;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number- in_min) * (out_max - out_min)) / (in_max - in_min)
    );
}