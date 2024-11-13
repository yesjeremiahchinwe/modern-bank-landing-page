import { useRef } from "react";
import styles from "../style";
import Button from "./Button";
import { motion } from "motion/react"

const CTA = () => {
  const scrollRef = useRef(null)

  return (
    <section 
    ref={scrollRef} 
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <motion.div 
    initial={{ opacity: 0, y: "100px" }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "linear" }}
    viewport={{ root: scrollRef, once: true }}

    className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let&apos;s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </motion.div>

    <motion.div 
    initial={{ opacity: 0, y: "100px" }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "linear" }}
    viewport={{ root: scrollRef, once: true }}
    className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </motion.div>
  </section>
  )
}

export default CTA;
