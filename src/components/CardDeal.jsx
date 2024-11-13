import { useRef } from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "motion/react"

const CardDeal = () => {
  const scrollRef = useRef(null)

  return (
    <section ref={scrollRef} className={layout.section}>
      <motion.div 
       initial={{ opacity: 0, x: "-100%" }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, ease: "linear" }}
       viewport={{ root: scrollRef, once: true }}
      className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
  
        <Button styles={`mt-10`} />
      </motion.div>
  
      <motion.div 
       initial={{ opacity: 0, x: "100%" }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, ease: "linear" }}
       viewport={{ root: scrollRef, once: true }}
      className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </motion.div>
    </section>
  );
}

export default CardDeal;
