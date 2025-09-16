import { User } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio-data";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground pt-24 pb-20 px-4 sm:px-6 lg:px-8" data-testid="hero-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-name">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90" data-testid="hero-title">
                {personalInfo.title}
              </p>
              <div className="prose prose-lg text-primary-foreground/90 mb-8">
                <p data-testid="hero-biography">
                  {personalInfo.biography}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  data-testid="button-get-in-touch"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all"
                  data-testid="button-view-projects"
                >
                  View Projects
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-primary-foreground/20 rounded-full flex items-center justify-center border-4 border-primary-foreground/30" data-testid="profile-placeholder">
                <User className="w-24 h-24 text-primary-foreground/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-card" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in" data-testid="stat-experience">
              <div className="text-3xl font-bold text-primary mb-2">{stats.experience}</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in" data-testid="stat-projects">
              <div className="text-3xl font-bold text-primary mb-2">{stats.projects}</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in" data-testid="stat-technologies">
              <div className="text-3xl font-bold text-primary mb-2">{stats.technologies}</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="animate-fade-in" data-testid="stat-students">
              <div className="text-3xl font-bold text-primary mb-2">{stats.students}</div>
              <div className="text-muted-foreground">Students Taught</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
