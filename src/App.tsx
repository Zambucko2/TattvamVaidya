import React, { useEffect, useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  User, 
  Briefcase, 
  FolderOpen, 
  Wrench, 
  MessageSquare,
  ChevronDown,
  MapPin,
  Calendar,
  ExternalLink
} from 'lucide-react';
import myImage from '/home/zambucko/website/TattvamVaidya/media/mypicture.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-400">Tattvam Vaidya</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: User },
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
                { id: 'contact', label: 'Contact', icon: MessageSquare }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800 ${
                    activeSection === id ? 'text-blue-400 bg-slate-800' : 'text-slate-300'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Tattvam Vaidya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Aerospace Engineering Student
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about engineering, design, and media. Currently pursuing aerospace engineering at UNCW 
              with hands-on experience in operations, video production, and technical problem-solving.
            </p>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              >
                Learn More
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-slate-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-slate-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-80 h-80 bg-slate-700 rounded-xl mx-auto lg:mx-0 flex items-center justify-center">
                <User size={120} className="text-slate-500" />
                <span className="absolute text-slate-400 text-sm mt-32"><img src={myImage} alt='Picture of Tattvam Vaidya'/></span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin size={20} className="text-blue-400" />
                <span>University of North Carolina Wilmington</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Calendar size={20} className="text-teal-400" />
                <span>Freshman Aerospace Engineering Student</span>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                Recent high school graduate with a passion for aerospace engineering and technology. 
                I bring hands-on experience from various roles in operations, media production, and customer service.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My diverse background spans from technical operations at healthcare facilities to creative 
                video production work. I'm excited to channel this multidisciplinary experience into my 
                aerospace engineering studies at UNCW.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">4+</div>
                  <div className="text-slate-400">Work Experiences</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-400">Multiple</div>
                  <div className="text-slate-400">Technical Skills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Event Staff I",
                company: "UNCW Campus Life",
                period: "2025 - 2026",
                description: "Supporting campus events and activities, ensuring smooth operations and positive participant experiences.",
                skills: ["Event Management", "Customer Service", "Team Coordination"]
              },
              {
                title: "Cashier",
                company: "Wayback Burgers",
                period: "2024 - 2025",
                description: "Provided excellent customer service while managing transactions and maintaining quality standards.",
                skills: ["Customer Service", "Cash Handling", "Team Collaboration"]
              },
              {
                title: "Engineering Operations Technician",
                company: "Spencer Health Solutions",
                period: "2023 - 2025",
                description: "Responsible for technical operations, equipment maintenance, and process optimization in healthcare facility operations.",
                skills: ["Technical Operations", "Equipment Maintenance", "Process Optimization"]
              },
              {
                title: "Best Boy & B Team Camera Operator",
                company: "NLD Media",
                period: "2022 - 2025",
                description: "Managed lighting equipment and served as secondary camera operator for various media production projects.",
                skills: ["Video Production", "Lighting Management", "Camera Operation"]
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-8 pb-12">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                {index < 3 && <div className="absolute left-2 top-4 w-0.5 h-full bg-slate-600"></div>}
                <div className="bg-slate-800 p-6 rounded-xl ml-6 hover:bg-slate-700 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                    </div>
                    <span className="text-slate-400 text-sm mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-700 text-teal-400 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Projects & Portfolio
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CAD Design Projects",
                category: "Engineering",
                description: "Collection of 3D models and technical drawings created for various engineering applications and prototypes.",
                tech: ["SolidWorks", "AutoCAD", "3D Modeling"],
                status: "Ongoing"
              },
              {
                title: "Video Production Portfolio",
                category: "Media",
                description: "Professional video projects including corporate content, event coverage, and creative productions.",
                tech: ["Adobe Premiere", "DaVinci Resolve", "Camera Operation"],
                status: "Featured"
              },
              {
                title: "Web Development Experiments",
                category: "Development",
                description: "Modern web applications and responsive designs showcasing technical skills and creative problem-solving.",
                tech: ["HTML/CSS", "JavaScript", "Dreamweaver"],
                status: "Active"
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{project.category}</span>
                  <span className="text-teal-400 text-sm">{project.status}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          {/* Media Work Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Media Work</h3>
            <div className="space-y-12">
              {/* Media items in staggered layout */}
              {[1, 2, 3, 4].map((item, index) => (
                <div key={item} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  {/* Media placeholder */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h8a1 1 0 100-2H5z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-slate-400">Media Placeholder {item}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content block */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <h4 className="text-xl font-semibold text-white">Insert Title Here</h4>
                    <p className="text-slate-300 leading-relaxed">Insert description here - detailed information about this media project, the work involved, and key highlights.</p>
                    
                    {/* Stats */}
                    <div className="flex space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-slate-400">X views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-slate-400">X likes</span>
                      </div>
                    </div>
                    
                    {/* External link */}
                    <a 
                      href="#" 
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <span>View on YouTube</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAD Design Projects Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">CAD Design Projects</h3>
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="text-center mb-6">
                <p className="text-slate-300 mb-4">3D models and technical drawings for engineering applications</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* CAD project placeholders */}
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-300 cursor-pointer">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-xs text-slate-400">CAD {item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Web Development</h3>
            <div className="bg-slate-800 p-8 rounded-xl max-w-sm mx-auto">
              <div className="text-center">
                {/* Company Logo Placeholder */}
                <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-400 text-xs">Logo</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Company Name</h4>
                <p className="text-slate-300 mb-6">Project description here</p>
                <a 
                  href="#" 
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  I'm always interested in discussing new opportunities, 
                  collaborations, or just connecting with fellow engineering and media enthusiasts.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">tattvam.vaidya@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-slate-300">linkedin.com/in/tattvamvaidya</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-slate-300">github.com/Zambucko2</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2026 Tattvam Vaidya. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
