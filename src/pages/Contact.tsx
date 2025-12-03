import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: ['123 Business Street', 'Tech City, TC 12345', 'United States'],
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri 9am-6pm EST'],
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: ['info@techsolutions.com', 'support@techsolutions.com', 'careers@techsolutions.com'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl mb-6">Get In Touch</h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] p-8 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl mb-4">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-[#6B7280]">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Details & Map */}
            <div>
              <h2 className="text-4xl mb-6">Contact Details</h2>
              <p className="text-[#6B7280] mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F8FAFC] flex items-center justify-center text-[#1A73E8] flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">Address</h4>
                    <p className="text-[#6B7280]">123 Business Street, Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F8FAFC] flex items-center justify-center text-[#1A73E8] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-[#6B7280]">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F8FAFC] flex items-center justify-center text-[#1A73E8] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-[#6B7280]">info@techsolutions.com</p>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="rounded-xl overflow-hidden h-64 bg-[#E5E7EB]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374945914!2d-73.98823492404069!3d40.75889497138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                />
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl hover:bg-[#20ba5a] transition-all"
              >
                <MessageSquare size={24} />
                <span className="text-lg">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 rounded-2xl" style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}>
              <h2 className="text-3xl mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#374151]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#1A73E8] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-[#374151]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#1A73E8] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-[#374151]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#1A73E8] transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block mb-2 text-[#374151]">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#1A73E8] transition-colors text-[#374151]"
                  >
                    <option value="">Select a project type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block mb-2 text-[#374151]">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#1A73E8] transition-colors text-[#374151]"
                  >
                    <option value="">Select budget range</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-[#374151]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#1A73E8] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <label htmlFor="file" className="block mb-2 text-[#374151]">
                    Attach File (Optional)
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#1A73E8] transition-colors"
                  />
                  <p className="text-sm text-[#6B7280] mt-2">
                    Max file size: 10MB. Accepted formats: PDF, DOC, DOCX, PNG, JPG
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#16A34A] text-white px-8 py-4 rounded-lg hover:bg-[#15803d] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-[#F8FAFC] p-8 rounded-xl">
            <h2 className="text-3xl mb-6 text-center">Business Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-between">
                <span className="text-[#374151]">Monday - Friday:</span>
                <span className="text-[#1A73E8]">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#374151]">Saturday:</span>
                <span className="text-[#1A73E8]">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#374151]">Sunday:</span>
                <span className="text-[#6B7280]">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#374151]">Emergency Support:</span>
                <span className="text-[#16A34A]">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
