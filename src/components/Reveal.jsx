import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Reveal = ({ children, width = "w-fit" }) => {
  const { ref, inView } = useInView({
    once: false,
    threshold: 0.6,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);

  return (
    <div ref={ref} className={`${width} overflow-hidden relative`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div>{children}</div>
      </motion.div>
    </div>
  );
};
