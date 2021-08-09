import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <span className="info-name">About, Myself Shahzaib</span><br />I am a passionate self taught MERN Stack developer and a competitive programmer. I am currently a final year computer science student pursuing Bachelor of Computer Science at Sir Syed University Of Engineering and Technology, Karachi.<br />
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/pp.png").default}
            className="picture" style={{borderRadius: '50%'}}
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
