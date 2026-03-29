import React from 'react';
import { motion } from 'framer-motion';

const BackgroundDecor = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Moving Orb 1 */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -150, 50, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary-600/10 rounded-full blur-[120px]"
            />

            {/* Moving Orb 2 */}
            <motion.div
                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 100, -100, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-accent/10 rounded-full blur-[120px]"
            />

            {/* Static grid-like mesh pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};

export default BackgroundDecor;
