import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-platinum">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-oxford font-bold tracking-widest text-sm mb-2 uppercase">Selected Work</h2>
            <h3 className="text-4xl font-bold text-oxford">Featured Projects</h3>
          </div>
          <a href="#" className="text-oxford font-semibold hover:text-oxford/70 transition-colors flex items-center gap-2">
            View GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden bg-oxford">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-oxford/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-platinum text-sm font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.category}
                </span>
                <h4 className="text-platinum text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {project.title}
                </h4>
                <p className="text-platinum/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;