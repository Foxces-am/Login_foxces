import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
};
