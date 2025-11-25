import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-oxford">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-platinum/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-platinum/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-platinum/10 border border-platinum/20 text-platinum text-xs font-bold tracking-widest mb-6">
            NEXT GEN SOFTWARE HOUSE
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-platinum tracking-tight mb-6 leading-tight">
            Building the <br />
            <span className="text-platinum/70 drop-shadow-lg">
              Digital Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-platinum/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Zylo Coroe combines advanced engineering with world-class design to deliver software solutions that scale, perform, and inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-platinum text-oxford rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-platinum/10 hover:bg-platinum/90 transition-colors"
            >
              Start Your Project <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-platinum/30 text-platinum rounded-full font-semibold hover:bg-platinum/10 transition-colors"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-platinum/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-platinum rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;