import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    const activities = [

      {
        name: "Microsoft Sudent learn Ambassador",
        type: "University of Waterloo represntative",
        description:
          "Im a Microsoft ambassador, helping incubate the tech culture at UWaterloo. Im also a part of the AI & ML league for ambassador",
        link: "https://studentambassadors.microsoft.com/",
        url: "https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg",
        skills: []
      },

      {
        name: "WATonomous",
        type: "Autonomous vehicle design team",
        description:
          "Design team member for UWaterloo's autonomous vehicle team. Responsible for:",
        link: "https://www.watonomous.ca/",

        skills: [
          "Redesigning team website as per updated requirments",
          "Managing design projects with OKRs, GANNT charts, etc"
        ],

        url:
          "data:image/png;base64,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"
      },

      {
        name: "Brampton Robotics/Discobots",
        type: "Vex and FIRST Robotics",
        description:
          "Former build member, current volunteer/referee. Notable achievemnts include:",
        url:
          "https://images.squarespace-cdn.com/content/v1/59fcd5730abd048c3e93d131/1548049659021-XFPIEZ462L13NXZ4T8HB/ke17ZwdGBToddI8pDm48kKgf63oyI_UWZww9IMBPTHdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxA9Q9RqBWc_TxlJOvL8PyveZERtO_me7JW8m1-Fbj_MsKKlnGnoL5jQ6UePYuGVNI/IMG_7601-2.jpg",
        skills: [
          "2016 Vex robotics world champion",
          "2017 FIRST robotics world divisional finalists"
        ],
        link: "https://www.bramptonrobotics.org/"
      }
    ];

    const projects = [
      {
        name: "Hindi classifier",
        type: "Deep Learning project",
        description:
          "Deep Learning Neural Ntework in Python to classify hand written Hindi",
        link: "https://github.com/devp12345/Hindi-Deep-Neural-Network",
        url: "https://confusedcoders.com/wp-content/uploads/2017/12/TensorFlowLogo.png",
        skills: ["Utilized Keras and Tensorflow to reach 96% test set accuracy"]
      },
      {
        name: "DevConnector",
        type: "Full Stack web app",
        description: "Fully functioning social media platform built using:",
        link: "https://github.com/devp12345/DevConnector",
        url: "https://cdnw.phpfox.com/uploads/2017/04/Social-network-1.png",
        skills: ["React", "ExpressJS", "NodeJS", "MongoDB"]
      },
      {
        name: "ShopSafety",
        type: "Sold to the Peel District School Board",
        description:
          "Designed and managed a safety certificate managemer web application." +
          " Updated and added functioanllity/services as per requirments.",
        url: "https://cdn.auth0.com/blog/illustrations/angular.png",

        skills: ["Angular", "Firebase"],
        link: "https://github.com/devp12345/ShopSafety"
      }
    ];

    /*<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">{project.name}</a></h3>
                      <span>Website</span>
                      <p className="icon">
                        <span><a href={project.url} target="blank"><i className="icon-share3" /></a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>*/

    return (
      <div>
        <section className='colorlib-work' data-section='projects'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>Projects</span>
                <h2 className='colorlib-heading animate-box'>
                  Here are some of my recent projects
                </h2>
              </div>
            </div>
            <div className='row'>
              {projects.map(project => (
                <div
                  className='col-md-4 animate-box'
                  data-animate-effect='fadeInTop'
                >
                  <div
                    className='project'
                    style={{
                      backgroundImage: `url(${project.url})`
                    }}
                  >
                    <div className='desc'>
                      <div className='con'>
                        <h3>
                          <a href='work.html'>{project.name}</a>
                        </h3>
                        <p>{project.type}</p>
                        <span style={{ color: "#F5F5F5" }}>
                          {project.description}
                        </span>
                        <ul>
                          {project.skills.map(skill => (
                            <span>
                              <li style={{ color: "#F5F5F5" }}>{skill}</li>
                            </span>
                          ))}
                        </ul>
                        {project.link && (
                          <p className='icon'>
                            <span>
                              <a href={project.link} target='blank'>
                                <i className='icon-share3' />
                              </a>
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>Extracurriclars and Teams</span>
                <h2 className='colorlib-heading animate-box'>
                  Here are some teams/activities that have been keeeping me busy
                </h2>
              </div>
            </div>
            <div className='row'>
              {activities.map(project => (
                <div
                  className='col-md-4 animate-box'
                  data-animate-effect='fadeInTop'
                >
                  <div
                    className='project'
                    style={{
                      backgroundImage: `url(${project.url})`
                    }}
                  >
                    <div className='desc'>
                      <div className='con'>
                        <h3>
                          <a href='work.html'>{project.name}</a>
                        </h3>
                        <p>{project.type}</p>
                        <span style={{ color: "#F5F5F5" }}>
                          {project.description}
                        </span>
                        <ul>
                          {project.skills.map(skill => (
                            <span>
                              <li style={{ color: "#F5F5F5" }}>{skill}</li>
                            </span>
                          ))}
                        </ul>
                        {project.link && (
                          <p className='icon'>
                            <span>
                              <a href={project.link} target='blank'>
                                <i className='icon-share3' />
                              </a>
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
