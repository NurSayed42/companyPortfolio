import { Code, Smartphone, Cloud, Palette, Database, Shield, Zap, BarChart, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Build powerful, scalable web applications tailored to your business needs.',
      features: [
        'Custom web application development',
        'E-commerce solutions',
        'Progressive Web Apps (PWA)',
        'API development and integration',
        'Responsive design',
      ],
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY0NzE4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      features: [
        'iOS and Android native apps',
        'Flutter cross-platform apps',
        'React Native development',
        'App Store optimization',
        'Mobile UI/UX design',
      ],
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjU2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      features: [
        'AWS, Azure, and GCP deployment',
        'Cloud migration services',
        'DevOps and CI/CD',
        'Container orchestration',
        'Serverless architecture',
      ],
      image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0Njc4ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Palette size={48} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
      features: [
        'User research and testing',
        'Wireframing and prototyping',
        'Visual design',
        'Design systems',
        'Accessibility compliance',
      ],
      image: 'https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDc0NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Database size={48} />,
      title: 'Database Management',
      description: 'Optimize your data storage and retrieval systems.',
      features: [
        'Database design and optimization',
        'SQL and NoSQL solutions',
        'Data migration',
        'Performance tuning',
        'Backup and recovery',
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjQ3MzAyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Shield size={48} />,
      title: 'Security & Compliance',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: [
        'Security audits',
        'Penetration testing',
        'GDPR compliance',
        'Authentication systems',
        'Data encryption',
      ],
      image: 'https://images.unsplash.com/photo-1622126977176-bf029dbf6ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ3NDY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const additionalServices = [
    { icon: <Zap size={32} />, title: 'Performance Optimization', description: 'Speed up your applications' },
    { icon: <BarChart size={32} />, title: 'Analytics & Reporting', description: 'Data-driven insights' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Service Icons */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-[#1A73E8]">{service.icon}</div>
                <span className="text-sm text-[#374151]">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`section-spacing ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-[#1A73E8] mb-4">{service.icon}</div>
                <h2 className="text-4xl mb-4">{service.title}</h2>
                <p className="text-xl text-[#6B7280] mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="text-[#16A34A] flex-shrink-0" size={20} />
                      <span className="text-[#374151]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-8 inline-block">
                  Get Started
                </Link>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">More Services</h2>
            <p className="text-xl text-[#6B7280]">
              We offer additional specialized services to meet your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] p-8 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#1A73E8] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-2">{service.title}</h3>
                <p className="text-[#6B7280]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss which services are right for your project
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
