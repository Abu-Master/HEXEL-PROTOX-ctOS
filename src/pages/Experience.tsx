
import React, { useState } from 'react';
import PageWrapper from '@/components/Layout/PageWrapper.tsx';
import GlitchText from '@/components/ui/GlitchText.tsx';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const experienceData = [
    {
      id: 'exp1',
      period: '2023-2025',
      title: 'Sr. Penetration Tester',
      company: 'Cybershield Inc.',
      description: 'Led security audits for Fortune 500 clients, identifying critical vulnerabilities in web applications and network infrastructure.',
      tags: ['Security Testing', 'Vulnerability Assessment', 'Remediation']
    },
    {
      id: 'exp2',
      period: '2021-2023',
      title: 'Frontend Developer',
      company: 'DigitalHarbor Solutions',
      description: 'Developed responsive web applications using React and TypeScript, implementing modern UI/UX practices and ensuring accessibility compliance.',
      tags: ['React', 'TypeScript', 'UI/UX Design']
    },
    {
      id: 'exp3',
      period: '2019-2021',
      title: 'Security Analyst',
      company: 'NetGuard Systems',
      description: 'Monitored network traffic for suspicious activity, investigated security breaches, and implemented security controls to prevent future incidents.',
      tags: ['Incident Response', 'Network Security', 'Threat Intelligence']
    },
    {
      id: 'exp4',
      period: 'January 2021 - Present',
      title: 'Senior Full Stack Developer',
      company: 'TechInnovate Solutions',
      description: 'Led development of enterprise-level web and mobile applications. Architected a healthcare system for 50k+ patients (40% efficiency increase) and a fintech platform processing $2M daily transactions. Implemented CI/CD pipelines (70% reduction in deployment time). Mentored junior developers.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Leadership']
    },
    {
      id: 'exp5',
      period: 'March 2019 - December 2020',
      title: 'Frontend Developer',
      company: 'Digital Craft Agency',
      description: 'Developed responsive, high-performance web applications for over 15 clients. Implemented performance optimizations that improved page load times by 35%. Introduced modern frontend practices and tools.',
      tags: ['JavaScript', 'React', 'Vue.js', 'SASS', 'Webpack', 'Jest', 'UX/UI']
    },
    {
      id: 'exp6',
      period: 'June 2017 - February 2019',
      title: 'Mobile App Developer',
      company: 'AppWave Technologies',
      description: 'Developed native and cross-platform mobile apps, including a fitness tracker (100k+ downloads) and a real-time messaging app (50k+ DAU). Optimized app performance, reducing memory usage by 30%.',
      tags: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'Jest', 'Mobile']
    },
    {
      id: 'exp7',
      period: 'January 2016 - May 2017',
      title: 'Junior Web Developer',
      company: 'WebSphere Solutions',
      description: 'Gained foundational experience developing and maintaining client websites and assisting with a content management system. Ensured responsive designs and cross-browser compatibility.',
      tags: ['HTML/CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'WordPress']
    }
  ];
  
  const educationData = [
    {
      id: 'edu4',
      period: '2014 - 2016',
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Completed thesis on "Optimizing Performance in Large-Scale Web Applications".',
      tags: ['Software Engineering', 'Artificial Intelligence', 'Thesis']
    },
    {
      id: 'edu5',
      period: '2010 - 2014',
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Massachusetts Institute of Technology',
      description: 'Graduated with honors. Participated in multiple hackathons and coding competitions. Active member of the Web Development Club.',
      tags: ['Honors', 'Hackathons', 'Coding Competitions', 'Web Development']
    },
    {
      id: 'cert6',
      period: '2023',
      degree: 'Offensive Security Certified Professional (OSCP)',
      institution: 'Offensive Security',
      description: 'Completed a rigorous 24-hour practical exam demonstrating mastery of penetration testing techniques and methodology.',
      tags: ['Penetration Testing', 'Offensive Security', 'Ethical Hacking', 'Certification']
    },
    {
      id: 'cert1',
      period: '2023',
      degree: 'Certified Ethical Hacker (CEH)',
      institution: 'EC-Council',
      description: 'Professional certification in ethical hacking methodologies and practices, covering security fundamentals and hands-on techniques.',
      tags: ['Ethical Hacking', 'Vulnerability Assessment', 'Certification']
    },
    {
      id: 'cert4',
      period: '2022',
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      description: 'Validated expertise in designing scalable, highly available, and fault-tolerant systems on the AWS platform.',
      tags: ['AWS', 'Cloud Architecture', 'System Design', 'Certification']
    },
    {
      id: 'cert7',
      period: '2022',
      degree: 'Cisco Certified Network Associate (CCNA)',
      institution: 'Cisco',
      description: 'Foundational knowledge of networking concepts, security, automation, and programmable networks.',
      tags: ['Networking', 'Cisco', 'TCP/IP', 'Certification']
    },
    {
      id: 'cert5',
      period: '2021',
      degree: 'React Native Specialist',
      institution: 'Meta (Facebook)',
      description: 'Demonstrated proficiency in building and deploying cross-platform mobile applications using React Native.',
      tags: ['React Native', 'Mobile Development', 'Meta', 'Certification']
    },
    {
      id: 'cert8',
      period: '2021',
      degree: 'Certified Bug Bounty Hunter',
      institution: 'HackerOne',
      description: 'Certification demonstrating practical skills in discovering and reporting security vulnerabilities in web applications.',
      tags: ['Bug Bounty', 'Web Security', 'Vulnerability Discovery', 'Certification']
    },
    {
      id: 'cert3',
      period: '2020',
      degree: 'Google Cloud Professional Developer',
      institution: 'Google',
      description: 'Certified in building and deploying scalable and resilient applications on the Google Cloud Platform.',
      tags: ['GCP', 'Cloud Development', 'DevOps', 'Certification']
    },
    {
      id: 'edu6',
      period: '2019',
      degree: 'iOS App Development with Swift',
      institution: 'Apple',
      description: 'Completed a specialized course covering native iOS application design, Swift programming, and App Store submission processes.',
      tags: ['iOS', 'Swift', 'Mobile Development']
    },
  ];
  
  return (
    <PageWrapper title="KNOWLEDGE LOG">
      {/* Tabs Navigation */}
      <div className="flex border-b border-ctos-cyan/30 mb-6">
        <button
          onClick={() => setActiveTab('experience')}
          className={`px-4 py-2 text-xs tracking-wider ${
            activeTab === 'experience' 
              ? 'text-ctos-blue border-b-2 border-ctos-blue -mb-px' 
              : 'text-gray-400 hover:text-ctos-blue'
          }`}
        >
          EXPERIENCE
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-4 py-2 text-xs tracking-wider ${
            activeTab === 'education' 
              ? 'text-ctos-green border-b-2 border-ctos-green -mb-px' 
              : 'text-gray-400 hover:text-ctos-green'
          }`}
        >
          EDUCATION
        </button>
      </div>
      
      {/* Timeline Content */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:translate-x-px"></div>
        
        <div className="pb-12">
          {activeTab === 'experience' ? (
            experienceData.map((item, index) => (
              <div
                key={item.id}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline bullet */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-ctos-blue transform -translate-x-1.5 md:-translate-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-ctos-blue animate-ping opacity-75"></div>
                </div>
                
                {/* Left side (date for desktop) - empty on mobile */}
                <div className="md:text-right hidden md:block">
                  <h3 className="text-ctos-blue font-orbitron">
                    <span className="text-xs mr-1">&gt;</span>
                    {item.period}
                  </h3>
                  <div className="mt-1 text-gray-400 text-sm">{item.company}</div>
                </div>
                
                {/* Right side (content) - full width on mobile */}
                <div className="col-span-1 md:col-span-1 ml-8 md:ml-0">
                  <div className="ctos-border p-4 bg-black/20 hover:bg-black/40 transition-colors">
                    {/* Mobile-only date */}
                    <h3 className="text-ctos-blue font-orbitron md:hidden">
                      <span className="text-xs mr-1">&gt;</span>
                      {item.period}
                    </h3>
                    
                    <h4 className="text-white font-orbitron mt-1">
                      <GlitchText text={item.title} intensity="low" color="blue" />
                    </h4>
                    <p className="text-gray-300 text-sm mt-3">{item.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-ctos-blue/10 border border-ctos-blue/30 text-ctos-blue">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline bullet */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-ctos-green transform -translate-x-1.5 md:-translate-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-ctos-green animate-ping opacity-75"></div>
                </div>
                
                {/* Left side (date for desktop) - empty on mobile */}
                <div className="md:text-right hidden md:block">
                  <h3 className="text-ctos-green font-orbitron">
                    <span className="text-xs mr-1">&gt;</span>
                    {item.period}
                  </h3>
                  <div className="mt-1 text-gray-400 text-sm">{item.institution}</div>
                </div>
                
                {/* Right side (content) - full width on mobile */}
                <div className="col-span-1 md:col-span-1 ml-8 md:ml-0">
                  <div className="ctos-border p-4 bg-black/20 hover:bg-black/40 transition-colors">
                    {/* Mobile-only date */}
                    <h3 className="text-ctos-green font-orbitron md:hidden">
                      <span className="text-xs mr-1">&gt;</span>
                      {item.period}
                    </h3>
                    
                    <h4 className="text-white font-orbitron mt-1">
                      <GlitchText text={item.degree} intensity="low" color="green" />
                    </h4>
                    <p className="text-gray-300 text-sm mt-3">{item.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-ctos-green/10 border border-ctos-green/30 text-ctos-green">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
