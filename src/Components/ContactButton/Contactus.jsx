import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './contactbutton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
const Contactus = () => {


  return (
    <motion.button  initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration:1,
      delay:1.1
    }} className='grow_button'>Grow With Us <FontAwesomeIcon style={{marginLeft:'15px'}} icon={faArrowCircleRight}/></motion.button>
  )
}

export default Contactus