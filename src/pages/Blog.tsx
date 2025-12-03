import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function Blog() {
  const blogPosts = [
    {
      title: '10 Best Practices for Modern Web Development',
      category: 'Web Development',
      excerpt: 'Learn the essential practices that will help you build better, more maintainable web applications in 2025.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY0NzE4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'John Smith',
      date: 'Dec 1, 2025',
      readTime: '5 min read',
    },
    {
      title: 'The Future of Mobile App Development',
      category: 'Mobile',
      excerpt: 'Exploring emerging trends in mobile development and what they mean for businesses in the coming years.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjU2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Sarah Johnson',
      date: 'Nov 28, 2025',
      readTime: '7 min read',
    },
    {
      title: 'Cloud Migration Strategy: A Complete Guide',
      category: 'Cloud Computing',
      excerpt: 'Step-by-step guide to successfully migrate your infrastructure to the cloud with minimal disruption.',
      image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0Njc4ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Michael Chen',
      date: 'Nov 25, 2025',
      readTime: '10 min read',
    },
    {
      title: 'UI/UX Design Trends for 2025',
      category: 'Design',
      excerpt: 'Discover the latest design trends that are shaping user experiences across digital platforms.',
      image: 'https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDc0NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Emily Davis',
      date: 'Nov 22, 2025',
      readTime: '6 min read',
    },
    {
      title: 'Building Scalable APIs with Node.js',
      category: 'Backend',
      excerpt: 'Learn how to design and implement scalable RESTful APIs using Node.js and best practices.',
      image: 'https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzY0Njc3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Michael Chen',
      date: 'Nov 20, 2025',
      readTime: '8 min read',
    },
    {
      title: 'Security Best Practices for Web Applications',
      category: 'Security',
      excerpt: 'Essential security measures every developer should implement to protect web applications.',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjQ3MzAyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'John Smith',
      date: 'Nov 18, 2025',
      readTime: '9 min read',
    },
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl mb-6">Our Blog</h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Insights, tutorials, and industry news from our team of experts
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}>
            <div className="h-96 lg:h-auto">
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-[#1A73E8] text-white rounded-full text-sm mb-4 self-start">
                Featured
              </div>
              <span className="text-sm text-[#1A73E8] mb-3">{featuredPost.category}</span>
              <h2 className="text-3xl lg:text-4xl mb-4">{featuredPost.title}</h2>
              <p className="text-[#6B7280] mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-[#6B7280] mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {featuredPost.date}
                </div>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-[#1A73E8] hover:gap-3 transition-all"
              >
                Read More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-4xl mb-12">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#1A73E8] mb-2 inline-block">{post.category}</span>
                  <h3 className="text-2xl mb-3">{post.title}</h3>
                  <p className="text-[#6B7280] mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-[#6B7280]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-[#1A73E8] hover:gap-3 transition-all mt-4"
                  >
                    Read More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles and insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-[#374151] outline-none"
              />
              <button className="bg-white text-[#1A73E8] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
