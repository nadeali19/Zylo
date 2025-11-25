import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  company: string;
}