import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Award, 
  Users, 
  Coffee, 
  Star,
  CheckCircle,
  Target,
  Lightbulb,
  Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats animation
      gsap.fromTo(".stat-item",
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        }
      );

      // Team cards animation
      gsap.fromTo(".team-card",
        { opacity: 0, y: 60, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 70%",
          }
        }
      );

      // Values animation
      gsap.fromTo(".value-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Award, number: "200+", label: "Projects Completed" },
    { icon: Coffee, number: "5+", label: "Years Experience" },
    { icon: Star, number: "98%", label: "Client Satisfaction" },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      name: "Sarah Chen",
      role: "Flutter Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b4c0?auto=format&fit=crop&w=300&q=80",
      skills: ["Flutter", "Dart", "Firebase", "iOS/Android"]
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      skills: ["Figma", "Adobe CC", "Prototyping", "User Research"]
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      skills: ["Agile", "Scrum", "Jira", "Client Relations"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive your business forward."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure flawless user experiences."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships through transparent communication and collaboration."
    }
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            About <span className="text-gradient">WebForge Agency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers, designers, and digital strategists dedicated to 
            transforming businesses through innovative web and mobile solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-item text-center card-glass p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="heading-md text-center mb-12">Meet Our <span className="text-gradient">Expert Team</span></h3>
          <div 
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <div 
                key={index}
                className="team-card card-glass text-center p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef}>
          <h3 className="heading-md text-center mb-12">Our <span className="text-gradient">Core Values</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-item flex items-start space-x-4 card-glass p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Mission */}
        <div className="mt-20 text-center card-glass p-12">
          <h3 className="heading-md mb-6">Our <span className="text-gradient">Mission</span></h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
            and create lasting value in an ever-evolving digital landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Quality First</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">On-Time Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Ongoing Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;