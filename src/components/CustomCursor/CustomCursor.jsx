import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setCursorVariant("pointer");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "transparent",
            border: "2px solid rgba(244, 63, 94, 0.5)"
        },
        pointer: {
            height: 64,
            width: 64,
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            backgroundColor: "rgba(244, 63, 94, 0.1)",
            border: "1px solid rgba(244, 63, 94, 0.8)"
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden lg:block"
                variants={variants}
                animate={cursorVariant}
                transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[10000] hidden lg:block"
                animate={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3
                }}
                transition={{ type: "spring", damping: 30, stiffness: 500, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
