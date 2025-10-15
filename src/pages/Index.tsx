
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/Layout/PageWrapper.tsx';
import TerminalText from '@/components/ui/TerminalText.tsx';
import GlitchText from '@/components/ui/GlitchText.tsx';
import { User, File, Calendar, Code, Mail } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { 
      id: 'about', 
      title: 'PROFILE', 
      icon: <User size={20} className="mb-2 text-ctos-cyan" />,
      path: '/about',
      color: 'cyan'
    },
    { 
      id: 'experience', 
      title: 'KNOWLEDGE LOG', 
      icon: <File size={20} className="mb-2 text-ctos-blue" />,
      path: '/experience',
      color: 'blue'
    },
    { 
      id: 'skills', 
      title: 'SYS SKILLS', 
      icon: <Code size={20} className="mb-2 text-ctos-green" />,
      path: '/skills',
      color: 'green'
    },
    { 
      id: 'services', 
      title: 'SERVICES', 
      icon: <Calendar size={20} className="mb-2 text-ctos-blue" />,
      path: '/services',
      color: 'blue'
    },
    { 
      id: 'contact', 
      title: 'TRANSMISSION', 
      icon: <Mail size={20} className="mb-2 text-ctos-red" />,
      path: '/contact',
      color: 'red'
    }
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <PageWrapper withGrid={true} withScanlines={true}>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)]">
        {!isLoaded ? (
          <div className="text-center">
            <div className="w-24 h-24 mb-8 mx-auto border-2 border-ctos-cyan rounded-full flex items-center justify-center relative">
              <div className="w-16 h-16 border-2 border-ctos-cyan rounded-full animate-pulse"></div>
              <div className="absolute inset-0 border-t-2 border-ctos-cyan rounded-full animate-spin"></div>
            </div>
            
            <TerminalText
              lines={[
                "Initializing Profile...",
                "Accessing Node #117-C...",
                "Performing security scan...",
                "Verifying credentials...",
                "Access Granted."
              ]}
              className="max-w-md mx-auto"
              onComplete={() => setIsLoaded(true)}
            />
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto border-2 border-ctos-cyan rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="text-4xl font-orbitron text-ctos-cyan">ctOS</div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ctos-cyan/20"></div>
                <div className="absolute inset-0 border-t-2 border-ctos-cyan/50 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
              
              <div className="mt-6 mb-10">
                <h1 className="text-3xl font-orbitron">
                  <GlitchText text="WELCOME TO HEXEL PROTOX ctOS V2.0" color="cyan" />
                </h1>
                <p className="text-gray-400 mt-2">Personal Intelligence System</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.path)}
                  className="ctos-border p-4 flex flex-col items-center transition-all duration-300 hover:bg-black/20 hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] focus:outline-none"
                >
                  {item.icon}
                  <span className={`text-xs font-orbitron text-ctos-${item.color === 'cyan' ? 'cyan' : item.color}`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Index;
