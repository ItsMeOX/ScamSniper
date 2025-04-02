import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HoverImageWithTransition = ({ src, width, height, alt, targetRoute, left, top }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    // Prevent retriggering if the transition is already in progress
    if (isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push(targetRoute); // Navigate to the target route after the animation
      }, 1200); // Wait for the animation to finish before redirecting
    }, 1000); // 1-second delay before starting the transition

    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if the user leaves before the delay
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    // If the hover time isn't exceeded, reset immediately without transition
    if (!isTransitioning) {
      setIsTransitioning(false);
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute fade_mask"
        animate={isTransitioning ? { scale: 50, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: isTransitioning ? 1.5 : 0, ease: "easeInOut" }} // 0 duration on early leave
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          left: `${left}px`,
          top: `${top}px`,
        }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      </motion.div>

      {/* Overlay to simulate page transition (optional visual effect) */}
      {isTransitioning && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
    </div>
  );
};

export default HoverImageWithTransition;
