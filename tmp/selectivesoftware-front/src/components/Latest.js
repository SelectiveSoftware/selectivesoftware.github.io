import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

class Latest extends React.Component {
    render() {
        return (
            <div className="Latest">
                <h2>Latest Project</h2>
                <p>This client was looking for a static website. Our process involved drawing up inital various designs for the client, before getting feedback and working on the designs interatively.</p>
                <p>Once the design phase was complete, we built and hosted the website for the client.</p>
                <p>During the process of understanding the clients business, we suggested other ideas where technology could help the clients business. A couple of which the client is investigating, if they are viable and would help the business.</p>
            </div>
        )
    }
}
export default Latest

