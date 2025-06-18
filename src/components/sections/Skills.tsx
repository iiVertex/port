'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Language' },
    { name: 'JavaScript', level: 95, category: 'Language' },
    { name: 'Tailwind CSS', level: 90, category: 'Styling' },
    { name: 'GSAP', level: 75, category: 'Animation' },
    { name: 'Framer Motion', level: 80, category: 'Animation' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'MongoDB', level: 65, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Figma', level: 80, category: 'Design' },
    { name: 'Responsive Design', level: 95, category: 'Frontend' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate skills on scroll
      gsap.fromTo('.skill-item', 
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
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate progress bars
      gsap.fromTo('.skill-bar', 
        {
          width: '0%'
        },
        {
          width: (index, target) => {
            const level = target.getAttribute('data-level');
            return `${level}%`;
          },
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

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
        </div>

        <div ref={skillsRef} className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="skill-item">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Badge variant="outline" className="mr-3 px-3 py-1">
                  {category}
                </Badge>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="skill-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                          data-level={skill.level}
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional technologies grid */}
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
                className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default"
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
