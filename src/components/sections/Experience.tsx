'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      description: 'Leading frontend development for enterprise web applications, mentoring junior developers, and implementing modern development practices.',
      technologies: ['React', 'Next.js', 'TypeScript', 'GSAP', 'Tailwind CSS'],
      achievements: [
        'Improved application performance by 40% through optimization',
        'Led a team of 4 frontend developers',
        'Implemented design system used across 5+ products'
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2022 - 2023',
      description: 'Developed responsive web applications from design mockups, collaborated with UX designers, and maintained high-quality code standards.',
      technologies: ['React', 'JavaScript', 'Sass', 'Material-UI', 'Node.js'],
      achievements: [
        'Built 10+ responsive web applications',
        'Reduced bug reports by 60% through comprehensive testing',
        'Collaborated with design team to improve user experience'
      ]
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Created websites for clients across various industries, learned modern development practices, and contributed to team projects.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
      achievements: [
        'Delivered 20+ client websites on time',
        'Learned React and modern JavaScript frameworks',
        'Maintained 98% client satisfaction rate'
      ]
    },
    {
      id: 4,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2020 - 2021',
      description: 'Built custom websites for small businesses, learned web development fundamentals, and established online presence.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
      achievements: [
        'Completed 15+ freelance projects',
        'Built strong foundation in web technologies',
        'Developed project management skills'
      ]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate timeline items
      gsap.fromTo('.timeline-item', 
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate timeline line
      gsap.fromTo('.timeline-line', 
        {
          height: '0%'
        },
        {
          height: '100%',
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through the tech industry, building expertise and delivering impactful solutions.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 w-0.5 bg-gray-200 timeline-line-container">
            <div className="timeline-line bg-gradient-to-b from-blue-500 to-purple-500 w-full"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-1/2 top-6"></div>
                
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-800">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
