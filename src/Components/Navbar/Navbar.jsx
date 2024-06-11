import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faBook,
  faContactCard,
  faHome,
  faPhone,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { faInstitution } from "@fortawesome/free-solid-svg-icons/faInstitution";
import AnimatedIcon from "./AnimatedIcon"; // Import the new AnimatedIcon component
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion components

const Navbar = () => {
  const [shownavbar, setshownavbar] = useState(true);
  const [mobilenavbarview, setMobilenavbarview] = useState(false);

  const toggleNavbar = () => {
    setshownavbar(!shownavbar);
  };

  const toggleMobileNavbar = () => {
    setMobilenavbarview(!mobilenavbarview);
  };

  return (
    <div className="navbar_section">
    
        <AnimatePresence>
          {shownavbar && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="navbar"
            >
              <div>
                <img src="A.png" alt="Logo" />
              </div>
              <ul className="navbar_list">
                <li>
                  <a smooth href="/">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </a>
                </li>
                <li>
                  <HashLink smooth to="/#about">
                    <FontAwesomeIcon icon={faBook} /> About
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#skills">
                    <FontAwesomeIcon icon={faInstitution} /> Skills
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#testimonial">
                    <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                  </HashLink>
                </li>
                <li>
                  <Link to="/contact">
                    <FontAwesomeIcon icon={faContactCard} /> Contact
                  </Link>
                </li>
                <li>
                  <button style={{ color: "white" }} title="Contact WhatsApp">
                    <FontAwesomeIcon icon={faPhone} /> WhatsApp
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      <div className="shownavbar" onClick={toggleNavbar}>
        <AnimatedIcon isOpen={shownavbar} toggle={toggleNavbar} />
      </div>
     


      <div className="mobile_navbar">
        <div>
          <img src="A.png" alt="Logo" />
        </div>
        <div className="mobilenavbar_button" onClick={toggleMobileNavbar}>
          <AnimatedIcon isOpen={mobilenavbarview} toggle={toggleMobileNavbar} />
        </div>
        <AnimatePresence>
          {mobilenavbarview && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="mobilenavbar_content"
            >
              <ul className="mobilenavbar_list">
                <li>
                  <a smooth href="/">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </a>
                </li>
                <li>
                  <HashLink
                    onClick={() => setMobilenavbarview(false)}
                    smooth
                    to="/#about"
                  >
                    <FontAwesomeIcon icon={faBook} /> About
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    onClick={() => setMobilenavbarview(false)}
                    smooth
                    to="/#skills"
                  >
                    <FontAwesomeIcon icon={faInstitution} /> Skills
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    onClick={() => setMobilenavbarview(false)}
                    smooth
                    to="/#testimonial"
                  >
                    <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                  </HashLink>
                </li>
                <li>
                  <Link to="/contact">
                    <FontAwesomeIcon icon={faContactCard} /> Contact
                  </Link>
                </li>
                <li>
                  <button style={{ color: "white" }} title="Contact WhatsApp">
                    <FontAwesomeIcon icon={faPhone} /> WhatsApp
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
