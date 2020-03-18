import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';

class ContactEmbedded extends React.Component {

    constructor(props) {
        super(props);
        var endpointPostUrl = 'https:YOUR_SERVERLESS_ID.execute-api.eu-west-1.amazonaws.com/YOUR_STAGE';
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    onSubmitForm(event) {
      event.preventDefault();
      console.log(event);
      var formData = JSON.stringify(this.state)
      console.log(formData);
     /* $.ajax({
        type: 'POST',
        url: endpointPostUrl,
        data: formData,
        success: function(responseData) {
          console.log('contactFormEndpoint answer: ', responseData);
           {"ResponseMetadata":{"RequestId":"2c1e4a51-6074-5b00-a6d1-1ea252987a7c"},"MessageId":"ba649ce7-f929-5ea8-babc-c814cbc56fd4"}
        },
        dataType: 'json',
        contentType: 'application/json',
      });*/
    }

    handleChange = (event) => {
        let o = {...this.state };
        o[event.target.name] = event.target.value;
        this.setState(o);
    }

    render() {
        return (
            <div className="grid-wrapper">
                <script src="https:www.google.com/recaptcha/api.js"></script>
                <div className="col-3">
                </div>
                <div className="col-6 contactUs">
                    <h2>Contact Us</h2>
                    <form onSubmit={this.onSubmitForm.bind(this)} noValidate autoComplete="off">
                        <div className="textField">
                            <TextField fullWidth required id="standard-required" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.name} />
                        </div>
                        <div className="textField">
                            <TextField fullWidth required id="standard-required" placeholder="Email" onChange={this.handleChange} name="email" value={this.state.email}/>
                        </div>
                        <div className="message">
                            <TextareaAutosize label="Required" rowsMin={3} placeholder="Message" onChange={this.handleChange} name="message" value={this.state.message}/>
                        </div>
                        <div className="submit">
                            <button className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY" data-callback="onSubmitForm">
                                Send
                            </button>
                        </div>
                    </form>
                <div className="col-3">
                </div>
            </div>
        </div>
        );
    }
}

export default ContactEmbedded
