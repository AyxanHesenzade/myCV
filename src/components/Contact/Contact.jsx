import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Magnetic from '../Magnetic/Magnetic';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#161b22]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-display mb-16 text-center">Get In <span className="text-accent">Touch</span></h2>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's discuss your project</h3>
                        <p className="text-gray-400 mb-10 text-lg">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 border border-primary-500/20">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                                    <a href={`mailto:${portfolioData.email}`} className="text-white hover:text-accent transition-colors">{portfolioData.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">Phone</p>
                                    <a href={`tel:${portfolioData.phone}`} className="text-white hover:text-accent transition-colors">{portfolioData.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 border border-primary-500/20">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                                    <span className="text-white">{portfolioData.location}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 glass-morphism p-8 rounded-3xl"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Your Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Your Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Subject</label>
                            <input type="text" placeholder="Project Inquiry" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Message</label>
                            <textarea rows="4" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"></textarea>
                        </div>
                        <Magnetic>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </motion.button>
                        </Magnetic>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
