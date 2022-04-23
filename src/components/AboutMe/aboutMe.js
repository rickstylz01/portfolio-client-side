import React from "react";
import Fade from "react-reveal";
import { Container, Image } from "react-bootstrap";
import './aboutMe.css';

const AboutMe = () => {
  return(
    <div>
      {/*Introduction*/}
      <section id="intro">
        <Fade>
          <h1 className="center-text">About Me</h1>
        </Fade>
        <Container className="parent-container">
          <div className="flex-child">
            <Fade left>
              <Image
                className="staring-image"
                src={require('../../assets/images/staring-out.jpg')}
                alt="standing on a mountain looking out"
                thumbnail
                fluid
              />
            </Fade>
          </div>
          <div className="flex-child align-self-center">
            <Fade right>
              <p className="text-muted text-xLarge">
                I enjoy working on creative projects that are both functionally and esthetically notable. My journey to becoming a full-stack developer began with self-taught lessons and resources. I am a graduate of the  "Grow with Google" Scholarship program, where I was taught the fundamentals of front-end web development.  I recently completed a back-end software engineer training program with an organization called Reskill Americans.
                <br/>
                <br/>
                Thanks to RA, I gained the experience of working in a real-world project scenario with a diverse team of other developers to create full-stack applications.
              </p>
            </Fade>
          </div>
        </Container>
      </section>

      {/*Achievements*/}
      <section id="achievements">
        <Container className="achievements-container mt-5">
          <Fade bottom>
            <h2 className="padding-right mobile-text-center">Achievements</h2>
            <Fade bottom>
              <div className="flex-child">
                <Image
                  className="google-scholarship"
                  src={require('../../assets/images/google-scholarship.jpg')}
                  alt="Grow with Google Certificate"
                  fluid
                  thumbnail
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="flex-child">
                <Image
                  className="ra-scholarship"
                  src={require('../../assets/images/RaCertificate.png')}
                  alt="Reskill Americans Certificate"
                  fluid
                  thumbnail
                />
              </div>
            </Fade>
          </Fade>
        </Container>
      </section>

      {/*Hobbies*/}
      <section id="hobbies">
        <Container className="hobbies-container mt-5">
          <Fade right>
            <h2 className="mobile-text-center px-4 order-last">Hobbies</h2>
          </Fade>
          <div className="flex-child padding-right">
            <Fade>
              <p className="text-muted text-xLarge ">
                When I'm not working on projects, I work part time at an after-school non-for-profit program teaching STEM classes like LEGO architecture or even an intro to coding class.
                <br/>
                <br/>
                Otherwise I'm probably looking for a new hiking trail, or a new restaurant to try out.  I try to keep it balanced.  Oh yea! I also try to stay in shape by doing some break dancing.
              </p>
            </Fade>
          </div>
          <div className="flex-child">
            <Fade right>
              <Image
                className="bboy-freeze"
                src={require('../../assets/images/bboy-freeze.jpg')}
                alt="breakdancing freeze"
                fluid
                thumbnail
              />
            </Fade>
          </div>
        </Container>
      </section>
      {/*<Contact />*/}
      {/*<Footer />*/}
    </div>

  )
}

export default AboutMe;
