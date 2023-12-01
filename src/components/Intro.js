import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavHashLink } from "react-router-hash-link";
export default function Intro() {
  const customFontStyle = {
    fontFamily: "Bungee shade",
  };

  return (
    <div className="flex justify-start pt-16 md:pt-2 md:ml-20 md:mt-16 w-screen md:w-3/5">
      <div className=" pl-4">
        <div className="flex flex-col text-center">
          <NavHashLink smooth to={`#home`}>
            <span
              className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-wider select-none cursor-pointer"
              style={customFontStyle}
            >
              Shubhashish
            </span>
          </NavHashLink>
          <NavHashLink smooth to={`#home`}>
            <span
              className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-wider select-none cursor-pointer"
              style={customFontStyle}
            >
              Jena
            </span>
          </NavHashLink>
          <span className="pl-1 md:mt-1 text-base font-normal font-sans mr-auto tracking-wider hover:bg-tertiary hover:text-white transform duration-200 select-none">
            <a href="https://www.linkedin.com/in/shubhjena" target="blank">
              <FontAwesomeIcon icon={faLinkedin} /> shubhjena
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-5 text-right pt-8">
          {/* to be populated */}
        </div>
      </div>
    </div>
  );
}
