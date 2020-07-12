import React, { Component } from 'react';
import { Link } from 'react-router';

import EmoModal from "./emoModal";

class EmoCheck extends Component {
    constructor (props) {
        super(props);

    this.state = {
        emoModalIsOpen: false
    };
        
    this.handleNewEmotionClick = this.handleNewEmotionClick.bind(this);

    }

    handleNewEmotionClick() {
        this.setState({
            emoModalIsOpen: true
        })
    }

    render () {

        return (
            <div className="emotion-check_wrapper">
                <div className="emotion-check_header">
                    Reality Check
                </div>

                <div className="emotion-check">
                    <div className="emotion-check_card emotion-check_blue">
                        <EmoModal modalIsOpen={this.state.emoModalIsOpen}/>

                        <div className="new-emotion-link">
                            <a onClick={this.handleNewEmotionClick}>
                                <img src ='./images/emotion/cry.svg' alt="sad face"></img>
                            </a>    
                        </div>
                    </div>

                    <div className="emotion-check_card emotion-check_green">
                        <EmoModal modalIsOpen={this.state.emoModalIsOpen}/>

                            <div className="new-emotion-link">
                                <a onClick={this.handleNewEmotionClick}>
                                    <img src ='./images/emotion/smile.svg' alt="happy face"></img>
                                </a>
                            </div>
                    </div>

                    <div className="emotion-check_card emotion-check_yellow">
                        <EmoModal modalIsOpen={this.state.emoModalIsOpen}/>

                        <div className="new-emotion-link">
                            <a onClick={this.handleNewEmotionClick}>
                                <img src ='./images/emotion/emoji.svg' alt="mixed up face"></img>
                            </a>
                        </div>
    
                    </div>

                    <div className="emotion-check_card emotion-check_red">
                        <EmoModal modalIsOpen={this.state.emoModalIsOpen}/>

                        <div className="new-emotion-link">
                            <a onClick={this.handleNewEmotionClick}>
                                <img src ='./images/emotion/angry.svg' alt="mad face"></img>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EmoCheck;