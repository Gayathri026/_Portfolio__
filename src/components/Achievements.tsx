import React from 'react';
import { Trophy, Award, Code, Target } from 'lucide-react';
import { achievements } from '../utils/constants';

export const Achievements: React.FC = () => {
  const iconMap = {
    trophy: Trophy,
    award: Award,
    code: Code,
    target: Target
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {achievement.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
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