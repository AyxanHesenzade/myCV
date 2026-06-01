import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-12 bg-[#0d1117] border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center text-center md:text-left">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold font-display text-white mb-2">
                        AYKHAN HASANZADA<span className="text-accent">.</span>
                    </h3>
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} {t('footer.rights')}</p>
                </div>

                <div className="flex space-x-8 text-sm text-gray-400">
                    <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
                    <a href="#skills" className="hover:text-accent transition-colors">{t('nav.skills')}</a>
                    <a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a>
                    <a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
