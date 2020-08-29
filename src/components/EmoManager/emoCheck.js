import React, { Component } from 'react';

import EmoModal from "./emoModal";

class EmoCheck extends Component {
    constructor () {
        super();

    this.state = {
        emoModalIsOpen: false
    };
        
    this.handleNewEmotionClick = this.handleNewEmotionClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);


    }


    handleNewEmotionClick() {
        this.setState({
            emoModalIsOpen: true
        });
    }

    handleModalClose() {
        this.setState({
            emoModalIsOpen: false
        });
    }
    

    render () {

        return (
            <div className="emotion-check_wrapper">
                <div className="emotion-check_header">
                    Reality Check
                </div>

                <div className="emotion-check">
                    <div className="emotion-check_card emotion-check_blue">
                        {/* <EmoModal
                            handleModalClose={this.handleModalClose}
                            modalIsOpen={this.state.emoModalIsOpen}
                            // className="emo-modal emo-modal_blue"
                        /> */}

                        <div className="new-emotion-link">
                            <a onClick={this.handleNewEmotionClick}>
                                <img src ='./images/emotion/cry.svg' alt="sad face"></img>
                            </a>    
                        </div>
                    </div>

                    <div className="emotion-check_card emotion-check_green">
                        <EmoModal 
                            handleModalClose={this.handleModalClose}
                            modalIsOpen={this.state.emoModalIsOpen}
                            // className="emo-modal emo-modal_green"
                        />

                            <div className="new-emotion-link">
                                <a onClick={this.handleNewEmotionClick}>
                                    <img src ='./images/emotion/smile.svg' alt="happy face"></img>
                                </a>
                            </div>
                    </div>

                    <div className="emotion-check_card emotion-check_yellow">
                        <EmoModal 
                            handleModalClose={this.handleModalClose}
                            modalIsOpen={this.state.emoModalIsOpen}
                            // className="emo-modal emo-modal_yellow"
                            />

                        <div className="new-emotion-link">
                            <a onClick={this.handleNewEmotionClick}>
                                <img src ='./images/emotion/emoji.svg' alt="mixed up face"></img>
                            </a>
                        </div>
    
                    </div>

                    <div className="emotion-check_card emotion-check_red">
                        <EmoModal 
                            handleModalClose={this.handleModalClose}
                            modalIsOpen={this.state.emoModalIsOpen}
                            // className="emo-modal emo-modal_red"
                            />

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