import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data';

import { Code2, Smartphone, Database, Zap } from 'lucide-react';

const About = () => {
    const icons = [Code2, Smartphone, Database];

    return (
        <section id="about" className="py-24 bg-[#0d1117] relative overflow-hidden">
            {/* Decorative background blur */}
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
                        {/* Experience Badge */}
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
                            <span className="text-sm font-bold uppercase tracking-widest">About Me</span>
                        </div>
                        <h2 className="text-5xl font-bold font-display mb-8">Crafting Digital <br /><span className="text-gradient">Excellence</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            {portfolioData.profile}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {portfolioData.stats.map((stat, index) => (
                                <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* What I Do Section */}
                <div className="pt-12 border-t border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-12 text-center md:text-left">What I <span className="text-accent">Do</span></h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {portfolioData.services.map((service, index) => {
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
