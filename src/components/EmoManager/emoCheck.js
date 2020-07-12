import React, { Component } from 'react';
import { Link } from 'react-router';

class EmoCheck extends Component {
        
    constructor () {
        super();
        
    }

    handleOnClick () {
        
    }
    

    render () {

        return (
            <div className="emotion-check_wrapper">
                <div className="emotion-check_header">
                    Reality Check
                </div>

                <div className="emotion-check">
                    <div className="emotion-check_card emotion-check_blue">
                        {/* <Link to="/emotion"> */}
                            <img src ='./images/emotion/cry.svg' alt="sad face"></img>
                        {/* </Link> */}
                    </div>

                    <div className="emotion-check_card emotion-check_green">
                        <img src ='./images/emotion/smile.svg' alt="happy face"></img>
                    </div>

                    <div className="emotion-check_card emotion-check_yellow">
                        <img src ='./images/emotion/emoji.svg' alt="mixed up face"></img>
                    </div>

                    <div className="emotion-check_card emotion-check_red">
                        <img src ='./images/emotion/angry.svg' alt="mad face"></img>
                    </div>
                </div>

            </div>
        )
    }
}

export default EmoCheck;