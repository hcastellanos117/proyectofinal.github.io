import React from 'react'
import { motion } from 'framer-motion'

const ButterflyIcon = ({ className = "w-16 h-16", color = "#E3167A" }) => {
  return (
    <motion.div
      className={`${className} butterfly-animation`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cuerpo de la mariposa */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="1.5"
          ry="25"
          fill={color}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        
        {/* Ala superior izquierda */}
        <motion.path
          d="M35 35 Q25 20 15 25 Q10 30 15 40 Q25 45 35 40 Z"
          fill={color}
          fillOpacity="0.8"
          initial={{ scale: 0, originX: "50px", originY: "50px" }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        {/* Ala superior derecha */}
        <motion.path
          d="M65 35 Q75 20 85 25 Q90 30 85 40 Q75 45 65 40 Z"
          fill={color}
          fillOpacity="0.8"
          initial={{ scale: 0, originX: "50px", originY: "50px" }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Ala inferior izquierda */}
        <motion.path
          d="M40 60 Q30 70 20 65 Q15 60 20 50 Q30 55 40 55 Z"
          fill={color}
          fillOpacity="0.9"
          initial={{ scale: 0, originX: "50px", originY: "50px" }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        
        {/* Ala inferior derecha */}
        <motion.path
          d="M60 60 Q70 70 80 65 Q85 60 80 50 Q70 55 60 55 Z"
          fill={color}
          fillOpacity="0.9"
          initial={{ scale: 0, originX: "50px", originY: "50px" }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        
        {/* Antenas */}
        <motion.path
          d="M48 25 Q45 15 42 12 M52 25 Q55 15 58 12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
        
        {/* Puntos decorativos en las alas */}
        <motion.circle
          cx="25"
          cy="32"
          r="2"
          fill="white"
          fillOpacity="0.7"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
        />
        <motion.circle
          cx="75"
          cy="32"
          r="2"
          fill="white"
          fillOpacity="0.7"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
      </svg>
    </motion.div>
  )
}

export default ButterflyIcon