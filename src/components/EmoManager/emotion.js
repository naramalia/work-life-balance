import React, { Component } from 'react';
import { reduxForm, field } from 'redux-form';

// import EmotionForm from './emotionForm';

// import Timer from '../Tools/timer';
// import EmotionForm from './emotionForm';


class Emotion extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="emotion-wrapper">
                <div className='emotion'>
                   This is the emotions page!
                   {/* <EmotionForm /> */}
                </div>
                
            </div>    
        )
    }
    
}

Emotion = reduxForm({
    form: 'Emotion'
})(Emotion);

export default Emotion;