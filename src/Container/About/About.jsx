import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about-me" id="about">
      <div className="about_me_content">
        <h1>About Me</h1>
        <p>
          Ahmed here! I'm a skilled software engineer, specializing in{" "}
          <span className="about_span" style={{color:'#6cdbff',fontWeight:'bold'}}>React.js web development and WordPress customization</span>.
          My focus is on creating responsive interfaces and integrating chatbots
          to enhance user experiences. I hold a degree in Software Engineering
          from the University of Management & Technology, and I have a proven
          track record of delivering high-quality projects that exceed client
          expectations.
        </p>
      </div>
      <div className="about_image">
        <div className="image_border">
          <img src="aboutmeImage.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
