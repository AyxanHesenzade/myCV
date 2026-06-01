import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Magnetic from '../Magnetic/Magnetic';

const LANGS = [
    { code: 'en', label: 'EN' },
    { code: 'az', label: 'AZ' },
    { code: 'ru', label: 'RU' },
];

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'about', label: t('nav.about') },
        { key: 'skills', label: t('nav.skills') },
        { key: 'experience', label: t('nav.experience') },
        { key: 'contact', label: t('nav.contact') },
    ];

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
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.key}
                            href={`#${item.key}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>

                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                        {LANGS.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => i18n.changeLanguage(lang.code)}
                                className={`px-2 py-1 rounded-lg text-xs font-bold tracking-wider transition-all ${
                                    i18n.language === lang.code
                                        ? 'bg-accent text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                    <Magnetic>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-accent/20"
                        >
                            {t('nav.hireMe')}
                        </motion.a>
                    </Magnetic>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
