import React from 'react';
import { Briefcase, CheckCircle, Building, Code } from 'lucide-react';
import { experiences } from '../utils/constants';

export const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'WordPress Development':
        return Code;
      case 'E-commerce Development':
        return Building;
      default:
        return Briefcase;
    }
  };

  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-blue-600',
      'from-purple-500 to-pink-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Internship Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hands-on experience in web development and full-stack technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => {
              const IconComponent = getIcon(exp.type);
              const gradient = getGradient(index);
              
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 bg-gradient-to-br ${gradient} rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                        <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.description.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
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