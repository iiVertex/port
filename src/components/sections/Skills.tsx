'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge'; 

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const skills = [
    { name: 'React', icon: '⚛️', category: 'Frontend', color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', icon: '▲', category: 'Frontend', color: 'from-gray-800 to-gray-600' },
    { name: 'TypeScript', icon: 'TS', category: 'Language', color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript', icon: 'JS', category: 'Language', color: 'from-yellow-400 to-orange-400' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling', color: 'from-teal-400 to-cyan-400' },
    { name: 'GSAP', icon: '🎬', category: 'Animation', color: 'from-green-400 to-emerald-400' },
    { name: 'Framer Motion', icon: '🎭', category: 'Animation', color: 'from-purple-400 to-pink-400' },
    { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'from-green-500 to-green-400' },
    { name: 'MongoDB', icon: '🍃', category: 'Database', color: 'from-green-600 to-green-400' },
    { name: 'Git', icon: '📦', category: 'Tools', color: 'from-orange-500 to-red-500' },
    { name: 'Figma', icon: '🎯', category: 'Design', color: 'from-purple-500 to-pink-500' },
    { name: 'HTML5', icon: '🌐', category: 'Frontend', color: 'from-orange-500 to-red-500' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {      // Animate skill cards on scroll
      gsap.fromTo('.skill-card', 
        {
          opacity: 0,
          y: 30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Hover animations for skill cards
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            rotate: 2,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </div>        <div ref={skillsRef} className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="category-section">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Badge variant="outline" className="mr-3 px-3 py-1">
                  {category}
                </Badge>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.name} 
                      className="skill-card group relative p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Gradient background that appears on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>        {/* Additional technologies grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Material-UI', 'Chakra UI',
              'Redux', 'Zustand', 'REST APIs', 'GraphQL', 'Firebase', 'Vercel',
              'Netlify', 'Jest', 'Cypress', 'Webpack', 'Vite', 'ESLint'
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
