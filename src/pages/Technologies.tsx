export function Technologies() {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️', description: 'Modern UI library for building interactive interfaces' },
        { name: 'Vue.js', icon: '💚', description: 'Progressive JavaScript framework' },
        { name: 'Angular', icon: '🅰️', description: 'Enterprise-grade web framework' },
        { name: 'Next.js', icon: '▲', description: 'React framework for production' },
        { name: 'TypeScript', icon: '🔷', description: 'Typed JavaScript superset' },
        { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime for server-side' },
        { name: 'Laravel', icon: '🔶', description: 'PHP framework for web artisans' },
        { name: 'Django', icon: '🐍', description: 'Python web framework' },
        { name: 'Express.js', icon: '⚡', description: 'Fast Node.js web framework' },
        { name: 'NestJS', icon: '🐈', description: 'Progressive Node.js framework' },
        { name: 'Ruby on Rails', icon: '💎', description: 'Convention over configuration' },
      ],
    },
    {
      category: 'Mobile',
      technologies: [
        { name: 'Flutter', icon: '📱', description: 'Cross-platform mobile framework' },
        { name: 'React Native', icon: '⚛️', description: 'Build native apps with React' },
        { name: 'Swift', icon: '🍎', description: 'Native iOS development' },
        { name: 'Kotlin', icon: '🤖', description: 'Modern Android development' },
        { name: 'Ionic', icon: '⚡', description: 'Hybrid mobile framework' },
        { name: 'Xamarin', icon: '💙', description: 'Cross-platform with .NET' },
      ],
    },
    {
      category: 'Database',
      technologies: [
        { name: 'PostgreSQL', icon: '🐘', description: 'Advanced open-source database' },
        { name: 'MySQL', icon: '🐬', description: 'Popular relational database' },
        { name: 'MongoDB', icon: '🍃', description: 'NoSQL document database' },
        { name: 'Redis', icon: '🔴', description: 'In-memory data structure store' },
        { name: 'Elasticsearch', icon: '🔍', description: 'Search and analytics engine' },
        { name: 'Firebase', icon: '🔥', description: 'Real-time database platform' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: '☁️', description: 'Amazon Web Services' },
        { name: 'Google Cloud', icon: '🌐', description: 'GCP cloud platform' },
        { name: 'Azure', icon: '☁️', description: 'Microsoft cloud services' },
        { name: 'Docker', icon: '🐳', description: 'Container platform' },
        { name: 'Kubernetes', icon: '☸️', description: 'Container orchestration' },
        { name: 'Jenkins', icon: '🔧', description: 'CI/CD automation' },
      ],
    },
    {
      category: 'Tools & Others',
      technologies: [
        { name: 'Git', icon: '📚', description: 'Version control system' },
        { name: 'Figma', icon: '🎨', description: 'Design and prototyping tool' },
        { name: 'Postman', icon: '📮', description: 'API testing platform' },
        { name: 'Jira', icon: '📊', description: 'Project management tool' },
        { name: 'GraphQL', icon: '◆', description: 'Query language for APIs' },
        { name: 'WebSocket', icon: '🔌', description: 'Real-time communication' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl mb-6">Technologies We Use</h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof solutions for your business
          </p>
        </div>
      </section>

      {/* Technology Categories */}
      {techCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`section-spacing ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="container-custom">
            <h2 className="text-4xl mb-12 text-center">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="bg-white p-6 rounded-xl border border-[#E5E7EB] transition-all duration-300 hover:shadow-lg hover:border-[#1A73E8]"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{tech.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{tech.name}</h3>
                      <p className="text-[#6B7280] text-sm">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why These Technologies */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why We Choose These Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F8FAFC] p-6 rounded-xl">
                <h3 className="text-2xl mb-3 text-[#1A73E8]">Performance</h3>
                <p className="text-[#374151]">
                  We select technologies that deliver optimal performance and scalability to handle your growing user base.
                </p>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-xl">
                <h3 className="text-2xl mb-3 text-[#1A73E8]">Security</h3>
                <p className="text-[#374151]">
                  Security is paramount. We use proven technologies with strong security features and active community support.
                </p>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-xl">
                <h3 className="text-2xl mb-3 text-[#1A73E8]">Maintainability</h3>
                <p className="text-[#374151]">
                  We choose technologies that are easy to maintain and have excellent documentation and community support.
                </p>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-xl">
                <h3 className="text-2xl mb-3 text-[#1A73E8]">Future-Proof</h3>
                <p className="text-[#374151]">
                  Our technology choices are based on industry trends and long-term viability to protect your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl mb-4">Not Sure Which Technology to Choose?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our experts can help you select the right technology stack for your project
          </p>
          <a
            href="/contact"
            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-block"
          >
            Get Expert Advice
          </a>
        </div>
      </section>
    </div>
  );
}
