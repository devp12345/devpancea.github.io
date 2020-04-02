import React, { Component } from "react";
var bg = require("../assets/sidesuit.jpg");

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id='colorlib-hero'
          className='js-fullheight'
          data-section='home'
        >
          <div className='flexslider js-fullheight'>
            <ul className='slides'>
              <li
                style={{
                  backgroundImage: "url(" + bg + ")"
                }}
              >
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                      <div className='slider-text-inner js-fullheight'>
                        <div className='desc'>
                          <h1 style={{ color: "white", fontSize: 60 }}>
                            Hi, im Dev
                          </h1>

                          <h2 style={{ color: "white", fontSize: "25px" }}>
                            <b>student @ uwaterloo</b>
                            <br />
                            <br />
                            <button
                              style={{
                                color: "white",
                                border: "1px solid white",
                                left: "20px"
                              }}
                              className='btn btn-primary btn-learn'
                            >
                              Resume
                            </button>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
