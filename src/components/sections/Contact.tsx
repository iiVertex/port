'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Github, Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate contact content
      gsap.fromTo(contentRef.current, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate social cards
      gsap.fromTo('.social-card', 
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/_4mm4r___',
      description: 'Follow my creative journey',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/iiVertex',
      description: 'Check out my code',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:vertex@example.com',
      description: 'Lets talk business',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">            I&apos;m always excited to collaborate on new projects, discuss innovative ideas, 
            or simply have a chat about the latest in web development.
          </p>
          
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-semibold mb-4">Ready to start a project?</h3>
            <p className="text-gray-600 mb-6">
              Whether you need a stunning website, a complex web application, or just want to 
              improve your existing digital presence, I&apos;m here to help bring your vision to life.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Start a Conversation
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Card 
                key={link.name} 
                className="social-card group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                onClick={() => window.open(link.url, '_blank')}
              >
                <div className={`h-2 bg-gradient-to-r ${link.color}`} />
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-gray-100 transition-colors"
                  >
                    Connect
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2024 Vertex. Crafted with ❤️ using Next.js, GSAP, and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with modern technologies and a passion for exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
