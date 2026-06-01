import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import Magnetic from '../Magnetic/Magnetic';
import * as AntIcons from '@ant-design/icons';

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef();
    const [status, setStatus] = useState('idle');
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedSubject) return;
        setStatus('loading');
        try {
            await emailjs.sendForm(
                'service_r3sho5e',
                'template_9buvz6c',
                formRef.current,
                '31uLmYqgUDo0wct-K'
            );
            setStatus('success');
            formRef.current.reset();
            setSelectedSubject('');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#161b22]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-display mb-16 text-center">
                    {t('contact.title')} <span className="text-accent">{t('contact.titleAccent')}</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">{t('contact.subtitle')}</h3>
                        <p className="text-gray-400 mb-10 text-lg">{t('contact.description')}</p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 border border-primary-500/20">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">{t('contact.emailLabel')}</p>
                                    <a href={`mailto:${portfolioData.email}`} className="text-white hover:text-accent transition-colors">{portfolioData.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">{t('contact.phoneLabel')}</p>
                                    <a href={`tel:${portfolioData.phone}`} className="text-white hover:text-accent transition-colors">{portfolioData.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 border border-primary-500/20">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">{t('contact.locationLabel')}</p>
                                    <span className="text-white">{portfolioData.location}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 glass-morphism p-8 rounded-3xl"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">{t('contact.nameLabel')}</label>
                                <input name="name" type="text" placeholder={t('contact.namePlaceholder')} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">{t('contact.emailFieldLabel')}</label>
                                <input name="from_email" type="email" placeholder={t('contact.emailPlaceholder')} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">{t('contact.subjectLabel')}</label>
                            <input type="hidden" name="title" value={selectedSubject} />
                            <div className="grid grid-cols-2 gap-2">
                                {portfolioData.contactSubjects.map((subject, index) => {
                                    const Icon = AntIcons[subject.icon];
                                    const isSelected = selectedSubject === subject.value;
                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setSelectedSubject(subject.value)}
                                            className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                                                isSelected
                                                    ? 'bg-accent/20 border-accent text-accent'
                                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                            }`}
                                        >
                                            {Icon && <Icon style={{ fontSize: 16 }} />}
                                            <span>{subject.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">{t('contact.messageLabel')}</label>
                            <textarea name="message" rows="4" placeholder={t('contact.messagePlaceholder')} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"></textarea>
                        </div>

                        {status === 'success' && (
                            <div className="flex items-center space-x-2 text-green-400 text-sm">
                                <CheckCircle size={16} />
                                <span>{t('contact.success')}</span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="flex items-center space-x-2 text-red-400 text-sm">
                                <AlertCircle size={16} />
                                <span>{t('contact.error')}</span>
                            </div>
                        )}

                        <Magnetic>
                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                                className="w-full bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader size={18} className="animate-spin" />
                                        <span>{t('contact.sending')}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{t('contact.send')}</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </motion.button>
                        </Magnetic>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
