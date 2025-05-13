import React from 'react'
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.svg
  width="26"
  height="26"
  viewBox="0 0 100 100"
  style={{ overflow: 'visible' }}
  initial={{ rotate: 0, scale: 0.6, strokeWidth: 2 }}
  animate={{
    rotate: 90,
    scale: 1,
    strokeWidth: [2, 10, 18], // Define the stroke width at different keyframes
  }}
  transition={{
    repeat: Infinity,
    repeatType: 'loop',
    duration: 1.5,
    ease: 'linear', 
  }}
>
  <g stroke="black" strokeLinecap="square">
    <line x1="50" y1="10" x2="50" y2="90" />
    <line x1="10" y1="50" x2="90" y2="50" />
    <line x1="20" y1="20" x2="80" y2="80" />
    <line x1="80" y1="20" x2="20" y2="80" />
  </g>
</motion.svg>
  )
}

export default Logo
