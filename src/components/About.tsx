import React from 'react';
import { Quote } from 'lucide-react';
import { careerObjective } from '../utils/constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Objective
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 text-blue-600/20 dark:text-blue-400/20">
              <Quote className="w-12 h-12" />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
                {careerObjective}
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 text-purple-600/20 dark:text-purple-400/20 rotate-180">
              <Quote className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};