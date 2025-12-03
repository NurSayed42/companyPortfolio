import { Link } from 'react-router-dom';
import { Code, Smartphone, Cloud, Palette, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Build responsive, scalable web applications with cutting-edge technologies.',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for your business.',
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
    },
    {
      icon: <Shield size={40} />,
      title: 'Security',
      description: 'Comprehensive security solutions to protect your digital assets.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Optimization and performance tuning for maximum efficiency.',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY0NzE4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Laravel', 'React', 'MySQL'],
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking solution with biometric authentication.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjU2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Flutter', 'Firebase', 'Node.js'],
    },
  ];

  const features = [
    'Expert Development Team',
    '24/7 Support',
    'Agile Methodology',
    'Quality Assurance',
    'On-Time Delivery',
    'Scalable Solutions',
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Laravel', logo: '🔶' },
    { name: 'Flutter', logo: '📱' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'AWS', logo: '☁️' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                Build Your Digital Future With Us
              </h1>
              <p className="text-xl text-[#6B7280] mb-8">
                We create innovative software solutions that transform businesses and drive growth. From web to mobile, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDc0NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technology"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] flex items-center justify-center text-white">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <div className="text-2xl text-[#1F2937]">500+</div>
                    <div className="text-sm text-[#6B7280]">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Cards */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}
              >
                <div className="text-[#1A73E8] mb-4">{service.icon}</div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-[#6B7280]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Projects</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              See what we've built for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden"
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-[#6B7280] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#F8FAFC] text-[#1A73E8] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-[#1A73E8] hover:gap-3 transition-all"
                  >
                    View Details <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Why Choose Us</h2>
              <p className="text-xl text-[#6B7280] mb-8">
                We combine technical expertise with business understanding to deliver solutions that drive real results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[#16A34A] flex-shrink-0" size={24} />
                    <span className="text-[#374151]">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary mt-8 inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjQ3MzAyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Technologies We Use</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              We work with cutting-edge technologies to build modern solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#E5E7EB] flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:border-[#1A73E8] grayscale hover:grayscale-0"
              >
                <div className="text-4xl">{tech.logo}</div>
                <div className="text-[#374151]">{tech.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/technologies" className="btn-secondary">
              View All Technologies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
