import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Smartphone, Globe } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(iconsRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="heading-xl mb-6 opacity-0"
          >
            Transform Your Vision Into 
            <span className="text-gradient block">Digital Reality</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed opacity-0"
          >
            We craft exceptional web applications, mobile apps, and digital experiences 
            that drive business growth and user engagement.
          </p>

          {/* CTA Buttons */}
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0"
          >
            <Button 
              size="lg" 
              className="btn-hero group"
              onClick={() => scrollToSection('#contact')}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-secondary"
              onClick={() => scrollToSection('#portfolio')}
            >
              View Our Work
            </Button>
          </div>

          {/* Service Icons */}
          <div 
            ref={iconsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto opacity-0"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Web Development</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center shadow-lg">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Custom Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;