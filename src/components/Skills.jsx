import React from "react";
import BallCanvas from "../pages/Ball";
import {
  css,
  flutter,
  github,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
} from "../assets";

const Skills = () => {
  const tech = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: reactjs },
    { name: "Node", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Redux", icon: redux },
    { name: "Tailwind", icon: tailwind },
    { name: "ThreeJS", icon: threejs },
    { name: "GitHub", icon: github },
    { name: "Flutter", icon: flutter },
  ];

  return (
    <section className="w-full bg-[#020617] text-white flex flex-col items-center px-4 sm:px-6 py-16 sm:py-20 rounded-lg">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center">
        Skills & Technologies
      </h1>

      {/* Skills Grid */}
      <div
        className="
          w-full
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
          sm:gap-8
          md:gap-10
          place-items-center
        "
      >
        {tech.map((techno, index) => (
          <div
            key={index}
            className="
              group
              relative
              w-24 h-24
              sm:w-28 sm:h-28
              md:w-32 md:h-32
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:shadow-cyan-500/30
            "
          >
            {/* Canvas */}
            <div className="w-full h-full">
              <BallCanvas icon={techno.icon} />
            </div>

            {/* Label */}
            <p className="absolute -bottom-6 sm:-bottom-7 w-full text-center text-xs sm:text-sm text-white/80 opacity-0 group-hover:opacity-100 transition">
              {techno.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
