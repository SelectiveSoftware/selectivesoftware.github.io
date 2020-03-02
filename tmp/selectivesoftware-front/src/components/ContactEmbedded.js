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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <form noValidate autoComplete="off">
                        <TextField required id="standard-required" label="Required" defaultValue="Name" />
                </form>
            </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form noValidate autoComplete="off">
                    <TextField required id="standard-required" label="Required" defaultValue="Email" />
                </form>
            </div>
                <div className="message">
                    <TextareaAutosize label="Required" rowsMin={3} placeholder="Message" />

                    <button>Default</button>

            </div>
        </div>
        );
    }
}

export default ContactEmbedded
