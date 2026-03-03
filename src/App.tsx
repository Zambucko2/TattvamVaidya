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
  ExternalLink,
  Eye,
  Heart,
  Box
} from 'lucide-react';
import myImage from '/media/mypicture.jpg';

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

  const mediaProjects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "First unique description goes here. Talk about your specific role or the tools used.",
      views: "1.2k",
      likes: "45",
      link: "#"
    },
    {
      id: 2,
      title: "Project Bravo",
      description: "Second unique description. Notice how this will automatically flip to the other side.",
      views: "850",
      likes: "120",
      link: "#"
    },
    {
      id: 3,
      title: "Project Charlie",
      description: "Third project details. The 'map' function handles the layout logic for you.",
      views: "3.4k",
      likes: "210",
      link: "#"
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Fourth project details. You can keep adding as many as you want to this list.",
      views: "500",
      likes: "32",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-red-500">Tattvam Vaidya</div>
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
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-zinc-900 ${
                    activeSection === id ? 'text-red-500 bg-zinc-900' : 'text-zinc-400'
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
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
                Tattvam Vaidya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Aerospace Engineering Student
            </p>
            <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about engineering, design, and media. Currently pursuing aerospace engineering at UNCW 
              with hands-on experience in operations, video production, and technical problem-solving.
            </p>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              >
                Learn More
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-zinc-700 hover:border-red-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-zinc-900 text-zinc-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-zinc-500" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-81 h-81 mx-auto lg:mx-0">
                <img 
                  src={myImage} 
                  alt="Picture of Me"
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-zinc-800"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-zinc-300">
                <MapPin size={20} className="text-red-500" />
                <span>University of North Carolina Wilmington</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-300">
                <Calendar size={20} className="text-zinc-400" />
                <span>Freshman Aerospace Engineering Student</span>
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Recent high school graduate with a passion for aerospace engineering and technology. 
                I bring hands-on experience from various roles in operations, media production, and customer service.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-zinc-900 p-4 rounded-lg text-center border border-zinc-800">
                  <div className="text-2xl font-bold text-red-500">4+</div>
                  <div className="text-zinc-400">Work Experiences</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg text-center border border-zinc-800">
                  <div className="text-2xl font-bold text-zinc-400">Multiple</div>
                  <div className="text-zinc-400">Technical Skills</div>
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
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
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
                <div className="absolute left-0 top-0 w-4 h-4 bg-red-500 rounded-full"></div>
                {index < 3 && <div className="absolute left-2 top-4 w-0.5 h-full bg-zinc-700"></div>}
                <div className="bg-zinc-800 p-6 rounded-xl ml-6 hover:bg-zinc-700

 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
                      <p className="text-red-500 font-medium">{job.company}</p>
                    </div>
                    <span className="text-zinc-500 text-sm mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-zinc-400 mb-4 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-zinc-800

 text-rose-600 px-3 py-1 rounded-full text-sm">
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
      <section id="projects" className="py-20 bg-zinc-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
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
              <div key={index} className="bg-zinc-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">{project.category}</span>
                  <span className="text-zinc-400 text-sm">{project.status}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-zinc-800

 text-zinc-400 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="flex items-center space-x-2 text-red-500 hover:text-blue-300 transition-colors duration-300"
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
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          {/* Media Work Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-zinc-400">Media Work</h3>
            <div className="space-y-12">

              {/* 2. We 'map' over your unique projects instead of just numbers [1,2,3,4] */}
              {mediaProjects.map((project, index) => (
                <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  
                  {/* Media placeholder */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-video bg-zinc-800 border border-zinc-800 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-900/30 text-red-500 rounded-lg flex items-center justify-center mx-auto mb-2 border border-red-500/20">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h8a1 1 0 100-2H5z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-zinc-500">{project.title} Placeholder</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content block */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{project.description}</p>
                    <div className="flex space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Eye size={16} className="text-red-500" />
                        <span className="text-zinc-500">{project.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart size={16} className="text-red-500" />
                        <span className="text-zinc-500">{project.likes} likes</span>
                      </div>
                    </div>
                    <a href={project.link} className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400">
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
            <h3 className="text-2xl font-semibold mb-8 text-center text-zinc-400">CAD Design Projects</h3>
            <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300 cursor-pointer border border-zinc-700">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-zinc-700/50 text-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Box size={24} />
                        </div>
                        <span className="text-xs text-zinc-500">CAD Project {item}</span>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'tattvam.vaidya@gmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/tattvamvaidya' },
                  { icon: Github, label: 'GitHub', value: 'github.com/Zambucko2' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-400">{item.label}</div>
                      <div className="text-zinc-400">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <input className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-red-500 focus:outline-none text-zinc-200" placeholder="Name" />
                <input className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-red-500 focus:outline-none text-zinc-200" placeholder="Email" />
                <textarea rows={6} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-red-500 focus:outline-none text-zinc-200" placeholder="Message"></textarea>
                <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-lg font-semibold transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
        <div className="container mx-auto px-6 text-center text-zinc-500">
          © 2026 Tattvam Vaidya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
