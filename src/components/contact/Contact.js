import React from 'react';
import Fade from 'react-awesome-reveal';
import './Contact.css';
import {Container} from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <Fade>
        <div>
          <h2 className="heading mt-4">Reach out!</h2>
        </div>

        <Container>
          <div className="form-container">
            <form className=" flex-child" action="https://formspree.io/f/mvolgdao" method="POST">
              <label className="lbl-name" htmlFor="user-name">Name:</label>
              <input type="text" id="user-name" name="name" placeholder="full name" required/>

              <label htmlFor="user-email">Email:</label>
              <input id="user-email" type="email" name="email" placeholder="example@email.com" required/>

              <label htmlFor="user-message">Message:</label>
              <textarea id="user-message" name="message" placeholder="How can I help you?" required></textarea>
              <button type="submit">Submit</button>
            </form>

            <div className="map flex-child">
              <iframe
                className="google-map"
                title="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.7159859942!2d-88.01214778988322!3d41.83339250495681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1598056524598!5m2!1sen!2sus"
              >
              </iframe>
            </div>
          </div>
        </Container>
      </Fade>
    </div>
  );
}

export default Contact;
