import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Calendar, Send, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/contact", formData);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="contact-heading">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or explore how we can work together? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-testid="contact-info">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center p-4 rounded-lg transition-all hover:bg-card hover:shadow-md cursor-pointer" data-testid="contact-email">
                  <Mail className="text-primary mr-4 w-5 h-5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center p-4 rounded-lg transition-all hover:bg-card hover:shadow-md cursor-pointer" data-testid="contact-phone">
                  <Phone className="text-primary mr-4 w-5 h-5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="flex items-center p-4 rounded-lg transition-all hover:bg-card hover:shadow-md cursor-pointer" data-testid="contact-linkedin">
                  <Linkedin className="text-primary mr-4 w-5 h-5" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      linkedin.com/in/ishaan-goswami
                    </a>
                  </div>
                </div>
                {/* GitHub */}
                <div className="flex items-center p-4 rounded-lg transition-all hover:bg-card hover:shadow-md cursor-pointer" data-testid="contact-github">
                  <Github className="text-primary mr-4 w-5 h-5" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      github.com/ishaan-goswami
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  View Resume
                </a>

                <button 
                  onClick={() => setShowScheduleModal(true)}
                  className="inline-flex items-center border border-border px-4 py-2 rounded-lg hover:bg-accent hover:shadow-md transition-all" 
                  data-testid="button-schedule-call"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all" data-testid="contact-form">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-colors hover:border-primary" 
                  placeholder="Enter your full name"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-colors hover:border-primary" 
                  placeholder="Enter your email address"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-colors hover:border-primary"
                  data-testid="select-subject"
                >
                  <option value="">Select a subject</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="consulting">Consulting Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-colors hover:border-primary resize-none" 
                  placeholder="Tell me about your project, opportunity, or how I can help..."
                  data-testid="textarea-message"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-md transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-submit"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Schedule Call Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-testid="schedule-modal">
          <div className="bg-white dark:bg-card p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Schedule a Call</h3>
              <button 
                onClick={() => setShowScheduleModal(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="button-close-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'd love to discuss opportunities, projects, or answer any questions you might have. Here are the best ways to schedule a call:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 border border-border rounded-lg hover:bg-accent hover:shadow-md transition-all">
                  <h4 className="font-medium mb-2">Direct Contact</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Send me an email with your preferred times and I'll get back to you within 24 hours.
                  </p>
                  <a 
                    href={`mailto:${personalInfo.email}?subject=Schedule Call Request`}
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    data-testid="link-email-schedule"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email to Schedule
                  </a>
                </div>
                
                <div className="p-4 border border-border rounded-lg hover:bg-accent hover:shadow-md transition-all">
                  <h4 className="font-medium mb-2">LinkedIn Message</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Connect with me on LinkedIn and send a message with your availability.
                  </p>
                  <a 
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    data-testid="link-linkedin-schedule"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <button 
                  onClick={() => setShowScheduleModal(false)}
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 hover:shadow-md transition-all"
                  data-testid="button-close-schedule-modal"
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
