
import React, { useState } from 'react';
import PageWrapper from '@/components/Layout/PageWrapper.tsx';
import GlitchText from '@/components/ui/GlitchText.tsx';

interface Service {
  id: string;
  title: string;
  description: string;
  code: string;
  level: 'Low' | 'Medium' | 'High' | 'Critical';
  icon: string;
}

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  const services: Service[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Custom web applications with modern frameworks. Responsive, accessible, and optimized for performance.',
      code: 'CON-773-WD',
      level: 'Medium',
      icon: '💻'
    },
    {
      id: 'sec-audit',
      title: 'Security Auditing',
      description: 'Comprehensive security assessment of your applications and infrastructure. Vulnerability detection and remediation guidance.',
      code: 'CON-451-SA',
      level: 'High',
      icon: '🔒'
    },
    {
      id: 'ui-design',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that balance aesthetics with functionality. From wireframes to high-fidelity mockups.',
      code: 'CON-224-UI',
      level: 'Low',
      icon: '🎨'
    },
    {
      id: 'pen-test',
      title: 'Penetration Testing',
      description: 'Simulated cyberattacks to identify security weaknesses before malicious actors exploit them.',
      code: 'CON-982-PT',
      level: 'Critical',
      icon: '🛡️'
    },
    {
      id: 'code-review',
      title: 'Code Review',
      description: 'Detailed analysis of your codebase to improve quality, security, and performance.',
      code: 'CON-337-CR',
      level: 'Medium',
      icon: '📝'
    },
    {
      id: 'seo-opt',
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility in search engine results through technical and content optimizations.',
      code: 'CON-118-SO',
      level: 'Low',
      icon: '🔍'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'High-quality, cross-platform (React Native/Flutter) and native (iOS/Android) mobile applications with seamless backend integration for exceptional user experiences.',
      code: 'CON-811-MA',
      level: 'High',
      icon: '📱'
    },
    {
      id: 'automation',
      title: 'Custom Tools & Automation',
      description: 'Development of intelligent bots, OSINT tools, and custom APIs to streamline workflows, visualize complex data, and automate repetitive tasks.',
      code: 'CON-605-AT',
      level: 'Medium',
      icon: '🤖'
    },
    {
      id: 'bug-bounty',
      title: 'Bug Bounty Consultation',
      description: 'Guidance and execution of comprehensive vulnerability hunting to report security flaws and secure deserved rewards.',
      code: 'CON-590-BB',
      level: 'Critical',
      icon: '💰'
    },
    {
      id: 'digi-forensics',
      title: 'Digital Forensics & Recovery',
      description: 'Investigation and recovery of digital evidence from computers and mobile devices, specializing in data retrieval and forensic analysis.',
      code: 'CON-133-DF',
      level: 'Critical',
      icon: '🔬'
    }
  ];
  
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Low': return 'text-ctos-green';
      case 'Medium': return 'text-ctos-blue';
      case 'High': return 'text-ctos-cyan';
      case 'Critical': return 'text-ctos-red';
      default: return 'text-gray-400';
    }
  };

  return (
    <PageWrapper title="AVAILABLE SERVICES">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="glass-morphism relative overflow-hidden group"
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Background scan effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ctos-cyan/5 pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
            
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ctos-cyan/50 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-ctos-cyan/50 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-ctos-cyan/50 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-ctos-cyan/50 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
            
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-orbitron text-white">
                    <GlitchText 
                      text={service.title}
                      intensity={activeService === service.id ? 'medium' : 'low'}
                      color={activeService === service.id ? 'cyan' : 'blue'}
                    />
                  </h3>
                  <div className="text-xs text-ctos-cyan mt-1 font-mono">
                    {service.code}
                  </div>
                </div>
                <div className="text-2xl">{service.icon}</div>
              </div>
              
              <p className="text-sm text-gray-300 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-700/30">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">
                    <span>&gt;&gt; Infiltration Level: </span>
                    <span className={getLevelColor(service.level)}>{service.level}</span>
                  </div>
                  
                  <button className="px-3 py-1 text-xs bg-ctos-cyan/10 text-ctos-cyan border border-ctos-cyan/30 hover:bg-ctos-cyan/20 transition-colors">
                    Initiate Contract
                  </button>
                </div>
              </div>
              
              {/* Scan line */}
              <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="h-px bg-ctos-cyan/30 w-full absolute top-1/2 animate-scanline"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 ctos-border p-4 bg-black/20">
        <h3 className="text-sm font-orbitron mb-3 text-ctos-cyan">STANDARD SERVICES TERMS</h3>
        <div className="mt-10 ctos-border p-4 bg-black/20">
    <h3 className="text-sm font-orbitron mb-3 text-ctos-cyan">STANDARD SERVICE TERMS</h3>
    <div className="text-xs text-gray-400 space-y-3">
        {/* Original Service Disclaimers - Corrected for HTML bolding */}
        <p>All services are subject to a <strong>mandatory security clearance check</strong> and the execution of a standard <strong>non-disclosure agreement</strong> (NDA) prior to project commencement.</p>
        <p>Contract <strong>rates vary</strong> based on the final scope's <strong>complexity, required security level</strong>, and project <strong>timeline</strong>.</p>
        <p>For detailed rate information or to submit <strong>custom service requests</strong>, utilize the <strong>secure transmission form</strong> in the CONTACT section.</p>

        {/* Corrected: className used for React/JSX */}
        <hr className="border-gray-700 my-2" />

        {/* Project and Pricing Terms - Corrected for HTML bolding */}
        <h5 className="text-white font-semibold mt-4">PROJECT MANAGEMENT & PRICING:</h5>
        
        <p>Project communication operates on a <strong>clear and consistent</strong> model, featuring <strong>regular check-ins</strong> via the client's preferred method (email, Slack, video calls). Clients receive access to a dedicated <strong>project management tool</strong> for <strong>real-time progress tracking</strong>.</p>
        
        <p>Post-completion, <strong>ongoing maintenance and support packages</strong> are available. These services ensure the application remains <strong>secure, current, and optimally performing</strong> as per an agreed-upon plan.</p>
        
        <p>Project <strong>timelines</strong> are highly specific and <strong>variable</strong> based on the defined scope and complexity (e.g., audit vs. build). A <strong>detailed timeline</strong> is formalized within the <strong>initial project proposal</strong>.</p>
        
        <p>The pricing structure is <strong>flexible</strong>, encompassing <strong>fixed-price</strong> models for well-defined scopes and <strong>hourly rates</strong> for exploratory or sustained work. <strong>Detailed proposals</strong> are issued before project start, guaranteeing <strong>full transparency</strong> on all costs.</p>

    </div>
</div>
      </div>
    </PageWrapper>
  );
};

export default Services;
