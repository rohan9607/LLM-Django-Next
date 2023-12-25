"use client"
import {motion} from "framer-motion";
import { ReactElement } from "react";

type Props = {
  children : ReactElement
  className : string
}

export default function ScrollAnimationWrapper({children, className} : Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}