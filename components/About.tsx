import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Search, Code2, Rocket, Users, Coffee, Layers, GitBranch, Terminal } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'We deep dive into your business goals, analyze the market, and blueprint a roadmap for success.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Design & Prototyping',
    description: 'Our UX/UI experts craft intuitive, high-fidelity prototypes that align with your brand identity.',
    icon: Target,
  },
  {
    id: 3,
    title: 'Development & Testing',
    description: 'Agile engineering with clean code, rigorous testing, and continuous integration for robust software.',
    icon: Code2,
  },
  {
    id: 4,
    title: 'Launch & Scale',
    description: 'Seamless deployment to the cloud followed by ongoing optimization and feature expansion.',
    icon: Rocket,
  },
];

const values = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve, adopting the latest frameworks and AI technologies to give you a competitive edge.',
    icon: LightbulbIcon,
  },
  {
    title: 'Pixel Perfection',
    description: 'Every pixel matters. We obsess over UI/UX details to ensure your users have a flawless experience.',
    icon: Layers,
  },
  {
    title: 'Transparent Ops',
    description: 'No black boxes. You get full visibility into our sprints, code, and progress throughout the lifecycle.',
    icon: Terminal,
  },
  {
    title: 'Scalable Arch',
    description: 'We build systems designed to grow. From 100 to 10 million users, our architecture holds up.',
    icon: GitBranch,
  }
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL", "AWS", "Docker", "TensorFlow", "Figma", "Flutter"
];

// Helper for icon rendering
function LightbulbIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.9-3-7-7-7s-7 3.1-7 7c0 1.4.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}

const About: React.FC = () => {
  return (
    <section id="about" className="bg-platinum text-oxford relative overflow-hidden">
      {/* Intro Section */}
      <div className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Image/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-oxford/10 aspect-[4/3]">
              <img 
                src="https://picsum.photos/800/800?grayscale&blur=2" 
                alt="Software Engineering Team" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-oxford/10 mix-blend-multiply" />
            </div>
            {/* Decorative Box */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-oxford/20 rounded-lg -z-10 hidden md:block pattern-dots" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-oxford font-bold tracking-widest text-sm mb-2 uppercase flex items-center gap-2">
              <span className="w-8 h-[1px] bg-oxford"></span> About Zylo Coroe
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-oxford mb-8 leading-tight">
              Architects of the <br/>
              <span className="text-oxford/70">Digital Realm</span>
            </h3>
            <p className="text-oxford/80 leading-relaxed mb-6 text-lg">
              We are a premium software house dedicated to bridging the gap between complex technology and human-centric design. 
              Founded by industry veterans, we treat every line of code as a craft and every project as a partnership.
            </p>
            <p className="text-oxford/70 leading-relaxed mb-8">
              Whether you are a startup looking for an MVP or an enterprise seeking digital transformation, 
              our team of full-stack engineers and data scientists delivers scalable, secure, and high-performance solutions.
            </p>
            
            <div className="flex gap-8 border-t border-oxford/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-oxford">10+</p>
                <p className="text-xs text-oxford/60 uppercase tracking-wide">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-oxford">250+</p>
                <p className="text-xs text-oxford/60 uppercase tracking-wide">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-oxford">50+</p>
                <p className="text-xs text-oxford/60 uppercase tracking-wide">Experts</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-oxford">Our Core Values</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-oxford/5 hover:border-oxford/20 transition-colors"
                >
                  <div className="bg-oxford/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-oxford">
                    <Icon size={24} />
                  </div>
                  <h5 className="font-bold text-lg mb-2 text-oxford">{val.title}</h5>
                  <p className="text-sm text-oxford/70 leading-relaxed">{val.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process Section (Darker band for contrast within the same palette) */}
      <div className="bg-oxford/5 py-24 border-y border-oxford/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-oxford mb-4">How We Build</h3>
            <p className="text-oxford/70">From the first coffee meeting to the final deployment, our process is transparent, agile, and effective.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-oxford/10 -z-10" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pt-8"
                >
                  <div className="bg-platinum border-2 border-oxford/10 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-10 font-bold text-oxford text-sm">
                    0{step.id}
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm h-full border border-oxford/5 hover:shadow-md transition-shadow">
                    <div className="mb-4 text-oxford opacity-80">
                      <Icon size={32} />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-oxford">{step.title}</h4>
                    <p className="text-sm text-oxford/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee Strip */}
      <div className="py-16 border-b border-oxford/10">
        <div className="container mx-auto px-6 text-center mb-8">
          <span className="text-oxford/50 uppercase text-sm tracking-widest font-semibold">Powered by Modern Technology</span>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap relative">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-platinum to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-platinum to-transparent z-10" />
           
           <motion.div 
             className="flex gap-12 px-12"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
           >
             {[...techStack, ...techStack].map((tech, i) => (
               <span key={i} className="text-2xl font-bold text-oxford/30 hover:text-oxford/80 transition-colors cursor-default">
                 {tech}
               </span>
             ))}
           </motion.div>
        </div>
      </div>

    </section>
  );
};

export default About;
