import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">Alaa Bedoui</h1>
        <div className="subheading mb-5">FullStack Developer</div>
        <p className="lead mb-5">
          I am experienced in building product websites, hybrid mobile
          applications, and backend development. My previous experience of
          working in large product-based companies as well as emerging startups
          will surely help in product development for companies at various
          stages.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/alaa-bedoui-64386a268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className="social-icon"
            href="https://github.com/Alaa-bedoui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
}
