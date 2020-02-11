import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true})
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    render() {
        const {open} = this.state;

        return (
            <div className="contact">
                <Button variant="contained" onClick={this.handleClickOpen}>
                    Contact Us
                </Button>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To Contact selective software enter your email address and question in the dialogs below and we will respond shortly!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            multiline
                            rows="5"
                            label="Enter your question here"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Contact
