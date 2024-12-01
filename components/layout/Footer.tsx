import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import Link from 'next/link';

const footerSections = {
  services: ['Web Development', 'AI Solutions', 'Digital Marketing', 'Branding', 'Video Production'],
  company: ['About Us', 'Careers', 'Blog', 'Press'],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  contact: [
    { icon: Mail, text: 'hello@infinitixglobal.com' },
    { icon: Phone, text: '+44 7466 219342' },
    { icon: MapPin, text: 'London, United Kingdom' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerSections.services.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerSections.company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              {footerSections.contact.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Infinitix Global. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerSections.legal.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}