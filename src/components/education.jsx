import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='education'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <h2 className='colorlib-heading animate-box'>Education</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-3'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          University of Waterloo <span>SEP 2019-APR 2024</span>
                        </h2>
                        <p>
                          <b>BMath</b> Honours Mathematics
                        </p>
                        <span style={{ fontStyle: "italic" }}>
                          Relevant courses:
                        </span>
                        <ul>
                          <li>CS136 - Data Structures and Algorithms</li>
                          <li>CS246 - Object Oriented Software Development</li>
                          <li>STAT230 - Introduction to Probability</li>
                          <li>CO250 - Introduction to Optimization</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
