import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const contactMe = [
  {
    title: "Email",
    description: "Let's get in touch.",
    link: "mailto:fabricemokfembam@gmail.com",
    icon: <FaEnvelope className='text-amber-700 text-xl'/>, // Email: Brown (Amber)
  },
  {
    title: "LinkedIn",
    description: "Let's connect.",
    link: "https://www.linkedin.com/in/fabrice-mokfembam-a95347267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <FaLinkedin className='text-blue-accent-700 text-xl' />,
  },
  {
    title: "GitHub",
    description: "Check out my repos.",
    link: "https://github.com/Fabrice-Mokfembam",
    icon: <FaGithub className='text-gray-900 text-xl'/>, // GitHub: Dark (Gray)
  },
  {
    title: "WhatsApp",
    description: "Chat with me.",
    link: "https://wa.me/686009133",
    icon: <FaWhatsapp className='text-green-accent-700 text-xl'/>,
  },
];

export default contactMe;
