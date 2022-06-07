import React from "react";
import {SocialIcon} from "react-social-icons";
import './Footer.css';
import {Fade} from "react-awesome-reveal";

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <Fade right>
          <SocialIcon
            className="lft-margin"
            url="https://www.linkedin.com/in/rickmaya/"
            bgColor="#5F9EA0"
            style={{
              height: 40,
              width: 40
            }}
          />
          <SocialIcon
            className="lft-margin"
            url="https://github.com/rickstylz01"
            bgColor="#5F9EA0"
            style={{
              height: 40,
              width: 40
            }}
          />
          <SocialIcon
            className="lft-margin"
            url="https://twitter.com/waves_ride"
            bgColor="#5F9EA0"
            style={{
              height: 40,
              width: 40
            }}
          />
        </Fade>
      </footer>
    </div>
  )
}

export default Footer;
