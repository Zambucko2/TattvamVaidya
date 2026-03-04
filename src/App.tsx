interface CadProject {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tools: string[];
  onshapeLink?: string; // Optional link
}

import React, { useEffect, useState, useRef } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  User, 
  Briefcase, 
  FolderOpen, 
  MessageSquare,
  ChevronDown,
  MapPin,
  Calendar,
  ExternalLink,
  Eye,
  Heart,
} from 'lucide-react';
import myImage from '/media/mypicture.jpg';
import emailjs from '@emailjs/browser';

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

  
  const form = useRef<HTMLFormElement>(null); // This "points" to your form
  const [status, setStatus] = useState('');   // To show "Sending..." or "Success!"

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    if (!form.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setStatus('success');
        form.current?.reset(); // Clears the form after sending
    }, (error) => {
        console.log(error.text);
        setStatus('error');
    });
  };

  const [copied, setCopied] = useState(false);

  const [selectedProject, setSelectedProject] = useState<CadProject | null>(null);
  const mediaProjects = [
    {
      id: 1,
      title: "That one time we went to London!!",
      description: "Definitely turned out to be one of my favorite food trips..yum =p",
      youtubeId: "jqDxiH_Pl7Y?si=czlrN63Lmcq_23Ar",
      views: "23",
    likes: "3"
    },
    {
      id: 2,
      title: "February 11, 2026",
      description: "A coaching session of restorative practices for High School Coaches to adapt to modern times and newer needs.",
      views: "5",
      likes: "1",
      youtubeId: "9cjplGNSL2Y?si=LapEfDrucD5aX5lB"
    },
    {
      id: 3,
      title: "SRMHS Football 2024 Season: ALL In",
      description: "A weekly series following our SE Bulldogs football team as they compete throughout the year!",
      views: "650",
      likes: "6",
      youtubeId: "HnhEDePHDVU?si=ArNPj8lsTHgYKXsf"
    },
    {
      id: 4,
      title: "Coming Soon...",
      description: "Coming soon...sooner than you think ;) Stay tuned for some exciting content in the near future!",
      views: "500",
      likes: "32",
      youtubeId: "#"
    }
  ];

  const cadProjects: CadProject[] = [
  {
    id: 1,
    title: "Dark Horse 2-Stage Rocket",
    description: "A small two-stage rocket designed for hobbyist-level high-altitude flights.",
    fullDescription: "Designed a 2 Stage solid-fuel rocket using Onshape. The first stage features a 30mm diameter motor mount with four static fins, while the second stage is the same diameter payload section. Both stages are optimized for weight reduction while maintaining structural integrity and fully 3D Printed.",
    image: "./media/rocket 1.png", // Placeholder: Turbine/Gear
    tools: ["Onshape", "3D Printing", "Fusion 360", "Open-Rocket Simulation"],
    onshapeLink: "https://cad.onshape.com/documents/c4261fdc2ae44fb4d33883dd/w/5ffebb340c27f18be689c5f4/e/7c70df7411f8906c76c0ce75?renderMode=0&uiState=69a7b427653d10c9e139c3c8"
  },
  {
    id: 2,
    title: "Modern House",
    description: "Experimented with architectural design principles to create a sleek, modern residential structure.",
    fullDescription: "A modern home design project focused on clean lines, open spaces, and integration with the environment. The design features large windows for natural light, a minimalist interior layout, and sustainable materials. This project was created using Onshape and Fusion 360 to explore architectural concepts and 3D modeling techniques.",
    image: "./media/house.png", // Placeholder: Drone/Tech
    tools: ["Onshape", "Fusion 360"],
    onshapeLink: "https://cad.onshape.com/documents/7074161f8e2f9eb7a80d40c9/w/c690bce35308f4af02666888/e/4065544255faa18a66a9c24f?renderMode=0&uiState=69a7b5233c14a9271599b965"

  },
  {
    id: 3,
    title: "Tripoli Level 1 Certification Rocket",
    description: "A rocket designed to meet the requirements for Tripoli Level 1 certification.",
    fullDescription: "Designed a single-stage rocket to meet Tripoli Level 1 certification standards. The design includes a 29mm motor mount, three symmetrically placed fins for stability, and a payload section capable of carrying small instruments. The project was developed using Onshape for CAD modeling and Open-Rocket for flight simulation to ensure compliance with certification requirements.",
    image: "./media/Coming Soon.png", // Placeholder: Space/Satellite
    tools: ["Onshape", "Open-Rocket Simulation"],
    onshapeLink: "https://cad.onshape.com"
  },

  // Add more projects as needed
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
                  <div className="text-2xl font-bold text-red-500">4+ Years</div>
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
            <h3 className="text-2xl font-semibold mb-12 text-center text-zinc-400 uppercase tracking-widest">Media Work</h3>
            <div className="space-y-20">
              {mediaProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  
                  {/* Actual YouTube Video Embed */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative w-full pb-[56.25%] h-0 bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-zinc-800 group-hover:border-red-600/50 transition-all">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Content block */}
                  <div className="w-full lg:w-2/5 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h4>
                      <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                    </div>
                    
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex space-x-8 text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Eye size={18} className="text-red-500" />
                        <span className="text-zinc-500">{project.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart size={18} className="text-red-500" />
                        <span className="text-zinc-500">{project.likes} likes</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <a 
                        href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-zinc-800 hover:bg-red-600 text-zinc-200 hover:text-white rounded-lg transition-all duration-300 font-bold group"
                      >
                        <span>View on YouTube</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAD Design Projects Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-zinc-400">CAD Design Projects</h3>
            <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cadProjects.map((project) => (
                    <div 
                      key={project.id} 
                      onClick={() => setSelectedProject(project)} // Opens the modal
                      className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-rose-500/50 transition-all cursor-pointer"
                    >
                      <div className="aspect-square bg-zinc-800 relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-zinc-100 mb-1">{project.title}</h4>
                        <p className="text-sm text-zinc-400 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map(tool => (
                            <span key={tool} className="text-[10px] uppercase tracking-wider bg-zinc-800 text-rose-500 px-2 py-1 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
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
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Email Card with Copy to Clipboard */}
              <div 
                onClick={() => {
                  navigator.clipboard.writeText("tattvam.vaidya@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex items-center p-4 bg-zinc-900 border border-zinc-900 rounded-xl cursor-pointer hover:border-red-600/50 transition-all group relative"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-zinc-100 text-sm uppercase tracking-wider">Email Me</div>
                  <div className="text-zinc-400">tattvam.vaidya@gmail.com</div>
                </div>
                {copied && (
                  <span className="absolute right-4 text-xs font-bold text-red-500 animate-pulse">
                    COPIED!
                  </span>
                )}
              </div>

              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com/in/tattvamvaidya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-zinc-900 border border-zinc-900 rounded-xl hover:border-red-600/50 transition-all group"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all">
                  <Linkedin size={24} />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-zinc-100 text-sm uppercase tracking-wider">LinkedIn</div>
                  <div className="text-zinc-400">linkedin.com/in/tattvamvaidya</div>
                </div>
                <ExternalLink size={18} className="ml-auto text-zinc-600 group-hover:text-red-500 transition-colors" />
              </a>

              {/* GitHub Link */}
              <a 
                href="https://github.com/Zambucko2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-zinc-900 border border-zinc-900 rounded-xl hover:border-red-600/50 transition-all group"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all">
                  <Github size={24} />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-zinc-100 text-sm uppercase tracking-wider">GitHub</div>
                  <div className="text-zinc-400">github.com/Zambucko2</div>
                </div>
                <ExternalLink size={18} className="ml-auto text-zinc-600 group-hover:text-red-500 transition-colors" />
              </a>
            </div>

            {/* Form Section */}
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-400 uppercase tracking-widest">Name</label>
                  <input 
                    name="user_name"
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-red-600 focus:outline-none transition-all text-zinc-200 placeholder:text-zinc-700"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-400 uppercase tracking-widest">Email</label>
                  <input 
                    name="user_email"
                    required
                    type="email" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-red-600 focus:outline-none transition-all text-zinc-200 placeholder:text-zinc-700"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-red-600 focus:outline-none transition-all text-zinc-200 placeholder:text-zinc-700"
                    placeholder="Briefly describe your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-red-900/20 active:scale-95"
                >
                  {status === 'sending' ? 'PROCESSING...' : 'SEND MESSAGE'}
                </button>

                {/* Feedback */}
                {status === 'success' && (
                  <p className="text-emerald-500 text-center font-medium animate-pulse">✓ Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-center font-medium">✕ Error sending message. Please try again.</p>
                )}
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

      {/* CAD Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop - clicking this also closes */}
          <div 
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-6 md:p-10">
              {/* Main Image */}
              <div className="aspect-video bg-zinc-800 rounded-xl mb-8 overflow-hidden border border-zinc-700 shadow-inner">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-zinc-100">{selectedProject.title}</h3>
                
                <div className="space-y-4 text-zinc-400 text-lg leading-relaxed border-l-2 border-rose-600 pl-6">
                  <p className="font-medium text-zinc-200">{selectedProject.description}</p>
                  <p>{selectedProject.fullDescription}</p>
                </div>
                
                <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  {selectedProject.onshapeLink && (
                    <a 
                      href={selectedProject.onshapeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-rose-500 hover:text-rose-400 font-bold transition-colors"
                    >
                      <ExternalLink size={20} />
                      View 3D Model in OnShape
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-rose-900/20"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
