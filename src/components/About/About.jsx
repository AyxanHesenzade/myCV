import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';
import { Code2, Smartphone, Database, Zap, GraduationCap, Languages } from 'lucide-react';

const icons = [Code2, Smartphone, Database];

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 bg-[#0d1117] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass-morphism p-3 relative z-10">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-600/20 to-accent/20 flex items-center justify-center border border-white/5">
                                <span className="text-8xl font-bold text-gradient opacity-40 italic">AH</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 glass-morphism p-8 rounded-3xl border-l-4 border-l-accent z-20 shadow-2xl">
                            <h4 className="text-4xl font-bold text-white leading-none">2+</h4>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-bold">Years Experience</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-2 text-accent mb-4">
                            <Zap size={18} />
                            <span className="text-sm font-bold uppercase tracking-widest">{t('about.tag')}</span>
                        </div>
                        <h2 className="text-5xl font-bold font-display mb-8">
                            {t('about.title')} <br /><span className="text-gradient">{t('about.titleAccent')}</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            {t('about.profile')}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {portfolioData.stats.map((stat, index) => {
                                const labelKeys = ['stats.projects', 'stats.hours', 'stats.clients', 'stats.technologies'];
                                return (
                                    <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">{t(labelKeys[index])}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Education & Languages */}
                <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/5 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/[0.02] border border-white/5"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                <GraduationCap size={22} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t('about.education')}</h3>
                        </div>
                        <div className="space-y-5">
                            {t('education', { returnObjects: true }).map((edu, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                    <div>
                                        <p className="text-white font-semibold text-sm">{edu.degree}</p>
                                        <p className="text-gray-500 text-xs mt-1">{edu.school}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl bg-white/[0.02] border border-white/5"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                <Languages size={22} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t('about.languages')}</h3>
                        </div>
                        <div className="space-y-4">
                            {t('languages', { returnObjects: true }).map((lang, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-gray-300 text-sm font-medium">{lang.name}</span>
                                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
                                        {lang.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* What I Do Section */}
                <div className="pt-12 border-t border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-12 text-center md:text-left">
                        {t('about.whatIDo')} <span className="text-accent">{t('about.whatIDoAccent')}</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {t('services', { returnObjects: true }).map((service, index) => {
                            const Icon = icons[index];
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Icon size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
