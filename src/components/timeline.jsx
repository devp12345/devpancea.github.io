import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <h2 className='colorlib-heading animate-box'>Experience</h2>
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
                          Internship at Atila <span>DEC 2019-present</span>
                        </h2>
                        <p>
                          I recently have joined the Atila team as a Software
                          Developer-Intern, working in a remote startup setting.
                          I have been working on the front end using React. I
                          focused on performance, usability, and up-to-date
                          practices when designing reusable React components.
                        </p>

                        <ul>
                          <li>
                            Designed a client-facing UI and components using
                            props and to view investment performance metrics
                          </li>
                          <li>
                            Created various React components translated design
                            mockups into responsive, interactive features,
                          </li>
                          <li>
                            Implemented Chart.js and Flinks API to client facing
                            application
                          </li>
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
