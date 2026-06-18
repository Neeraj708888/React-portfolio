import React from "react";
//import { DiRedis } from 'react-icons/di';
import { FaCss3, FaHtml5, FaNodeJs, FaPhp } from "react-icons/fa";
import { RiJavascriptLine, RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiSocketdotio, SiSupabase } from "react-icons/si";
import { motion } from "framer-motion";
import { DiMailchimp, DiPostgresql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

const iconVarients = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeattype: "mirror",
    },
  },
});

const technologies = [
  { icon: <RiJavascriptLine className="text-7xl text-[#F0DB4F]" />, name: "JavaScript", duration: 4 },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node JS", duration: 5 },
  { icon: <SiExpress className="text-7xl text-purple-500" />, name: "Express JS", duration: 6 },
  { icon: <RiNextjsFill className="text-7xl text-purple-500" />, name: "Next JS", duration: 7 },
  { icon: <RiReactjsLine className="text-7xl text-blue-500" />, name: "React JS", duration: 8 },
  { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB", duration: 7 },
  { icon: <SiMysql className="text-7xl text-gray-400" />, name: "MySQL", duration: 6 },
  { icon: <FaHtml5 className="text-7xl text-red-500" />, name: "HTML5", duration: 5 },
  { icon: <FaCss3 className="text-7xl text-[#264DE4]" />, name: "CSS3", duration: 7 },
  { icon: <SiSupabase className="text-7xl text-green-600" />, name: "Supabase DB", duration: 4 },
  { icon: <FaPhp className="text-7xl text-blue-600" />, name: "PHP", duration: 8 },
  { icon: <SiSocketdotio className="text-7xl text-orange-600" />, name: "Socket.io", duration: 8 },
  { icon: <DiMailchimp className="text-7xl text-[#FFD14F]" />, name: "Mail Chimp", duration: 8 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 mt-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}

        className="text-center text-4xl">Technologies</motion.h1>

      <div className="flex flex-col items-center gap-2 mb-16 mt-3">
        <div className="h-1 w-52 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></div>
        <div className="h-1 w-36 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap  items-center justify-center gap-4">


        {technologies.map((tech, index) => (

          < motion.div
            key={index}
            variants={iconVarients(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
            <p className="mt-2 text-lg font-semibold text-white">{tech.name}</p>

          </motion.div>
        ))}
      </motion.div>
    </div >
  );
};

export default Technologies;
