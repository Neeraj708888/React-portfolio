import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center gap-2">
            {/* LEFT: Info */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-2 font-semibold">
                {experience?.company} -{' '}
                <span className="text-sm text-purple-100">{experience.position}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.location}</p>
              {experience.duration?.map((dur, i) => (
                <span
                  key={i}
                  className="mr-2 mt-2 inline-block rounded bg-neutral-900 px-1 py-1 text-sm font-medium text-red-800"
                >{dur.start} {dur.end}
                </span>
              ))}

                <p className='text-blue-400 hover:underline hover:text-blue-600 mt-2'><a href={experience.web_link}>{experience.short_name}</a></p>
           
            </motion.div>
            

            {/* RIGHT: Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 text-left lg:text-right"
            >

                <p key={index} className="text-sm text-neutral-400 text-start tracking-wide">{experience.description}</p>
               
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
