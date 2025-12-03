import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build long-lasting relationships based on trust and results.',
    },
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'We work closely with our clients, fostering transparent communication and teamwork.',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzY0NzMxODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '15+ years of experience in software development and business strategy.',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzY0NzMxODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Technology visionary with expertise in cloud architecture and AI.',
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzY0NzMxODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Full-stack expert specializing in scalable web applications.',
    },
    {
      name: 'Emily Davis',
      position: 'UI/UX Director',
      image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzY0NzMxODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Award-winning designer passionate about creating beautiful user experiences.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">About TechSolutions</h1>
              <p className="text-xl text-[#6B7280] mb-6">
                We're a team of passionate developers, designers, and strategists dedicated to building software that makes a difference.
              </p>
              <p className="text-[#374151] mb-8">
                Founded in 2015, TechSolutions has grown from a small startup to a leading software development company. We've helped hundreds of businesses transform their ideas into successful digital products.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl text-[#1A73E8] mb-2">500+</div>
                  <div className="text-[#6B7280]">Projects</div>
                </div>
                <div>
                  <div className="text-4xl text-[#1A73E8] mb-2">50+</div>
                  <div className="text-[#6B7280]">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl text-[#1A73E8] mb-2">10+</div>
                  <div className="text-[#6B7280]">Years</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622126977176-bf029dbf6ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ3NDY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="text-[#374151]">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We're committed to delivering excellence in every project and building lasting partnerships with our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-[#374151]">
                To be the world's most trusted technology partner, known for transforming complex challenges into elegant solutions. We envision a future where technology seamlessly enhances every aspect of business and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F8FAFC] text-[#1A73E8] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-[#6B7280]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Meet Our Team</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <div className="text-[#1A73E8] mb-3">{member.position}</div>
                  <p className="text-[#6B7280] text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals who share our passion for technology
          </p>
          <a
            href="mailto:careers@techsolutions.com"
            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-block"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}
