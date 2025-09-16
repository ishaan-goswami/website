import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">{personalInfo.name}</h3>
          <p className="text-background/80 mb-6" data-testid="footer-title">{personalInfo.title}</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-background/80 hover:text-background transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="text-background/80 hover:text-background transition-colors"
              data-testid="footer-phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm" data-testid="footer-copyright">
              © 2025 {personalInfo.name}. Built with passion for technology and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
