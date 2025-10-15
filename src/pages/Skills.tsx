
import React, { useState, useEffect } from 'react';
import PageWrapper from '@/components/Layout/PageWrapper.tsx';
import GlitchText from '@/components/ui/GlitchText.tsx';

interface Skill {
  name: string;
  percentage: number;
  category: 'technical' | 'tools' | 'softSkills';
  status?: 'active' | 'inactive' | 'upgrading';
  id: string;
}

const Skills = () => {
  const [visibleCategory, setVisibleCategory] = useState<string>('technical');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [loadedSkills, setLoadedSkills] = useState<string[]>([]);
  
  useEffect(() => {
    // Simulate skills loading with a delay
    const skillIds = skills.filter(s => s.category === visibleCategory).map(s => s.id);
    
    skillIds.forEach((id, index) => {
      setTimeout(() => {
        setLoadedSkills(prev => [...prev, id]);
      }, index * 200);
    });
    
    return () => {
      setLoadedSkills([]);
    };
  }, [visibleCategory]);

  const skills: Skill[] = [
    // --- PROGRAMMING LANGUAGES ---
    { id: 'java', name: 'Java', percentage: 95, category: 'technical', status: 'active' },
    { id: 'php', name: 'PHP', percentage: 95, category: 'technical', status: 'active' },
    { id: 'js', name: 'JavaScript', percentage: 90, category: 'technical', status: 'active' },
    { id: 'c_prog', name: 'C', percentage: 90, category: 'technical', status: 'active' },
    { id: 'c++', name: 'C++', percentage: 85, category: 'technical', status: 'active' },
    { id: 'python', name: 'Python', percentage: 80, category: 'technical', status: 'active' },
    { id: 'ts', name: 'TypeScript', percentage: 80, category: 'technical', status: 'active' },

    // --- FRONTEND DEVELOPMENT ---
    { id: 'html', name: 'HTML5/CSS3', percentage: 98, category: 'technical', status: 'active' },
    { id: 'react', name: 'React', percentage: 92, category: 'technical', status: 'active' },
    { id: 'sass', name: 'SASS/SCSS', percentage: 90, category: 'technical', status: 'active' },
    { id: 'tailwind', name: 'Tailwind CSS', percentage: 88, category: 'technical', status: 'active' },
    { id: 'vue', name: 'Vue.js', percentage: 85, category: 'technical', status: 'active' },
    { id: 'angular', name: 'Angular', percentage: 80, category: 'technical', status: 'active' },
    
    // --- BACKEND DEVELOPMENT (Frameworks/Runtimes) ---
    { id: 'node', name: 'Node.js', percentage: 90, category: 'technical', status: 'active' },
    { id: 'express', name: 'Express.js', percentage: 88, category: 'technical', status: 'active' },
    { id: 'django', name: 'Django', percentage: 85, category: 'technical', status: 'active' },
    { id: 'laravel', name: 'Laravel', percentage: 82, category: 'technical', status: 'active' },
    { id: 'flask', name: 'Flask', percentage: 80, category: 'technical', status: 'active' },
    { id: 'spring', name: 'Spring Boot', percentage: 78, category: 'technical', status: 'active' },

    // --- DATABASES & DEVOPS/TOOLS ---
    { id: 'mysql', name: 'MySQL', percentage: 75, category: 'technical', status: 'active' },
    { id: 'bash', name: 'Bash', percentage: 70, category: 'technical', status: 'active' },

    
    // Tools
     // --- SECURITY & PENETRATION TESTING TOOLS ---
    { id: 'kali', name: 'Kali Linux', percentage: 80, category: 'tools', status: 'active' },
    { id: 'burp', name: 'Burp Suite', percentage: 75, category: 'tools', status: 'active' },
    { id: 'metasploit', name: 'Metasploit', percentage: 65, category: 'tools', status: 'inactive' },
    { id: 'nmap', name: 'Nmap', percentage: 80, category: 'tools', status: 'active' },
    { id: 'wireshark', name: 'Wireshark', percentage: 75, category: 'tools', status: 'active' },
    { id: 'john', name: 'John the Ripper', percentage: 70, category: 'tools', status: 'active' },
    { id: 'aircrack', name: 'Aircrack-ng', percentage: 60, category: 'tools', status: 'inactive' },

    // --- DEVOPS & INFRASTRUCTURE ---
    { id: 'git', name: 'Git', percentage: 90, category: 'tools', status: 'active' },
    { id: 'github', name: 'GitHub', percentage: 90, category: 'tools', status: 'active' },
    { id: 'docker', name: 'Docker', percentage: 70, category: 'tools', status: 'active' },
    { id: 'aws', name: 'AWS', percentage: 60, category: 'tools', status: 'upgrading' },
    { id: 'nginx', name: 'Nginx', percentage: 65, category: 'tools', status: 'active' },
    { id: 'cli', name: 'CLI (Command Line)', percentage: 85, category: 'tools', status: 'active' },
    { id: 'ci_cd', name: 'CI/CD', percentage: 75, category: 'tools', status: 'active' },

    // --- PROJECT MANAGEMENT & DESIGN ---
    { id: 'jira', name: 'Jira', percentage: 85, category: 'tools', status: 'active' },
    { id: 'figma', name: 'Figma', percentage: 80, category: 'tools', status: 'active' },
    { id: 'sketch', name: 'Sketch', percentage: 70, category: 'tools', status: 'inactive' },

    
    // Soft Skills
    { id: 'prob', name: 'Problem Solving', percentage: 90, category: 'softSkills', status: 'active' },
    { id: 'comm', name: 'Communication', percentage: 85, category: 'softSkills', status: 'active' },
    { id: 'team', name: 'Teamwork', percentage: 80, category: 'softSkills', status: 'active' },
    { id: 'lead', name: 'Leadership', percentage: 75, category: 'softSkills', status: 'active' },
    { id: 'adapt', name: 'Adaptability', percentage: 95, category: 'softSkills', status: 'active' },
    { id: 'detail', name: 'Attention to Detail', percentage: 90, category: 'softSkills', status: 'active' },
    
    // --- New Soft Skills Added ---
    { id: 'time', name: 'Time Management', percentage: 88, category: 'softSkills', status: 'active' },
    { id: 'create', name: 'Creativity', percentage: 70, category: 'softSkills', status: 'active' },
    { id: 'critical', name: 'Critical Thinking', percentage: 85, category: 'softSkills', status: 'active' },
    { id: 'conflict', name: 'Conflict Resolution', percentage: 78, category: 'softSkills', status: 'active' },
];
  
  const categories = [
    { id: 'technical', label: 'TECHNICAL' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'softSkills', label: 'SOFT SKILLS' }
  ];
  
  const getColorByCategory = (category: string) => {
    switch(category) {
      case 'technical': return 'cyan';
      case 'tools': return 'blue';
      case 'softSkills': return 'green';
      default: return 'cyan';
    }
  };
  
  const getStatusColor = (status?: string) => {
    switch(status) {
      case 'active': return 'bg-ctos-green';
      case 'inactive': return 'bg-ctos-red';
      case 'upgrading': return 'bg-ctos-blue';
      default: return 'bg-gray-500';
    }
  };

  return (
    <PageWrapper title="SKILLS MODULES">
      {/* Category Tabs */}
      <div className="flex border-b border-ctos-cyan/30 mb-6 overflow-x-auto pb-1">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              setVisibleCategory(category.id);
              setLoadedSkills([]);
            }}
            className={`px-4 py-2 text-xs tracking-wider whitespace-nowrap ${
              visibleCategory === category.id 
                ? `text-ctos-${getColorByCategory(category.id)} border-b-2 border-ctos-${getColorByCategory(category.id)} -mb-px` 
                : 'text-gray-400 hover:text-ctos-cyan'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills
            .filter(skill => skill.category === visibleCategory)
            .map(skill => {
              const isLoaded = loadedSkills.includes(skill.id);
              const colorName = getColorByCategory(visibleCategory);
              
              return (
                <div
                  key={skill.id}
                  className={`ctos-border p-4 bg-black/20 transition-all duration-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  } ${
                    activeSkill === skill.id ? `bg-ctos-${colorName}/10 shadow-[0_0_10px_rgba(0,255,255,0.2)]` : 'hover:bg-black/30'
                  }`}
                  onMouseEnter={() => setActiveSkill(skill.id)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-orbitron text-sm">
                      <span className={`text-ctos-${colorName}`}>
                        {skill.name}
                      </span>
                    </h3>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(skill.status)} mr-1 ${
                        skill.status === 'upgrading' ? 'animate-pulse' : ''
                      }`}></div>
                      <span className="text-xs text-gray-400">
                        {skill.status === 'active' ? 'ACTIVE' : 
                         skill.status === 'inactive' ? 'INACTIVE' : 'UPGRADING'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="w-full bg-gray-800 h-1 overflow-hidden">
                      <div
                        className={`bg-ctos-${colorName} h-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isLoaded ? `${skill.percentage}%` : '0%',
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs">
                      <span className="text-gray-500">ML-{Math.floor(Math.random() * 900) + 100}</span>
                      <span className={`text-ctos-${colorName}`}>{skill.percentage}%</span>
                    </div>
                  </div>
                  
                  {activeSkill === skill.id && (
                    <div className="mt-4 text-xs text-gray-400 border-t border-gray-700 pt-2 animate-slide-up">
                      <div className="flex justify-between mb-1">
                        <span>MODULE ID:</span>
                        <span className={`text-ctos-${colorName}`}>{skill.id.toUpperCase()}-{Math.floor(Math.random() * 900) + 100}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>LAST UPDATE:</span>
                        <span>2025-04-{Math.floor(Math.random() * 30) + 1}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      
      <div className="mt-10 p-4 ctos-border bg-black/20">
        <h3 className="text-sm font-orbitron mb-4">
          <GlitchText text="SYSTEM STATUS" intensity="low" color={getColorByCategory(visibleCategory) as any} />
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-3 bg-black/30 border border-gray-800">
            <div className="text-gray-400 mb-1">SKILLS LOADED</div>
            <div className="text-xl text-ctos-cyan">{loadedSkills.length}/{skills.filter(s => s.category === visibleCategory).length}</div>
          </div>
          <div className="p-3 bg-black/30 border border-gray-800">
            <div className="text-gray-400 mb-1">CATEGORY</div>
            <div className="text-xl text-ctos-cyan">{visibleCategory.toUpperCase()}</div>
          </div>
          <div className="p-3 bg-black/30 border border-gray-800">
            <div className="text-gray-400 mb-1">AVERAGE LEVEL</div>
            <div className="text-xl text-ctos-cyan">
              {Math.round(
                skills
                  .filter(s => s.category === visibleCategory)
                  .reduce((sum, skill) => sum + skill.percentage, 0) / 
                skills.filter(s => s.category === visibleCategory).length
              )}%
            </div>
          </div>
          <div className="p-3 bg-black/30 border border-gray-800">
            <div className="text-gray-400 mb-1">STATUS</div>
            <div className="text-xl text-ctos-green">OPERATIONAL</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
