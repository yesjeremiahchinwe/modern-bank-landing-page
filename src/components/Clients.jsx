import { useRef } from "react";
import { clients } from "../constants";
import styles from "../style";
import { motion } from "motion/react"

const Clients = () => {
  const scrollRef = useRef(null)

  return (
    <section ref={scrollRef} className={`${styles.flexCenter} my-5`}>
      <motion.div 
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      viewport={{ root: scrollRef, once: true }}
      className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Clients;
