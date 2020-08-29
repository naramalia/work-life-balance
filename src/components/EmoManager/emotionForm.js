import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';

class EmotionForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            emotion: "",
            trigger: "",
            notes: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        // axios.post("https://",
        //     {
        //         log_entry: {
        //             emotion: this.state.emotion,
        //             trigger: this.state.trugger
        //             notes: this.state.notes
        //         }
        //     },
        //     { withCredentials: true }
        // ).then(response => {
        //     console.log("response", response);
        // }) 

        event.preventDefault();
    }

    render () {
        return (
            <div className="emotion_form-wrapper">
                <form className="emotion_form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="emotion"
                        placeholder="How do you feel?"
                        value={this.state.emotion}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="trigger"
                        placeholder="What happened?"
                        value={this.state.trigger}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="notes"
                        placeholder="notes"
                        value={this.state.notes}
                        onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>    
        )
    }
}

EmotionForm = reduxForm({
    form: 'EmotionForm'
})(EmotionForm);

export default EmotionForm;