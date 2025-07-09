import React from 'react';
import { Heart, Code2, Globe, Shield } from 'lucide-react';
import { funFacts, futureVision } from '../utils/constants';

export const FunFacts: React.FC = () => {
  const icons = [Code2, Heart, Globe, Shield];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fun Facts & Future Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fun Facts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                About Me
              </h3>
              
              {funFacts.map((fact, index) => {
                const IconComponent = icons[index];
                
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {fact}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Future Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                Future Vision
              </h3>
              
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{futureVision}"
              </blockquote>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {['Full Stack', 'Social Platforms'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};