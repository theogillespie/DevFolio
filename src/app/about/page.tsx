import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Jonathan D. Cohen Ph.D
                  </h2>
                  <p>
                    - Instructor <br></br>
                    - Lead instructional designer <br></br>
                    - Lead LMS developer <br></br>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>https://inventingtolearn.org/</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>jcohen@gsu.edu</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Ph.D</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+1 000-000-0000</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Atlanta</span>
                      </p>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2010 - 2014
                          </h6>
                          <h4 className="timeline-title">
                            University of Virginia
                          </h4>
                          <p className="timeline-text">
                          Doctor of Philosophy (Ph.D.): Educational/Instructional Technology
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 1999-2001
                          </h6>
                          <h4 className="timeline-title">
                          University of Maryland College Park
                          </h4>
                          <p className="timeline-text">
                          Master of Arts (M.A.): English Language and Literature/Letters
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />1993-1997
                          </h6>
                          <h4 className="timeline-title">
                            University of Michigan
                          </h4>
                          <p className="timeline-text">
                          Bachelors Degree: English Language and Literature/Letters
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 - Present
                          </h6>
                          <h4 className="timeline-title">Associate Professor - GSU</h4>
                          <p className="timeline-text">
                          Associate professor in the Learning Technologies program of the Department of Learning Sciences.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2012-2018
                          </h6>
                          <h4 className="timeline-title">Assistant Professor</h4>
                          <p className="timeline-text">
                            Assistant professor in the the Learning Technologies Division of the College of Education.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
