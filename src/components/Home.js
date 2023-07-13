import React from "react";

export default function Home() {
  console.log("Home");
  return (
    <div
      className="bg-secondary h-screen w-screen flex justify-center  pt-48"
      id="home"
    >
      <div className="p-5 max-w-3xl text-xl font-light text-justify">
        <p>
          I'm a passionate software developer based in Hyderabad, India, with a
          strong academic background as a postgraduate from IIT Madras. My deep
          interest in engineering and technology drives me to constantly learn
          and stay at the forefront of the ever-evolving software development
          landscape.
        </p>
        <br />
        <p>
          Through this website, I aim to share my journey and expertise in
          software development. Whether it's building innovative solutions or
          tackling complex problems, I strive for excellence in every project I
          undertake. I firmly believe that technology has the power to transform
          lives, and I am dedicated to leveraging my skills to make a positive
          impact.
        </p>
      </div>
    </div>
  );
}
