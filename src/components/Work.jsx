import { Github, ExternalLink, Clock } from "lucide-react";
import { _3dWebsite, alumconnect, ecoomerce, eventapp, imageeditor, portfoliogen, railwayconcession } from "../assets/index.js";

const Work = () => {
  const projects = [
    {
      title: "AlumConnect",
      description:
        "AlumConnect is a MERN-stack based alumni networking platform that facilitates seamless interaction between alumni and students. It features user authentication, profile management, real-time messaging, and cloud-based media handling, ensuring a scalable and engaging community experience.",
      image: alumconnect,
      tech: ["MERN", "Socket.io", "Cloudinary"],
      github: "",
      demo: "",
      status: false,
    },
    {
      title: "3D Website",
      description:
        "A Dogstudio-inspired 3D web experience developed with React, Three.js, React Three Fiber, and GSAP ScrollTrigger. Implements scroll-linked animations, camera transitions, and interactive 3D elements while maintaining responsiveness and performance.",
      image: _3dWebsite,
      tech: ["React", "Three.js", "GSAP", "Tailwind"],
      github: "https://github.com/NikhilNamade/threejsdog.git",
      demo: "https://threejsdog.vercel.app/",
      status: true,
    },
    {
      title: "Railway Concession System",
      description:
        "The Railway Concession System is a web-based application that digitizes the student railway concession process by enabling online applications, verification, and approval, reducing paperwork and improving efficiency.",
      image: railwayconcession,
      tech: ["ReactJS","NodeJS","ExpressJS","MongoDB","Cloudinary"],
      github: "https://github.com/NikhilNamade/railway.git",
      demo: "https://railway-concession-system.onrender.com/",
      status: true,
    },
    {
      title: "Portfolio Geng.",
      description:
        "A dynamic portfolio generator built with modern web technologies that transforms user input into a responsive, template-based portfolio. Features include real-time preview, reusable components, and customizable sections for projects, skills, and experience.",
      image: portfoliogen,
      tech: ["ReactJS","NodeJS","ExpressJS","MongoDB","Cloudinary"],
      github: "https://github.com/NikhilNamade/portfolio-generator.git",
      demo: "https://portfolio-generator-lemon-three.vercel.app/",
      status: true,
    },
    {
      title: "VisualFix",
      description:
        "A modern color grading web application developed using HTML5 Canvas API. The project focuses on real-time color manipulation, smooth UI interactions, and accurate image rendering to deliver professional-grade color adjustment tools in the browser.",
      image: imageeditor,
      tech: ["HTML5","TailwindCss","JavaScript","Canvas-API"],
      github: "https://github.com/NikhilNamade/imageEditor.git",
      demo: "https://image-editor-roan-psi.vercel.app/",
      status: true,
    },
    {
      title: "Sort My Events",
      description:
        "A cross-platform Flutter application with a Go backend implementing RESTful APIs for event CRUD operations, user registration, and organizer interaction. Features include user-organizer follow system, event registration, organizer stories, and map-based event discovery using location services. The app leverages Flutter for UI, Go for performant backend services, and integrates real-time updates for interactive event management.",
      image: eventapp,
      tech: ["Flutter","Go","REST API","Maps SDK"],
      github: "https://github.com/NikhilNamade/gorestapi.git",
      demo: "",
      status: true,
    },
    {
      title: "Shop Your Choice",
      description:
        "A full-stack e-commerce platform with a responsive website and Flutter mobile app. Users can browse products, manage carts, checkout, and track orders. The admin panel allows management of products, orders, users, and analytics, while the backend handles all CRUD operations via REST APIs.",
      image: ecoomerce,
      tech: ["ReactJS","NodeJS","ExpressJS","MongoDB","Cloudinary","Flutter"],
      github: "https://github.com/NikhilNamade/gorestapi.git",
      demo: "",
      status: false,
    },
  ];

  return (
    <div className="w-full bg-[#020617] flex flex-col items-center px-6 py-20 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Work</h2>

      {/* Grid container for responsiveness */}
      <div className="grid gap-8 w-full
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#0b1220] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />

        {/* In Progress Badge */}
        {!project.status && (
          <div className="absolute top-3 right-3 bg-yellow-500/90 text-black text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <Clock size={14} />
            In Progress
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-[#1e293b] text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4">
          {project.status ? (
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          ) : (
            <p className="text-sm text-yellow-400 font-medium">
              🚧 Project is currently in progress
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
