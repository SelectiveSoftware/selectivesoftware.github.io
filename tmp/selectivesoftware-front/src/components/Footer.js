import React from 'react'

class Footer extends React.Component {
                    //<li>Address: First Line, Second Line, Postcode.</li>
                    //<li>Company Registration No. 00000000</li>
                    //<li>Vat Registration GB0000000000</li>
                    //<li>Registered in England & Wales</li>
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li>Email: info@selectivesoftware.co.uk</li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2020</li>
                    <li>Designed by Selective Software</li>
                </ul>
            </section>
        )
    }
}

export default Footer
