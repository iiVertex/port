'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([nameRef.current, titleRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');

      // Floating animation for the chevron
      gsap.to('.chevron-float', {
        y: 10,
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 
          ref={nameRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Vertex
          </span>
        </h1>
        
        <p 
          ref={titleRef}
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 font-light"
        >
          Frontend Developer & UI/UX Enthusiast
        </p>
        
        <div ref={ctaRef} className="space-y-6">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting beautiful, responsive, and user-centric web experiences 
            with modern technologies and creative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 chevron-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
