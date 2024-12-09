import React from "react";
import "./skills.css"
export default function Skills() {
  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">FrontEnd</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item skill-item">
              <i className="fab fa-react" /> React/React Native,     
            </li>
            <li className="list-inline-item skill-item">
              <i className="fas fa-feather-alt" /> TailWind, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fab fa-html5" /> HTML, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fab fa-css3-alt" /> CSS, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fas fa-code" /> Socket.IO
            </li>
            <li className="list-inline-item skill-item">
              <i className="fab fa-bootstrap" /> BootStrap, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fab fa-uikit" /> Material UI
            </li>
          </ul>
          <div className="subheading mb-3">Database</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item skill-item">
              <i className="fas fa-database" /> MySQL, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fas fa-leaf" /> MongoDB, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fas fa-project-diagram" /> ORM
            </li>
          </ul>
          <div className="subheading mb-3">BackEnd</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item skill-item">
              <i className="fas fa-envelope" /> Nodemailer, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fab fa-node-js" /> Node.js, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fas fa-code" /> Socket.IO, 
            </li>
            <li className="list-inline-item skill-item">
              <i className="fab fa-js" /> Express.js
            </li>
          </ul>
          
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
