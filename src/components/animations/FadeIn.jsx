import { motion } from "framer-motion";
import useInViewOnce from "../../hooks/useInViewOnce";
import { fadeInUp } from "./motionPresets";

export default function FadeIn({ children, className = "" }) {
  const { ref, seen } = useInViewOnce();
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      animate={seen ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
