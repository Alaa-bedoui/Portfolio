import React from "react";

export default function Education() {
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Baccalaureate</h3>
              <div className="subheading mb-3">High School</div>
              <p>Specialized in Mathematics</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">2019 - 2020</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5"></div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                Full-Stack JavaScript Web/Mobile Developer Certification
              </h3>
              <div className="subheading mb-3">RBK RebootKamp</div>
              <p>Specialization in Web and Mobile Development</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">2022 - 2023</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
