import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-4 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="flex flex-col items-center gap-2 mb-16 mt-3">
        <div className="h-1 w-60 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></div>
        <div className="h-1 w-40 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
      </div>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b text-blue-500 hover:text-blue-400"
        >
          {CONTACT.email}
        </motion.a>

        {/* Policy Section */}
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500"
        >
          {CONTACT.policy}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;