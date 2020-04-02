import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About</span>
                      <h2 className='colorlib-heading'>Who Am I?</h2>
                      <p>
                        Hey, Im <b>Dev Pancea</b>! Im a first year student
                        studying mathematics at the{" "}
                        <b>University of Waterloo</b>, expected to graduate in
                        2024. I recently graduated from Chinguacousy Secondary
                        School, receiving a specialization in Science and
                        Technology Distinction. I am a tech enthusiast, with
                        experiences in fullstack development and product
                        management, alongside an interest in machine learning.
                      </p>
                      <p>
                        I am an enthusiastic worker, with a vision to better
                        myself in the field of computing and mathematics. I am
                        focused on harnessing machine learning and applied math
                        to better understand the world we live in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>
                  Here's somes stuff im good at
                </h2>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-bulb' />
                  </span>
                  <div className='desc'>
                    <h3>Full Stack Development </h3>
                    <p>
                      I have experience building web applications using and{" "}
                      <b>Angular</b> on the front end, as well as <b>Express</b>
                      , <b>Python(Flask)</b>,<b>NodeJS</b> and <b>MongoDB</b>{" "}
                      for the backend
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <i className='icon-phone3' />
                  </span>
                  <div className='desc'>
                    <h3>Data Science</h3>
                    <p>
                      I have worked with <b>Python</b> and <b>Java</b> for data
                      science/analysis. Worked with Pandas, Numpy, and other
                      libraries
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Data Structures and Algorithms </h3>
                    <p>
                      I have taken a variety of computer science courses, giving
                      me a grasp over fundamental concepts of DSA, such as{" "}
                      <b>Searching & Sorting</b>, <b>Linked Lists</b>,{" "}
                      <b>Trees & Hashmaps</b>, etc
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
