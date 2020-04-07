import React from 'react'

import peopleImage from '../assets/images/people.svg'
import processImage from '../assets/images/process.svg'
import technologyImage from '../assets/images/technology.svg'

class Flipper extends React.Component {
    render() {
        return (
            <section id="selective" className="main style1 special">
                <div className="grid-wrapper">
                    <div className="col-12">
                        <header className="major">
                            <h2>We are Selective...</h2>
                        </header>
                        <p>We think about what we are doing</p>
                    </div>

                    <div className="flip-box col-4">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <span className="image half"><img src={peopleImage} alt="" /></span>
                          <h3>People</h3>
                          <p>People are one of the most important and influential factors in developing quality software.</p>
                        </div>
                        <div className="flip-box-back">
                          <h2>People</h2>
                          <p>People are one of the key aspects for any project. Thats why we look for the following charactistics.</p>
                          <ul className="text-align-left">
                            <li>Experience</li>
                            <li>Motivated</li>
                            <li>Focus on quality</li>
                            <li>Test driven design</li>
                          </ul>
                        </div>
                      </div>
                    </div> 
                    <div className="flip-box col-4">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <span className="image half"><img src={technologyImage} alt="" /></span>
                          <h3>Technology</h3>
                          <p>The technology chosen needs to reflect the desired outcomes of the project.</p>
                        </div>
                        <div className="flip-box-back">
                          <h2>Technology</h2>
                          <p>Our experienced engineers have worked on many technologies including:</p>
                          <ul className="text-align-left">
                            <li>Java Spring Boot</li>
                            <li>Big Data</li>
                            <li>Apache Spark</li>
                            <li>Cloud Systems</li>
                          </ul>
                        </div>
                      </div>
                    </div> 
                    <div className="flip-box col-4">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <span className="image half"><img src={processImage} alt="" /></span>
                          <h3>Process</h3>
                          <p>Processes are how people go about their work, therefore a wholistic approach is taken.</p>
                        </div>
                        <div className="flip-box-back">
                          <h2>Process</h2>
                          <p>We think about many processes on the projects we work on, and advise the relevant ones. Some examples include:</p>
                          <ul className="text-align-left">
                            <li>Agile development</li>
                            <li>Product ownership</li>
                            <li>Retrospectives</li>
                          </ul>
                        </div>
                      </div>
                    </div> 
                </div>
            </section>
        )
    }
}

export default Flipper
