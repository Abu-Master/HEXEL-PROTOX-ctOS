
import React, { useState, useEffect } from 'react';
import PageWrapper from '@/components/Layout/PageWrapper.tsx';
import TerminalText from '@/components/ui/TerminalText.tsx';
import GlitchText from '@/components/ui/GlitchText.tsx';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const tabs = [
    { id: 'profile', label: 'PROFILE' },
    { id: 'bio', label: 'BIO' },
    { id: 'status', label: 'STATUS' }
  ];

  return (
    <PageWrapper title="PROFILE NODE">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-1">
      <div className="ctos-border-animated p-1 h-64 md:h-96 mb-4 relative overflow-hidden">
        
        {/* Profile Image with Scan Effect */}
        <div className="h-full w-full bg-ctos-bg-light flex items-center justify-center overflow-hidden relative">
          <div className="text-8xl text-ctos-cyan/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            


            
           {/* Updated Image Box */}
<div className="relative w-full max-w-lg mx-auto p-4 flex justify-center items-center">
    {/* This large div represents the main content area for better centering */}
    
    <img
        // Use the large image from your screenshot
        src="https://i.ibb.co/ccnrtS6D/x.jpg"
        alt="Profile Avatar"
        
        // Tailwind classes for the box style:
        className="
            w-full h-auto 
            object-cover 
            aspect-square 
            border-2 
            border-ctos-cyan 
            
            /* The 'p-0.5' padding class was REMOVED here */
            
            max-w-xs md:max-w-sm
        "
    />
    
    {/*
    Note: Removing 'p-0.5' should make the image content expand
    to the maximum width/height allowed by the border.
    */}
</div>





          </div>
              
              {/* Scan effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="h-1 bg-ctos-cyan/20 w-full absolute animate-scanline" 
                     style={{animationDuration: '4s'}}></div>
              </div>
              
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ctos-cyan"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-ctos-cyan"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-ctos-cyan"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-ctos-cyan"></div>
            </div>
          </div>
          
          <div className="ctos-border p-4 bg-ctos-bg-light/50">
            <div className="flex justify-between items-center mb-3 border-b border-ctos-cyan/20 pb-2">
              <span className="text-xs text-gray-400">SYS INTEGRITY</span>
              <span className="text-ctos-green text-xs">STABLE</span>
            </div>
            <div className="flex justify-between items-center mb-3 border-b border-ctos-cyan/20 pb-2">
              <span className="text-xs text-gray-400">UPTIME</span>
              <span className="text-ctos-blue text-xs">832 DAYS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">SECURITY LEVEL</span>
              <span className="text-ctos-red text-xs">ACCESS RESTRICTED</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {/* Tabs Navigation */}
          <div className="flex border-b border-ctos-cyan/30 mb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs tracking-wider ${
                  activeTab === tab.id 
                    ? 'text-ctos-cyan border-b-2 border-ctos-cyan -mb-px' 
                    : 'text-gray-400 hover:text-ctos-cyan'
                }`}
              >
                {tab.id === activeTab ? (
                  <GlitchText text={tab.label} intensity="low" />
                ) : tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="ctos-border bg-black/20 p-6 h-[calc(100%-3rem)]">
            {activeTab === 'profile' && (
              <div>
                {!isLoaded ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="w-8 h-8 border-t-2 border-ctos-cyan rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="animate-slide-up">
                    <TerminalText
                      lines={[
                        "Name: Abu Ubaidah",
                        "OS Name: HEXEL PROTOX",
                        "Status: Active",
                        "Location: [REDACTED]",
                        "Specialization: Intelligent Systems",
                        "Specialization: OSINT Tools",
                        "Specialization: Automation Bots",
                        "Specialization: Full-Stack Development",
                        "Specialization: Reverse Engineering and Modding",
                        "Access Level: 5 (Administrator)",
                        "Neural Network Synced: ✅",
                        "System Scan: Complete",
                        "Firewall Status: Active 🔒",
                        "Modules Loaded: 12/12",
                        "Recent Activity: Code Audit | Security Patch | Deployment",
                        "Threat Detection: Online 🛡️",
                        "Network Latency: 21ms",
                        "Cores Active: 8/8",
                        "Encryption Keys: Synced",
                        "Terminal Ready: HEXEL PROTOX OS v2.0",
                        "Welcome, Operator — All Systems Operational"
                      ]}
                      typingSpeed={30}
                    />
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'bio' && (
              <div className="space-y-4 text-sm text-gray-300">
                <p>I am an expert in digital deception and virtual counterintelligence, specializing in front-end systems and user interface design. My work focuses on crafting deceptive front-facing systems that seamlessly mask complex security infrastructures, ensuring both functionality and stealth.</p>

                <p>Trained in multiple programming languages and design frameworks, I engineer systems where aesthetics and performance meet security. Every interface I design is meticulously structured to mislead adversaries while providing intuitive, resilient experiences for legitimate users.</p>

                <p>My approach merges creativity with precision, transforming complex technical challenges into elegant, secure solutions. I maintain top-tier security protocols across all projects, ensuring that systems are not only efficient but resilient against modern digital threats.</p>

                <p>My approach merges creativity with precision, transforming complex technical challenges into elegant, secure solutions. I maintain top-tier security protocols across all projects, ensuring that systems are not only efficient but resilient against modern digital threats.</p>

                <p>As a result, I am able to deliver high-quality, secure systems that meet the needs of users while also protecting against potential threats.</p>

                <div className="mt-6 pt-4 border-t border-ctos-cyan/20">
                  <div className="text-xs text-ctos-cyan mb-2">DIGITAL SIGNATURE:</div>
                  <div className="font-mono text-xs opacity-70">
                    0xF49DB23A7CE5108FD62BA80C1E5F9A3C4D6E7F81
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'status' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-gray-400 mb-1">SYSTEM LOAD</div>
                  <div className="w-full bg-gray-800 h-2 rounded-sm overflow-hidden">
                    <div className="bg-ctos-green h-full animate-pulse" style={{ width: '42%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500">42%</span>
                    <span className="text-ctos-green">OPTIMAL</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-1">NETWORK ACTIVITY</div>
                  <div className="w-full bg-gray-800 h-2 rounded-sm overflow-hidden">
                    <div className="bg-ctos-blue h-full animate-pulse" style={{ width: '78%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500">78%</span>
                    <span className="text-ctos-blue">HIGH</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-1">SECURITY ALERTS</div>
                  <div className="w-full bg-gray-800 h-2 rounded-sm overflow-hidden">
                    <div className="bg-ctos-red h-full animate-pulse" style={{ width: '23%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500">23%</span>
                    <span className="text-ctos-red">MONITORED</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-ctos-cyan/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="ctos-border p-3 bg-black/40">
                      <div className="text-xs text-gray-400">ACTIVE SESSIONS</div>
                      <div className="text-xl text-ctos-cyan mt-1">03</div>
                    </div>
                    <div className="ctos-border p-3 bg-black/40">
                      <div className="text-xs text-gray-400">THREAT LEVEL</div>
                      <div className="text-xl text-ctos-green mt-1">LOW</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
