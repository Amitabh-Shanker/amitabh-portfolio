import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amitabh Shanker </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently pursuing a Computer Science and Engineering degree at BMS Institute of Technology. As a passionate CSE student, I am constantly fascinated by the ever-evolving world of technology and its transformative impact on our lives. 
            <br />
            I specialize in full-stack development as a MERN stack developer, with a strong foundation in C++ programming. My technical expertise and problem-solving mindset empower me to build robust, scalable, and innovative solutions..
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amitabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
