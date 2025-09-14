import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Portfolio items animation
      gsap.fromTo(".portfolio-item",
        { opacity: 0, y: 60, rotateY: 15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with React, Next.js, and Stripe integration. Features advanced product filtering, wishlist functionality, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Flutter Food Delivery App",
      category: "Mobile App",
      description: "Cross-platform food delivery application with real-time tracking, payment integration, and restaurant management system.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      tech: ["Flutter", "Firebase", "Google Maps", "Stripe", "Node.js"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Comprehensive analytics dashboard for SaaS businesses with real-time data visualization, user management, and billing integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Laravel", "MySQL", "Google Maps", "AWS"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Healthcare Management System",
      category: "Web Application",
      description: "Complete healthcare management solution with patient records, appointment scheduling, and telemedicine features.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Flutter-based fitness application with workout tracking, nutrition logging, and social features for fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tech: ["Flutter", "Firebase", "HealthKit", "Google Fit", "Charts"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section 
      id="portfolio"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 opacity-0"
          >
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects showcasing cutting-edge web development and mobile applications.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div 
          ref={portfolioRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item card-glass overflow-hidden group hover:scale-105 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                </div>
                
                <h3 className="heading-md mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Have a project in mind? Let's discuss how we can bring it to life.
          </p>
          <Button size="lg" className="btn-hero">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;