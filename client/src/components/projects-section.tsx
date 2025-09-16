import { Bell, TrendingUp, Github, ExternalLink, Check, Trophy } from "lucide-react";
import { projects } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.type === "featured");
  const additionalProjects = projects.filter(p => p.type === "additional");

  return (
    <section id="projects" className="py-20 bg-background" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-heading">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of innovative projects demonstrating expertise in AI/ML, full-stack development, and real-time systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="project-card bg-card p-8 rounded-xl shadow-sm" data-testid={`featured-project-${index}`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2" data-testid={`project-title-${index}`}>{project.title}</h3>
                  <p className="text-muted-foreground" data-testid={`project-date-${index}`}>{project.date}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="text-primary hover:text-primary/80" data-testid={`project-github-${index}`}>
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="text-primary hover:text-primary/80" data-testid={`project-demo-${index}`}>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Project mockup visualization */}
              <div className="bg-muted rounded-lg p-6 mb-6" data-testid={`project-visual-${index}`}>
                <div className="flex items-center justify-center h-40">
                  <div className="text-center">
                    {project.title.includes("Course") ? (
                      <>
                        <Bell className="w-16 h-16 text-primary mb-3 mx-auto" />
                        <p className="text-muted-foreground">Course Monitoring Dashboard</p>
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-16 h-16 text-primary mb-3 mx-auto" />
                        <p className="text-muted-foreground">87.6% Prediction Accuracy</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6" data-testid={`project-description-${index}`}>
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    {project.features ? "Key Features" : "Key Achievements"}
                  </h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {(project.features || project.achievements || []).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center" data-testid={`project-feature-${index}-${itemIndex}`}>
                        {project.achievements ? (
                          <Trophy className="text-yellow-500 mr-2 w-4 h-4 flex-shrink-0" />
                        ) : (
                          <Check className="text-green-500 mr-2 w-4 h-4 flex-shrink-0" />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                        data-testid={`project-tech-${index}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Projects */}
        {additionalProjects.length > 0 && (
          <div className="mt-12">
            <div className="bg-card p-8 rounded-xl shadow-sm" data-testid="additional-projects">
              <h3 className="text-2xl font-bold mb-6">Additional Projects</h3>
              <div className="grid md:grid-cols-1 gap-6">
                {additionalProjects.map((project, index) => (
                  <div key={project.title} className="border-l-4 border-primary pl-6" data-testid={`additional-project-${index}`}>
                    <h4 className="text-xl font-semibold mb-2" data-testid={`additional-project-title-${index}`}>{project.title}</h4>
                    <p className="text-muted-foreground mb-3" data-testid={`additional-project-date-${index}`}>{project.date}</p>
                    <p className="text-muted-foreground mb-4" data-testid={`additional-project-description-${index}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm"
                          data-testid={`additional-project-tech-${index}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
