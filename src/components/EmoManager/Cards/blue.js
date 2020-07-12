import React, { Component } from 'react';

// import Mantra from '../ColorCard/mantra';
// import Timer from '../../Tools/timer';

export default class Blue extends Component {
    
    render () {

        return (
            <div className='emocard-wrapper__blue'>
                <div className='emocard-header__blue'>
                    Feeling Blue
                    {/* <Mantra className='mantra__blue' />
                    <Timer className='timer__blue' /> */}
                </div>
                <div className='emocard-emotion emocard-emotion__blue'>
                    {/* <Emotion className='emotion emotion__blue' /> */}
                </div>
                <button className='all-clear'>All Clear</button>
            </div>
        )
    }
    
}