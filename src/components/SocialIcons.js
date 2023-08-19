import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const iconStyle = `text-3xl md:text-4xl text-accent px-4 md:px-6 lg:px-8 py-8 hover:text-primary hover:scale-125 transition-all duration-300`;

export function EmailIcon() {
  return (
    <a className={iconStyle} href="mailto:shubh.jena@gmail.com">
      <FontAwesomeIcon icon={faEnvelopeOpenText} />
    </a>
  );
}

export function GithubIcon() {
  return (
    <a className={iconStyle} href="https://github.com/shubhjena" target="blank">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  );
}

export function LinkedinIcon() {
  return (
    <a
      className={iconStyle}
      href="https://www.linkedin.com/in/shubhashish-jena-b1145918b"
      target="blank"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  );
}

export function TwitterIcon() {
  return (
    <a
      className={iconStyle}
      href="https://twitter.com/shubh_jena"
      target="blank"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  );
}
