import React, { Component } from "react";
import { FaMedium, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
var bg = require("../assets/uwhoodie.jpeg");

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href='#navbar'
            className='js-colorlib-nav-toggle colorlib-nav-toggle'
            data-toggle='collapse'
            data-target='#navbar'
            aria-expanded='false'
            aria-controls='navbar'
          >
            <i />
          </nav>
          <aside id='colorlib-aside' className='border js-fullheight'>
            <div className='text-center'>
              <div
                className='author-img'
                style={{
                  backgroundImage: "url(" + bg + ")"
                }}
              />
              <h1 id='colorlib-logo'>
                <a href='index.html'>dev pancea</a>
              </h1>

              <h4>
                <a href='https://uwaterloo.ca/math/' target='blank'>
                  Waterloo Math
                </a>
              </h4>
            </div>

            <nav id='colorlib-main-menu' role='navigation' className='navbar'>
              <div id='navbar' className='collapse'>
                <ul>
                  <li className='active'>
                    <a href='#home' data-nav-section='home'>
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href='#about' data-nav-section='about'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#education' data-nav-section='education'>
                      Education
                    </a>
                  </li>
                  <li>
                    <a href='#' data-nav-section='projects'>
                      Projects
                    </a>
                  </li>
                  {/*<li>
                    <a href='#' data-nav-section='blog'>
                      Blog
                    </a>
                  </li>*/}

                  <li>
                    <a href='#timeline' data-nav-section='timeline'>
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id='colorlib-main-menu'>
              <ul>
                <li>
                  <a
                    href='https://www.linkedin.com/in/dev-pancea-018b7116a/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/devp12345'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href='https://medium.com/@dpancea'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Medium <FaMedium />
                  </a>
                </li>
                <li>
                  <a
                    href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dpancea@gmail.comm&tf=1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Email <FaEnvelope />
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    );
  }
}
