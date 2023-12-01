import React, { useState, useEffect } from "react";
import { SKILLS } from "../lib/data";
const skillGridMapping = {
  strong: "span 2",
  intermediate: "span 1",
};
export default function Tools() {
  const [skillImages, setSkillImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = await Promise.all(
        SKILLS.map(async (skill) => {
          const image = await import(`../assets/${skill.icon}`);
          return {
            skill: skill.name,
            image: image.default,
            strength: skill.strength,
          };
        })
      );
      setSkillImages(images);
    };

    importImages();
  }, []);

  return (
    <div className="bg-primary md:pt-16 md:pr-10 pb-10">
      <h1 className="text-left text-3xl pb-4">tools</h1>
      <div className="grid grid-cols-4 gap-1.5 md:w-96">
        {skillImages.map((item, index) => (
          <div
            key={index}
            className="bg-secondary bg-opacity-60 flex items-center justify-center px-2 py-0.5"
            style={{
              gridColumn: skillGridMapping[item.strength],
            }}
            title={item.skill}
          >
            <img
              src={item.image}
              alt={item.skill}
              className="object-contain w-auto h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
