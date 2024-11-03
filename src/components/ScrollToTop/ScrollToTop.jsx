import { useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { scrollToTop } from "src/utils/common";
import Image from "next/image";
import ScrollIcon from "public/images/arrow-circle-up.png";

const ScrollToTopContainerVariants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("show");
      }
    });
  });

  return (
    <motion.button
      className="fixed bottom-0 right-0 p-10"
      variants={ScrollToTopContainerVariants}
      initial="show"
      animate={controls}
      onClick={scrollToTop}
    >
      <div className="p-2 w-10 h-10 rounded-lg shadow-lg animate-bounce bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </motion.button>
  );
}

export default ScrollToTopButton;
