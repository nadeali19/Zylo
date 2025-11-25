import { Code, Smartphone, Palette, ShoppingCart, Bot, Database } from 'lucide-react';
import { ServiceItem, ProjectItem, NavItem, TestimonialItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Scalable, high-performance web applications built with modern frameworks like React, Django, and Next.js.',
    icon: Code,
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
    icon: Smartphone,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric design processes ensuring intuitive interfaces and engaging visual journeys for your customers.',
    icon: Palette,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Robust online stores with secure payment gateways, inventory management, and optimized checkout flows.',
    icon: ShoppingCart,
  },
  {
    id: 'chatbot',
    title: 'Chatbot Development',
    description: 'AI-powered conversational agents that automate support and enhance customer engagement 24/7.',
    icon: Bot,
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Advanced analytics, machine learning models, and big data solutions to drive data-informed decisions.',
    icon: Database,
  },
];

export const PORTFOLIO: ProjectItem[] = [
  {
    id: 'p1',
    title: 'FinTech Dashboard',
    category: 'Web Development',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A real-time financial analytics dashboard for institutional investors.',
  },
  {
    id: 'p2',
    title: 'HealthTrack Mobile',
    category: 'App Development',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'A comprehensive telemedicine app connecting patients with specialists.',
  },
  {
    id: 'p3',
    title: 'Luxe Fashion',
    category: 'E-commerce',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'High-end fashion retailer platform with AI-driven recommendations.',
  },
  {
    id: 'p4',
    title: 'EcoSmart Home',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Smart home interface design focusing on accessibility and ease of use.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Inc.',
    quote: 'Zylo Coroe transformed our legacy system into a modern, high-speed platform. Their attention to detail is unmatched.',
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartUp Vision',
    quote: 'The UI/UX team completely captured our brand essence. User engagement has increased by 40% since launch.',
  },
];