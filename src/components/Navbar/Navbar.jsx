import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { motion } from 'framer-motion';
import Magnetic from '../Magnetic/Magnetic';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold font-display tracking-wider"
                >
                    <span className="text-white">AYKHAN</span>
                    <span className="text-accent">.</span>
                </motion.div>

                <div className="hidden md:flex space-x-8">
                    {['About', 'Skills', 'Experience', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                <Magnetic>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-accent/20"
                    >
                        Hire Me
                    </motion.button>
                </Magnetic>
            </div>
        </nav>
    );
};

export default Navbar;
