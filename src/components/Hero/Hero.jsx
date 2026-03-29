import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data';
import { Github, Linkedin, MousePointer2 } from 'lucide-react';
import Magnetic from '../Magnetic/Magnetic';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-accent font-semibold tracking-widest mb-4">HELLO, I'M</h2>
                    <h1 className="text-6xl md:text-8xl font-bold font-display mb-6 tracking-tight">
                        {portfolioData.name.split(' ')[0]} <br />
                        <span className="text-gradient">{portfolioData.name.split(' ')[1]}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {portfolioData.title} crafting high-performance
                        <span className="text-white"> Web & Mobile </span>
                        experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mb-12"
                >
                    <div className="flex space-x-6">
                        <Magnetic>
                            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 block">
                                <Github size={24} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 block">
                                <Linkedin size={24} />
                            </a>
                        </Magnetic>
                    </div>
                    <Magnetic>
                        <motion.a
                            href="/AYKHAN-HASANZADA.CV.pdf"
                            download="AYKHAN-HASANZADA.CV.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-accent/20 flex items-center space-x-2 cursor-pointer"
                        >
                            <span>Download CV</span>
                        </motion.a>
                    </Magnetic>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-16"
                >
                    {['React', 'Vue', 'React Native', 'Laravel', 'Java', 'PostgreSQL'].map((tech) => (
                        <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 backdrop-blur-sm">
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center text-gray-500 text-sm mt-8"
                >
                    <MousePointer2 size={20} className="mb-2" />
                    <span>Scroll to explore</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
