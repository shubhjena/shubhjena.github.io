import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function SocialIcons() {
  const iconStyle = `text-4xl text-accent px-8 py-8 hover:text-primary hover:scale-125 transition-all duration-300`;

  return (
    <div className="flex flex-wrap justify-center items-center w-screen">
      <a className={iconStyle} href="mailto:shubh.jena@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
      </a>

      <a
        className={iconStyle}
        href="https://github.com/shubhjena"
        target="blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        className={iconStyle}
        href="https://www.linkedin.com/in/shubhashish-jena-b1145918b"
        target="blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        className={iconStyle}
        href="https://twitter.com/shubh_jena"
        target="blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
}
