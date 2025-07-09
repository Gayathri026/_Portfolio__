import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Code, MessageCircle, Calendar, Clock } from 'lucide-react';
import { personalInfo } from '../utils/constants';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-purple-600',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-blue-600',
      description: 'Call for quick discussions'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-purple-500 to-pink-600',
      description: 'Based in Tamil Nadu'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      color: 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Professional network'
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: personalInfo.leetcode,
      color: 'bg-orange-600 hover:bg-orange-700',
      description: 'Coding challenges'
    }
  ];

  const quickStats = [
    { icon: MessageCircle, label: 'Response Time', value: '< 24 hours' },
    { icon: Calendar, label: 'Availability', value: 'Mon - Fri' },
    { icon: Clock, label: 'Timezone', value: 'IST (UTC+5:30)' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${method.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {method.label}
                    </h3>
                    
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {method.description}
                    </p>
                    
                    {method.href !== '#' ? (
                      <a
                        href={method.href}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium break-all"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {method.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Stats */}
          

          {/* Social Links */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Follow My Journey
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 ${social.color} text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group`}
                  >
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex-1">
                      <p className="font-semibold">{social.label}</p>
                      <p className="text-sm opacity-90">{social.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="mb-6 opacity-90">
                Whether it's about a project, opportunity, or just to say hello - I'd love to hear from you!
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};