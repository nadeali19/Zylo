import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-oxford text-white relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-platinum font-bold tracking-widest text-sm mb-2 uppercase">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-platinum">Comprehensive Digital Services</h3>
          <p className="text-platinum/60 text-lg">We leverage the latest technologies to build software that empowers your business and engages your customers.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                variants={item}
                className="group relative overflow-hidden rounded-xl bg-platinum/5 p-[1px]"
              >
                {/* Rotating Border Animation - Platinum vs Transparent on Oxford bg */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        className="w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#e5e5e5_360deg)]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Card Content - Inner Box */}
                <div className="relative h-full bg-oxford rounded-xl p-6 flex flex-col transition-colors duration-300 border border-platinum/5 group-hover:border-platinum/0">
                  {/* Animated Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-platinum/10 border border-platinum/10 flex items-center justify-center mb-5 transition-all duration-500 ease-out group-hover:bg-platinum group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                    <Icon className="w-6 h-6 text-platinum transition-colors duration-300 group-hover:text-oxford" />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 text-platinum transition-colors">{service.title}</h4>
                  <p className="text-platinum/60 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;