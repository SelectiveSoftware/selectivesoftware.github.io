import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';

import ReCAPTCHA from "react-google-recaptcha";

class ContactEmbedded extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            captchaToken: "6LenUOcUAAAAAD_e52KB7t8m7snbJXAZ2ha2OQMV",
            endpointPostUrl: 'https://uip9zvhsj3.execute-api.eu-west-1.amazonaws.com/Prod/contactus',
            data: {
                "name": "",
                "email": "",
                "message": "",
                "phone": "",
                "g-recaptcha-response": ""
            }
        };
    }

    verifyCallback(recaptchaToken) {
      this.setState({
        data: {
          ...this.state.data,
          "g-recaptcha-response": recaptchaToken
        }
      });
    }

    onSubmitForm(event) {
      event.preventDefault();
      var formData = JSON.stringify(this.state.data)

      axios.post(this.state.endpointPostUrl, formData, {
          // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        if(res.status === 200) {
          console.log("SUCCESS uploading. Response: " + res.data);
        } else {
          console.log("ERROR uploading.");
          console.log(res);
        }
      });


     /* $.ajax({
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
        let o = {...this.state.data };
        o[event.target.name] = event.target.value;
        this.setState({data: o});
    }

    render() {
        return (
            <div className="grid-wrapper">
                <div className="col-3">
                </div>
                <div className="col-6 contactUs">
                    <h2>Contact Us</h2>
                    <form onSubmit={this.onSubmitForm.bind(this)} noValidate autoComplete="off">
                        <div className="textField">
                            <TextField fullWidth required id="standard-required" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.data.name} />
                        </div>
                        <div className="textField">
                            <TextField fullWidth required id="standard-required" placeholder="Email" onChange={this.handleChange} name="email" value={this.state.data.email}/>
                        </div>
                        <div className="message">
                            <TextareaAutosize label="Required" rowsMin={3} placeholder="Message" onChange={this.handleChange} name="message" value={this.state.data.message}/>
                        </div>
                        <ReCAPTCHA
                            sitekey={this.state.captchaToken}
                            onChange={this.verifyCallback.bind(this)}
                          />
                        <div className="submit">
                            <button>
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
