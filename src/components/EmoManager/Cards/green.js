import React, { Component } from 'react';

import Mantra from '../ColorCard/mantra';
import Timer from '../../Tools/timer';
import Emotion from '../emoModal';

export default class Green extends Component {
    
    render () {

        return (
            <div className='emocard-wrapper__green'>
                <div className='emocard-header__green'>
                    Feeling Green - Peachy Keen!
                    {/* <Mantra className='mantra__green' />
                    <Timer className='timer__green' /> */}
                </div>
                {/* <div className='emocard-emotion emocard-emotion__green'>
                    <Emotion className='emotion emotion__green' />
                </div> */}
                <button className='all-clear'>All Clear</button>
            </div>
        )
    }
    
}