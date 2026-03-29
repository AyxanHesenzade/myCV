import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { portfolioData } from '../../data';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.scss';

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        x.set(mouseXPos / width - 0.5);
        y.set(mouseYPos / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={styles.projectCard}
        >
            <div className={styles.imageWrapper} style={{ transform: "translateZ(50px)" }}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.overlay}>
                    <div className="flex space-x-4">
                        <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-6" style={{ transform: "translateZ(30px)" }}>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-primary-500/10 text-primary-400 rounded-md border border-primary-500/20">
                            {t}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#0d1117]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-gray-400">A selection of my recent works</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
