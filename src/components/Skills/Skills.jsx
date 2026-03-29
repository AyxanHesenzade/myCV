import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#161b22]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display mb-4">Core <span className="text-accent">Skills</span></h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-morphism p-6 rounded-2xl hover:border-accent/30 transition-all group"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs text-accent uppercase tracking-widest font-semibold">{skill.category}</span>
                                <span className="text-xs text-gray-500">{skill.level}%</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-primary-500 to-accent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
