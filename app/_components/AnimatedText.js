'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedText({
  text = 'Default Text',
  className = '',
  wordSpacing = '0.25em',
  characterSpacing = '0.05em',
  animationConfig = {
    staggerChildren: 0.08,
    delayChildren: 0.03,
    damping: 12,
    stiffness: 100,
    type: 'spring',
  },
  animateOnce = true,
  delay = 0,
  as: Component = 'div',
  splitBy = 'words', // 'words' or 'characters'
  textStyle = {}, // Additional text styles
  onAnimationComplete = () => {},
}) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const elements = splitBy === 'words' ? text.split(' ') : text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animationConfig.staggerChildren,
        delayChildren: animationConfig.delayChildren + delay,
      },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: animationConfig.type,
        damping: animationConfig.damping,
        stiffness: animationConfig.stiffness,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: splitBy === 'characters' ? 10 : 0,
    },
  }

  useEffect(() => {
    if (animateOnce && hasAnimated) {
      return
    }
    setHasAnimated(true)
  }, [animateOnce, hasAnimated])

  const MotionComponent = motion(Component)

  return (
    <MotionComponent
      className={`flex flex-wrap justify-center ${className}`}
      variants={container}
      initial={animateOnce && hasAnimated ? 'visible' : 'hidden'}
      animate="visible"
      viewport={{ once: animateOnce }}
      onAnimationComplete={onAnimationComplete}
      aria-label={text}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            marginRight: splitBy === 'words' ? wordSpacing : characterSpacing,
            whiteSpace: splitBy === 'words' ? 'normal' : 'nowrap',
            display: 'inline-block',
            ...textStyle,
          }}
          aria-hidden={true}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </MotionComponent>
  )
}
