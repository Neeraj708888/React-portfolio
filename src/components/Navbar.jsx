import React from 'react'
import logo from '../assets/logo.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex-shrink-0 items-center'>
            <img className='mx-2 w-10 rounded-2xl' src={logo} alt="logo"  />
        </div>
        <div className='m-8 flex items-center justify-between gap-4 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/neeraj-kumar-9007ba258" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
        <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Neeraj708888" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        > 
        <FaGithub/>
        </a>
          <a 
          href="https://wa.me/7088887210" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Whatsapp"
        >
        <FaWhatsapp/>
        </a>
        <a 
          href="https://www.instagram.com/java_scriptcoder?igsh=MTI2ZnAyemVzdjk5ZA==" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
        >
        <FaInstagram/>
        </a>
        <a 
          href="https://www.facebook.com/neeraj.s.atbareilly?mibextid=ZbWKwL" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook"
        >
        <FaFacebook />
        </a>
        </div>
    </nav>
  )
}
export default Navbar;

// Linkidin: www.linkedin.com/in/neeraj-kumar-9007ba258
// gitHub: https://github.com/Neeraj708888
// replit:  https://replit.com/@Neeraj-8888
// whatsapp:  +91 7088887210