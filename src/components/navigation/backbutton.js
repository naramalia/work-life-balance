import React, { Component } from 'react';
import { history } from 'react-router-dom';

export default class BackButton extends Component {
    constructor () {
        super()
    }
    
    render () {
        return (
           <div className='back-button_wrapper'>
                <div className='back-button'>
                    <button onClick={this.props.history.goBack()}></button>
                </div>
            </div>
        );
    }
}
