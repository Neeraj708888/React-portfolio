import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20  text-center  text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 "
            >
              <img
                src={project.image}
                alt={project.title}
                height={150}
                width={150}
                className="mb-6  rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >

              <div className="flex gap-2">
                <span className="relative flex h-3 w-3 py-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                {project.links.map((item, id) => (
                  <a 
                  key={id}
                  href={item  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-medium"
                >
                  Live
                </a>
                ))}{"-"}
                
                <h6 className="mb-2 font-semibold">{project.title}</h6>
              </div>

              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            {/* <div className="flex flex-col ">
              <div className="flex gap-2">
                <span className="relative flex h-3 w-3 py-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-medium"
                >
                  Online
                </a>
              </div>
              <div className="flex gap-2">
                <span className="relative flex h-3 w-3 py-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-medium"
                >
                  Project Gallery
                </a>
              </div>
              <div className="flex gap-2">
                <span className="relative flex h-3 w-3 py-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-medium"
                >
                  Project Video
                </a>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;