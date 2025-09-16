import { Code, Cog, Brain, CheckCircle, ChevronRight } from "lucide-react";
import { technicalSkills, education, experience } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <>
      {/* Technical Skills */}
      <section id="about" className="py-20 bg-muted" data-testid="skills-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-heading">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proficient in modern programming languages, frameworks, and development tools with hands-on experience in AI/ML and full-stack development.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Languages */}
            <div className="bg-card p-8 rounded-xl shadow-sm" data-testid="languages-card">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Code className="text-primary mr-3" />
                Programming Languages
              </h3>
              <div className="space-y-4">
                {technicalSkills.languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center" data-testid={`skill-${lang.name.toLowerCase()}`}>
                    <span>{lang.name}</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className="skill-bar h-2 rounded-full" 
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Frameworks & Technologies */}
            <div className="bg-card p-8 rounded-xl shadow-sm" data-testid="frameworks-card">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Cog className="text-primary mr-3" />
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.frameworks.map((framework) => (
                  <span 
                    key={framework}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`framework-${framework.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
            
            {/* AI/ML Specializations */}
            <div className="bg-card p-8 rounded-xl shadow-sm" data-testid="aiml-card">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Brain className="text-primary mr-3" />
                AI/ML Expertise
              </h3>
              <ul className="space-y-3">
                {technicalSkills.aiml.map((skill) => (
                  <li key={skill} className="flex items-center" data-testid={`aiml-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background" data-testid="experience-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="experience-heading">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven track record in software engineering, AI/ML development, and technical leadership across multiple organizations.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 1 ? 'md:justify-end' : ''}`} data-testid={`experience-${index}`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold" data-testid={`experience-title-${index}`}>{exp.title}</h3>
                          <p className="text-primary font-medium" data-testid={`experience-company-${index}`}>{exp.company}</p>
                          <p className="text-muted-foreground text-sm" data-testid={`experience-location-${index}`}>{exp.location}</p>
                        </div>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded" data-testid={`experience-period-${index}`}>
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start" data-testid={`experience-responsibility-${index}-${respIndex}`}>
                            <ChevronRight className="text-primary mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-muted" data-testid="education-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4" data-testid="education-heading">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xl font-semibold text-primary" data-testid="education-degree">{education.degree}</h4>
                    <p className="text-lg" data-testid="education-school">{education.school}</p>
                    <p className="text-muted-foreground" data-testid="education-location">{education.location}</p>
                    <p className="text-muted-foreground" data-testid="education-graduation">{education.graduation}</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Concentration:</p>
                    <p className="text-muted-foreground" data-testid="education-concentration">{education.concentration}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                <div className="grid grid-cols-1 gap-2">
                  {education.coursework.map((course) => (
                    <span 
                      key={course}
                      className="text-sm bg-muted px-3 py-2 rounded"
                      data-testid={`course-${course.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
