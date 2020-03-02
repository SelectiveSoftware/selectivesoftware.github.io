import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class ContactEmbedded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {

        return (
            <div className="contactUs">
            <div>
                <h2>Contact Us</h2>
            </div>
            <div className="textField">
                <form noValidate autoComplete="off">
                        <TextField fullWidth="true" required id="standard-required" placeholder="Name" />
                </form>
            </div>
            <div className="textField">
                <form noValidate autoComplete="off">
                        <TextField fullWidth="true" required id="standard-required" placeholder="Email" />
                </form>
            </div>
                <div className="message">
                    <TextareaAutosize label="Required" rowsMin={3} placeholder="Message" />
                    <button>Send</button>

            </div>
        </div>
        );
    }
}

export default ContactEmbedded
