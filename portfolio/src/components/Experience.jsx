export default function Experience() {
  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Instructor</h3>
              <div className="subheading mb-3">RebootKamp Tunisia</div>
              <p>
                I worked closely with aspiring web and mobile developers,
                guiding them through a comprehensive curriculum to equip them
                with the skills needed to succeed in the industry.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">April 2023 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Cohort Lead</h3>
              <div className="subheading mb-3">RebootKamp Tunisia</div>
              <p>
                Migrated old food ordering website to newer version using React
                framework. Helped in building hybrid mobile applications using
                React Native. Coordinated with design team and product owners
                for inclusion of various features in order to improve brand
                reach across various platforms.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">June 2024 - Present</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
