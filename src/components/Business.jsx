import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "motion/react"
import { useRef } from "react"

const FeatureCard = ({ icon, title, content, index, scrollRef }) => (
  <motion.div 
  initial={{ opacity: 0, y: "100px" }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: (0 + index) - 0.5, ease: "linear" }}
  viewport={{ root: scrollRef, once: true }}
  className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () =>  {
  const scrollRef = useRef(null)

  return (
    <section 
    id="features" 
    className={layout.section}
    ref={scrollRef}
    >
      <motion.div 
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        viewport={{ root: scrollRef, once: true }}

      className={`${layout.sectionInfo} `}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we&apos;ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
  
        <Button styles={`mt-10`} />
      </motion.div>
  
      <div
      className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} scrollRef={scrollRef} />
        ))}
      </div>
    </section>
  );
}

export default Business;
