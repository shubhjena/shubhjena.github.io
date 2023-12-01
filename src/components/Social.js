import React from "react";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/SocialIcons";

function Social() {
  return (
    <div className="">
      <h1 className="text-left text-3xl pb-4">socials</h1>
      <div className="text-left">
        <p>Based in India (UTC+5:30)</p>
        <a className="" href="mailto:shubh.jena@gmail.com">
          <p className="font-semibold underline underline-offset-2 text-black">
            shubh.jena@gmail.com
          </p>
        </a>
        <a className="" href="https://twitter.com/shubh_jena" target="blank">
          <p>[X] /twitter.com/shubh_jena</p>
        </a>
        <a className="" href="https://github.com/shubhjena" target="blank">
          [Github] /github.com/shubhjena
        </a>
        <a
          className="block"
          href="https://www.linkedin.com/in/shubhashish-jena-b1145918b"
          target="blank"
        >
          [LinkedIn] /www.linkedin.com/in/shubhjena
        </a>
      </div>
      {/* Social icons */}
      <div className="flex flex-wrap justify-start items-start text-2xl gap-4 md:gap-6 py-4 ">
        <EmailIcon />
        <GithubIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
}

export default Social;
