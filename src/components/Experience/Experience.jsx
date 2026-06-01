import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const { t } = useTranslation();

    return (
        <section id="experience" className="py-24 bg-[#0d1117]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-display mb-16 text-center">
                    {t('experience.title')} <span className="text-accent">{t('experience.titleAccent')}</span>
                </h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                            <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 !== 0 ? 'md:direction-reverse' : ''}`}>
                                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                                    <div className={`inline-flex items-center space-x-2 text-accent mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                                        <Calendar size={16} />
                                        <span className="text-sm font-semibold tracking-wider">{exp.period}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className={`flex items-center space-x-2 text-primary-400 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                                        <Briefcase size={16} />
                                        <span className="font-semibold">{exp.company}</span>
                                        <span className="mx-2 opacity-50">•</span>
                                        <MapPin size={16} />
                                        <span className="text-sm">{exp.location}</span>
                                    </div>
                                </div>

                                <div className="glass-morphism p-6 rounded-2xl relative">
                                    <div className="absolute top-1/2 -left-3 md:left-auto md:right-full md:mr-3 w-6 h-6 bg-[#0d1117] border-4 border-accent rounded-full -translate-y-1/2 z-10 hidden md:block"
                                        style={{ left: index % 2 === 0 ? 'auto' : '-1.5rem', right: index % 2 === 0 ? '-1.5rem' : 'auto' }}
                                    />
                                    <p className="text-gray-400 mb-4 italic text-sm">{t(`experience.jobs.${index}.description`)}</p>
                                    <ul className="space-y-3">
                                        {t(`experience.jobs.${index}.highlights`, { returnObjects: true }).map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start space-x-3 text-sm text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
