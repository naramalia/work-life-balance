import React, { Component } from 'react';

// import Mantra from '../ColorCard/mantra';
// import Timer from '../../Tools/timer';
// import Emotion from '../emotion';

export default class Yellow extends Component {
    
    render () {

        return (
            <div className='emocard-wrapper__yellow'>
                <div className='emocard-header__yellow'>
                    Feeling Yellow, Time to Get Mellow
                    {/* <Mantra className='mantra__yellow' />
                    <Timer className='timer__yellow' /> */}
                </div>
                {/* <div className='emocard-emotion emocard-emotion__yellow'>
                    <Emotion className='emotion emotion__yellow' />
                </div> */}
                <button className='all-clear'>All Clear</button>
            </div>
        )
    }
    
}