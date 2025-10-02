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
      title: "Peak Lane Saudi Website",
      category: "Web Development",
      description: "A modern business website for Peak Lane Saudi with responsive design, animations, and smooth user experience.",
      image: "https://i.ibb.co/LvngD2B/peaklane.png", // ekta screenshot link use korle valo hobe
      tech: ["React", "Tailwind CSS", "GSAP", "Netlify"],
      gradient: "from-blue-500 to-indigo-500",
      live: "https://peak-lane-saudi.netlify.app/",
      github: ""
    },
    {
      title: "BestMart BD E-commerce",
      category: "E-commerce",
      description: "Bangladesh based online marketplace with full-featured shopping experience, cart, checkout, and order management.",
      image: "https://i.ibb.co/XWZCGLt/bestmart.png", // ekhane real screenshot dile aro professional hobe
      tech: ["PHP", "MySQL", "Bootstrap", "cPanel"],
      gradient: "from-green-500 to-teal-500",
      live: "https://bestmartbd.com/",
      github: ""
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
                    {project.live && (
                      <Button asChild size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
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
