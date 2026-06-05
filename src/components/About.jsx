import React from 'react';
import aboutImg from "../assets/pic3.jpeg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='mt-4 text-center text-4xl'>About
                <span className='text-neutral-500'> Me</span></h1>
            <div className="flex flex-col items-center gap-2 mb-16 mt-3">
                <div className="h-1 w-50 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></div>
                <div className="h-1 w-34 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
            </div>
            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;