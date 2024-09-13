import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

const Reveal = ({ children, width = "fit-content", delay = 0.25, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, height: '100%' }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.75,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

