import React, { Component } from 'react';
// import { reduxForm, field } from 'redux-form';
import ReactModal from "react-modal";

// import EmotionForm from './emotionForm';

// import Timer from '../Tools/timer';
// import EmotionForm from './emotionForm';


class EmoModal extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
                <ReactModal isOpen={this.props.modalIsOpen}>
                <h1>I'm in a modal!</h1>
                </ReactModal>
            
        );
    }
}
    

// EmoModal = reduxForm({
//     form: 'EmoModal'
// })(EmoModal);

export default EmoModal;