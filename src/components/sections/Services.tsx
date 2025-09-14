import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Code2, 
  Palette, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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
            end: "bottom 20%",
          }
        }
      );

      // Services cards animation
      gsap.fromTo(".service-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
            end: "bottom 20%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Vue.js.",
      features: ["React & Next.js", "WordPress & PHP", "Laravel Development", "Progressive Web Apps"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Flutter App Development",
      description: "Cross-platform mobile applications that deliver native performance on both iOS and Android.",
      features: ["Cross-Platform", "Native Performance", "Custom UI/UX", "App Store Deployment"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and analytics.",
      features: ["Shopify & WooCommerce", "Payment Integration", "Inventory Management", "SEO Optimization"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Code2,
      title: "Custom Web Applications",
      description: "Tailored web applications that solve specific business problems and streamline operations.",
      features: ["Custom Development", "API Integration", "Database Design", "Cloud Deployment"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging experiences and drives conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and optimization to keep your digital assets running smoothly.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Technical Support"],
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 opacity-0"
          >
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to transform your business and create exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card card-glass p-8 group hover:scale-105 transition-all duration-300"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Service Content */}
              <h3 className="heading-md mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring your project to life?
          </p>
          <Button size="lg" className="btn-hero">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;