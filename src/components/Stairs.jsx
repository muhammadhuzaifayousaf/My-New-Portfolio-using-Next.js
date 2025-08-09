import { motion } from "framer-motion";

// Variants
const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
};

// Calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => (
    <>
        {[...Array(6)].map((_, index) => (
            <motion.div 
                key={index} 
                variants={stairAnimation} 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
            />
        ))}
    </>
);

export default Stairs;
