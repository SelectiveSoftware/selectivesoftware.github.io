import React from 'react'

class Zombotron extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <div className="selectiveicon"></div>
                    <h1>Selective Software</h1>
                    <p>Crafting software<br />
                    not making it.</p>
                    <ul className="actions">
                        <li><a href="#selective" className="button scrolly">Select</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Zombotron
