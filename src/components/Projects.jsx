import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 mt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col items-center gap-2 mb-16 mt-3">
        <div className="h-1 w-40 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></div>
        <div className="h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
      </div>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-8 items-center"
          >
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[45%] flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-[650px] h-[250px] md:h-[300px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[55%]"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>

                {project.links?.map((item, id) => (
                  <a
                    key={id}
                    href={item}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 font-medium hover:text-green-400"
                  >
                    Live
                  </a>
                ))}

                <span>-</span>

                <h6 className="text-lg font-semibold">
                  {project.title}
                </h6>
              </div>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;