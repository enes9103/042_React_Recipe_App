import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Enes ÜNLÜ </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Enes ÜNLÜ</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, JQuery, MongoDB,SQL,
          Python, Django.
        </h4>
        <h2>
          <a href="mailto:enes9103@gmail.com">Send email</a> :
          enes9103@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;