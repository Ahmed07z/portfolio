import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedIcon.css';

const AnimatedIcon = ({ isOpen, toggle }) => {
  return (
    <div className="icon-container" onClick={toggle}>
      <motion.div
        className="line"
        initial={false}
        animate={isOpen ? { rotate: 50, y: 10 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="line"
        initial={false}
        animate={isOpen ? { rotate: -50, y: 10 } : { rotate: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default AnimatedIcon;
