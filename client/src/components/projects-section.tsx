import { Bell, TrendingUp, Github, ExternalLink, Check, Trophy } from "lucide-react";
import { projects } from "@/data/portfolio-data";

export default function ProjectsSection() {
  // Combine featured + additional into one array
  const allProjects = projects.filter(
    (p) => p.type === "featured" || p.type === "additional"
  );

  return (
    <section id="projects" className="py-20 bg-background" data-testid="projects-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-heading">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of innovative projects demonstrating expertise in AI/ML, full-stack development, and real-time systems.
          </p>
        </div>
        
        <div className="space-y-10">
          {allProjects.map((project, index) => (
            <div
              key={project.title}
              className="project-card bg-card p-8 rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              data-testid={`project-${index}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.date}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="text-primary hover:text-primary/80">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="text-primary hover:text-primary/80">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project visualization */}
              <div className="bg-muted rounded-lg p-6 mb-6">
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

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    {project.features ? "Key Features" : "Key Achievements"}
                  </h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {(project.features || project.achievements || []).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
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
      </div>
    </section>
  );
}
