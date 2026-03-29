import React from 'react';
import { portfolioData } from '../../data';

const Footer = () => {
    return (
        <footer className="py-12 bg-[#0d1117] border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center text-center md:text-left">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold font-display text-white mb-2">
                        AYKHAN HASANZADA<span className="text-accent">.</span>
                    </h3>
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex space-x-8 text-sm text-gray-400">
                    <a href="#about" className="hover:text-accent transition-colors">About</a>
                    <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
                    <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
