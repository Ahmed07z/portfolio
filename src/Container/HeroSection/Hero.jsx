import React from "react";
import "./hero.css";
import { delay, motion } from "framer-motion";
import Contactus from "../../Components/ContactButton/Contactus";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials Section/Testimonials";
const Hero = () => {
  return (
    <>
    <div className="introduction_section" id="hero">
      <div className="intro_text">
      <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{
            duration:1,
            delay:0
          }}
        
          className="intro_paragraph"
        > Welcome, I'm
       </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
           Ahmed Hassan
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          >
          Software Enginner & Digital Craftsman
       
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration:1,
            delay:1.1
          }}
          className="intro_paragraph"
          >
          Embarking on a journey to transform ideas into digital marvels. With a
          keen eye for detail and a passion for innovation, I specialize in
          crafting bespoke digital solutions that captivate, engage, and elevate
          user experiences.
        </motion.p>
      <Contactus/>
      </div>
      <motion.div className="portfolioImage">
        <motion.img
          src="circularphoto.png"
          alt="Ahmed Hassan's Photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5, // Increase the duration to slow down the animation
            delay: 2,
          }}
        />
      </motion.div>
    
    </div>
    <About/>
    <Skills/>
    <Testimonials/>
          </>
  );
};

export default Hero;
