import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class ContactEmbedded extends React.Component {

    constructor(props) {
        var endpointPostUrl = 'https://YOUR_SERVERLESS_ID.execute-api.eu-west-1.amazonaws.com/YOUR_STAGE';
        super(props);
    }

    serializeFormJSON(form) {
      //var o = {};
      //var a = form.serializeArray();
      //$.each(a, function() {
      //  if (o[this.name]) {
      //    if (!o[this.name].push) {
      //      o[this.name] = [o[this.name]];
      //    }
      //    o[this.name].push(this.value || '');
      //  } else {
      //    o[this.name] = this.value || '';
      //  }
      //});
      //return o;
    }

    onSubmitForm(e) {
      //e.preventDefault();
      console.log(e);
      //var formData = JSON.stringify(serializeFormJSON($('#contact-us-form')));
      //console.log('formData');
      //console.log(formData);
      //$.ajax({
      //  type: 'POST',
      //  url: endpointPostUrl,
      //  data: formData,
      //  success: function(responseData) {
      //    console.log('contactFormEndpoint answer: ', responseData);
      //    // {"ResponseMetadata":{"RequestId":"2c1e4a51-6074-5b00-a6d1-1ea252987a7c"},"MessageId":"ba649ce7-f929-5ea8-babc-c814cbc56fd4"}
      //  },
      //  dataType: 'json',
      //  contentType: 'application/json',
      //});
    }

    render() {

        return (
            <div className="grid-wrapper">
                <script src="https://www.google.com/recaptcha/api.js"></script>
                <div className="col-3">
                </div>
                <div className="col-6 contactUs">
                    <h2>Contact Us</h2>
                    <form noValidate autoComplete="off">
                        <div className="textField">
                            <TextField fullWidth="true" required id="standard-required" placeholder="Name" />
                        </div>
                        <div className="textField">
                            <TextField fullWidth="true" required id="standard-required" placeholder="Email" />
                        </div>
                        <div className="message">
                            <TextareaAutosize label="Required" rowsMin={3} placeholder="Message" />
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
