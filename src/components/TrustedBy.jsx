import React, { useState } from 'react';
import { Building2, Handshake, Award, Users, ExternalLink, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ClientsPartnersSection() {
  const [hoveredClient, setHoveredClient] = useState(null);
  const { theme } = useTheme();

  const clients = [
    {
      id: 1,
      name: 'NAAM Foundation',
      website: 'https://naammh.org/',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
      partnership: '4+ Years',
      projects: '25+ Projects',
      description: 'Long-standing partnership supporting community infrastructure and land development initiatives',
      services: ['Heavy Machinery Supply', 'Land Development', 'Infrastructure Support', 'Community Projects'],
      featured: true
    },
    {
      id: 2,
      name: 'Municipal Corporation',
      website: '#',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop',
      partnership: '3+ Years',
      projects: '40+ Projects',
      description: 'Providing reliable equipment for municipal infrastructure and public works development',
      services: ['Road Construction', 'Drainage Systems', 'Public Infrastructure', 'Urban Development'],
      featured: false
    },
    {
      id: 3,
      name: 'Real Estate Developers',
      website: '#',
      logo: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop',
      partnership: '5+ Years',
      projects: '60+ Projects',
      description: 'Trusted machinery partner for residential and commercial construction projects',
      services: ['Site Excavation', 'Foundation Work', 'Demolition Services', 'Grading & Leveling'],
      featured: false
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Active Clients' },
    { icon: Handshake, value: '200+', label: 'Projects Completed' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className={`relative py-20 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Partnership</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Clients & Partners
          </h2>
          
          <p className={`text-xl leading-relaxed ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Building lasting relationships through reliability, quality, and professional excellence. Our partnerships are built on trust, proven performance, and a shared commitment to successful project delivery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`text-center p-8 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-zinc-900 hover:bg-zinc-800' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className={`text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted By Section */}
        <div className="mb-16">
          <div className={`inline-flex items-center gap-3 px-6 py-3 mb-10 ${
            theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'
          }`}>
            <Award className="w-5 h-5 text-primary" />
            <h3 className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Trusted By
            </h3>
          </div>

          <div className="space-y-8">
            {clients.map((client) => {
              const isHovered = hoveredClient === client.id;
              
              return (
                <div
                  key={client.id}
                  onMouseEnter={() => setHoveredClient(client.id)}
                  onMouseLeave={() => setHoveredClient(null)}
                  className={`relative transition-all duration-500 ${
                    theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'
                  } ${isHovered ? 'shadow-2xl' : 'shadow-lg'} ${
                    client.featured ? 'border-l-4 border-primary' : ''
                  }`}
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Logo Section */}
                      <div className="flex-shrink-0">
                        <div className={`w-32 h-32 overflow-hidden transition-all duration-500 ${
                          isHovered ? 'scale-105' : 'scale-100'
                        }`}>
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <h4 className={`text-3xl font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                              }`}>
                                {client.name}
                              </h4>
                              {client.website !== '#' && (
                                <a
                                  href={client.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`p-2 transition-all duration-300 hover:scale-110 ${
                                    theme === 'dark' ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'
                                  }`}
                                >
                                  <ExternalLink className="w-5 h-5 text-primary" />
                                </a>
                              )}
                            </div>
                            <p className={`text-lg leading-relaxed ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {client.description}
                            </p>
                          </div>

                          {/* Partnership Stats */}
                          <div className="flex gap-6 lg:flex-col lg:items-end">
                            <div className={`text-center lg:text-right px-6 py-3 ${
                              theme === 'dark' ? 'bg-zinc-800' : 'bg-white'
                            }`}>
                              <div className="text-2xl font-bold text-primary mb-1">
                                {client.partnership}
                              </div>
                              <div className={`text-xs font-semibold ${
                                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                              }`}>
                                Partnership
                              </div>
                            </div>
                            <div className={`text-center lg:text-right px-6 py-3 ${
                              theme === 'dark' ? 'bg-zinc-800' : 'bg-white'
                            }`}>
                              <div className="text-2xl font-bold text-primary mb-1">
                                {client.projects}
                              </div>
                              <div className={`text-xs font-semibold ${
                                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                              }`}>
                                Completed
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Services Provided */}
                        <div>
                          <div className={`text-xs font-bold tracking-wider uppercase mb-3 ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                          }`}>
                            Services Provided
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {client.services.map((service, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center gap-2 px-4 py-3 transition-all duration-300 ${
                                  theme === 'dark' 
                                    ? 'bg-zinc-800' 
                                    : 'bg-white border border-gray-200'
                                }`}
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className={`text-sm font-semibold ${
                                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                  {service}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {client.featured && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-l-2 border-primary">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary">
                              Long-Term Strategic Partner
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 border-2 pointer-events-none transition-all duration-500 ${
                    isHovered ? 'border-primary/30' : 'border-transparent'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className={`mt-24 p-12 ${
          theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'
        }`}>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Building2 className="w-12 h-12 text-primary mx-auto" />
            <h3 className={`text-3xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Why Organizations Choose Us
            </h3>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Our commitment to operational excellence, safety standards, and timely project delivery has made us the preferred machinery partner for government agencies, NGOs, and private developers. We understand that your project's success depends on reliable equipment and professional service—that's exactly what we deliver, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-all">
                Become a Partner
              </button>
              <button className={`px-8 py-4 font-bold transition-all border-2 ${
                theme === 'dark'
                  ? 'border-zinc-700 text-white hover:bg-zinc-800'
                  : 'border-gray-300 text-black hover:bg-gray-100'
              }`}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}