import React, { Component } from 'react';

// import Mantra from '../ColorCard/mantra';
// import Timer from '../../Tools/timer';
// import Emotion from '../emotion';

export default class Red extends Component {
    
    render () {

        return (
            <div className='emocard-wrapper__red'>
                <div className='emocard-header__red'>
                    Feeling Red
                    {/* <Mantra className='mantra__red' />
                    <Timer className='timer__red' /> */}
                </div>
                {/* <div className='emocard-emotion emocard-emotion__red'>
                    <Emotion className='emotion emotion__red' />
                </div> */}
                <button className='all-clear'>All Clear</button>
            </div>
        )
    }
    
}