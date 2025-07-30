import React from 'react'
import { motion } from 'framer-motion'

const CandleIcon = ({ className = "w-8 h-8", color = "currentColor" }) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Llama de la vela */}
        <motion.path
          d="M12 2C12 2 10 4 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4 12 2 12 2Z"
          fill={color}
          fillOpacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
        
        {/* Mecha */}
        <motion.line
          x1="12"
          y1="8"
          x2="12"
          y2="10"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />
        
        {/* Cuerpo de la vela */}
        <motion.rect
          x="9"
          y="10"
          width="6"
          height="10"
          rx="1"
          fill={color}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ transformOrigin: 'bottom' }}
        />
        
        {/* Base de la vela */}
        <motion.ellipse
          cx="12"
          cy="20"
          rx="4"
          ry="1.5"
          fill={color}
          fillOpacity="0.6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        
        {/* Detalles decorativos en la vela */}
        <motion.line
          x1="9.5"
          y1="12"
          x2="14.5"
          y2="12"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
        <motion.line
          x1="9.5"
          y1="15"
          x2="14.5"
          y2="15"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />
        <motion.line
          x1="9.5"
          y1="18"
          x2="14.5"
          y2="18"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        />
      </svg>
    </motion.div>
  )
}

export default CandleIcon