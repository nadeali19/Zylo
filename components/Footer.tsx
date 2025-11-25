import React from 'react';
import { Cpu, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-oxford border-t border-platinum/10 pt-16 pb-8 text-platinum/60 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="bg-platinum p-1.5 rounded-lg">
                <Cpu className="w-5 h-5 text-oxford" />
              </div>
              <span className="text-xl font-bold text-platinum">
                Zylo<span className="text-platinum/60">Coroe</span>
              </span>
            </a>
            <p className="max-w-sm leading-relaxed text-platinum/50">
              A premier software house dedicated to crafting exceptional digital experiences through code, design, and data.
            </p>
          </div>
          
          <div>
            <h4 className="text-platinum font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-platinum transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-platinum transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-platinum transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-platinum transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-platinum font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-platinum transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-platinum transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-platinum transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-platinum transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-platinum/10">
          <p>&copy; {new Date().getFullYear()} Zylo Coroe. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-platinum transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-platinum transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-platinum transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-platinum transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;