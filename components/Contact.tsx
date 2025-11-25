import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-oxford relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-platinum/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 text-platinum"
          >
            <h2 className="text-platinum font-bold tracking-widest text-sm mb-2 uppercase">Get In Touch</h2>
            <h3 className="text-4xl font-bold mb-6">Let's Build Something Extraordinary</h3>
            <p className="text-platinum/60 mb-12 text-lg">
              Have an idea? We have the skills to bring it to life. Reach out to us for a consultation and quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-platinum/10 rounded-lg border border-platinum/20">
                  <Mail className="text-platinum" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-platinum">Email Us</h4>
                  <p className="text-platinum/60">hello@zylocoroe.com</p>
                  <p className="text-platinum/60">careers@zylocoroe.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-platinum/10 rounded-lg border border-platinum/20">
                  <Phone className="text-platinum" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-platinum">Call Us</h4>
                  <p className="text-platinum/60">+1 (555) 123-4567</p>
                  <p className="text-platinum/60">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-platinum/10 rounded-lg border border-platinum/20">
                  <MapPin className="text-platinum" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-platinum">Visit Us</h4>
                  <p className="text-platinum/60">100 Innovation Blvd, Suite 500</p>
                  <p className="text-platinum/60">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-7/12"
          >
            <form className="bg-oxford p-8 md:p-10 rounded-2xl border border-platinum/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-platinum/70 text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full bg-oxford border border-platinum/20 rounded-lg px-4 py-3 text-platinum placeholder-platinum/30 focus:outline-none focus:border-platinum transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-platinum/70 text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full bg-oxford border border-platinum/20 rounded-lg px-4 py-3 text-platinum placeholder-platinum/30 focus:outline-none focus:border-platinum transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-platinum/70 text-sm font-medium mb-2">Email Address</label>
                <input type="email" className="w-full bg-oxford border border-platinum/20 rounded-lg px-4 py-3 text-platinum placeholder-platinum/30 focus:outline-none focus:border-platinum transition-colors" placeholder="john@example.com" />
              </div>

              <div className="mb-6">
                <label className="block text-platinum/70 text-sm font-medium mb-2">Service Interest</label>
                <div className="relative">
                  <select className="w-full bg-oxford border border-platinum/20 rounded-lg px-4 py-3 text-platinum focus:outline-none focus:border-platinum transition-colors appearance-none">
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>UI/UX Design</option>
                    <option>Data Science</option>
                    <option>Other</option>
                  </select>
                  {/* Custom arrow to hide default OS arrow which might be wrong color */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-platinum">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-platinum/70 text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full bg-oxford border border-platinum/20 rounded-lg px-4 py-3 text-platinum placeholder-platinum/30 focus:outline-none focus:border-platinum transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full bg-platinum hover:bg-white text-oxford font-bold py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-platinum/25 flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;