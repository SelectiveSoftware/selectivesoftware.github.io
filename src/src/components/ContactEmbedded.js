import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';

import ReCAPTCHA from "react-google-recaptcha";
import { SnackbarContent } from '@material-ui/core';

class ContactEmbedded extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            captchaToken: "6LenUOcUAAAAAD_e52KB7t8m7snbJXAZ2ha2OQMV",
            endpointPostUrl: 'https://uip9zvhsj3.execute-api.eu-west-1.amazonaws.com/Prod/contactus',
            contactResponse: "",
            contactMessage: "",
            open: false,
            invalidEmail: false,
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
          if (res.status === 200) {
              console.log("SUCCESS uploading. Response: " + res.data);
              this.setState({
                  open: true,
                  contactColor: "green",
                  contactMessage: "Message sent",
              });
            this.setState({
                ...this.state,
                data: {
                    "name": "",
                    "email": "",
                    "message": "",
                    "phone": "",
                    "g-recaptcha-response": ""
                }
            });
          } else {
              this.setState({
                  open: true,
                  contactColor: "red",
                  contactMessage: "Failed to submit message"
              })
            console.log("ERROR uploading.");
            console.log(res);
        }
      });
    }

    handleChange = (event) => {
        let o = {...this.state.data };
        o[event.target.name] = event.target.value;
        this.setState({data: o});
    }

    handleEmail = (event) => {
        let regex = /^\S+@\S+\.\S+$/
        this.setState({
            invalidEmail: !regex.test(event.target.value)
        })
        this.handleChange(event);
    }

    render() {
        const messageColor = this.state.contactColor;
        const message = this.state.contactMessage;
        let snackbar;
        if (message !== "") {
            snackbar = <Snackbar open={this.state.open} autoHideDuration={6000} onClose={() => {this.setState({ open: false })}}>
                <SnackbarContent style={{
                    backgroundColor: messageColor
                }} message={message}/>
            </Snackbar>
        }
        return (
            <div className="grid-wrapper">
                <div className="col-3">
                </div>
                <div className="col-6 contactUs">
                    <h2>Contact Us</h2>
                    {snackbar}
                    <form onSubmit={this.onSubmitForm.bind(this)} noValidate autoComplete="off">
                        <div className="textField">
                            <TextField fullWidth required id="standard-required" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.data.name} />
                        </div>
                        <div className="textField">
                            <TextField fullWidth required id="standard-required" placeholder="Email" onChange={this.handleEmail} name="email" value={this.state.data.email} error={this.state.invalidEmail} helperText={this.state.invalidEmail ? "Invalid Email Address": ""} />
                        </div>
                        <div className="message">
                            <TextareaAutosize label="Required" rowsMin={3} placeholder="Message" onChange={this.handleChange} name="message" value={this.state.data.message}/>
                        </div>
                        <ReCAPTCHA
                            sitekey={this.state.captchaToken}
                            onChange={this.verifyCallback.bind(this)}
                          />
                        <div className="submit">
                            <button disabled={!this.state.data['g-recaptcha-response'] || this.state.invalidEmail || this.state.data.email.length === 0}>
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
