import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'Cloud', 'Design'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'A full-featured online marketplace with payment integration, inventory management, and customer analytics.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY0NzE4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Laravel', 'React', 'MySQL', 'Stripe'],
      duration: '4 months',
      link: '#',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile',
      description: 'Secure mobile banking solution with biometric authentication and real-time transaction tracking.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjU2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
      duration: '6 months',
      link: '#',
    },
    {
      title: 'Cloud Infrastructure Migration',
      category: 'Cloud',
      description: 'Enterprise-scale cloud migration from on-premise to AWS with zero downtime.',
      image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0Njc4ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      duration: '3 months',
      link: '#',
    },
    {
      title: 'SaaS Dashboard Design',
      category: 'Design',
      description: 'Modern, intuitive dashboard design for a project management SaaS platform.',
      image: 'https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDc0NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Figma', 'Adobe XD', 'Design System'],
      duration: '2 months',
      link: '#',
    },
    {
      title: 'Healthcare Portal',
      category: 'Web',
      description: 'Patient management system with appointment scheduling and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjQ3MzAyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Python', 'PostgreSQL', 'WebRTC'],
      duration: '5 months',
      link: '#',
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile',
      description: 'Real-time food delivery application with GPS tracking and in-app payments.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjU2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'Google Maps API', 'Stripe'],
      duration: '4 months',
      link: '#',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl mb-6">Our Portfolio</h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their goals through innovative technology solutions
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-[#E5E7EB]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  filter === category
                    ? 'bg-[#1A73E8] text-white'
                    : 'bg-[#F8FAFC] text-[#374151] hover:bg-[#E5E7EB]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#F8FAFC] text-[#1A73E8] rounded-full text-sm mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-[#6B7280] mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-[#F8FAFC] text-[#374151] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#6B7280]">Duration: {project.duration}</span>
                    <a
                      href={project.link}
                      className="flex items-center gap-1 text-[#1A73E8] hover:gap-2 transition-all"
                    >
                      View <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-[#1A73E8] mb-2">500+</div>
              <div className="text-[#6B7280]">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl text-[#1A73E8] mb-2">300+</div>
              <div className="text-[#6B7280]">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl text-[#1A73E8] mb-2">98%</div>
              <div className="text-[#6B7280]">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl text-[#1A73E8] mb-2">24/7</div>
              <div className="text-[#6B7280]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together
          </p>
          <a
            href="/contact"
            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
