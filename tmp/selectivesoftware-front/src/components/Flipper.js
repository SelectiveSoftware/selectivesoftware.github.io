import React from 'react'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Flipper extends React.Component {
    render() {
        return (
            <section id="three" className="main style1 special">
                <div className="grid-wrapper">
                    <div className="col-12">
                        <header className="major">
                            <h2>We are Selective...</h2>
                        </header>
                        <p>We think about what we are doing</p>
                    </div>

                    <div className="col-4">
                        <span className="image fit"><img src={pic02} alt="" /></span>
                        <h3>People</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <span className="image fit"><img src={pic03} alt="" /></span>
                        <h3>Technology</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <span className="image fit"><img src={pic04} alt="" /></span>
                        <h3>Process</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </div>

                </div>
 <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <h2>Front Side</h2>
    </div>
    <div class="flip-box-back">
      <h2>Back Side</h2>
    </div>
  </div>
</div> 
            </section>
        )
    }
}

export default Flipper
