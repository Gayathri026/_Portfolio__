import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';
import { skills } from '../utils/constants';

export const Skills: React.FC = () => {
  const skillIcons = {
    'Programming Languages': Code,
    'Web Development': Globe,
    'Database Management': Database,
    'Frameworks & Tools': Wrench
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => {
              const IconComponent = skillIcons[category as keyof typeof skillIcons];
              
              return (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};