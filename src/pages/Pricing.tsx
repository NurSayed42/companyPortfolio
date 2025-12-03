import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Single page application',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        '3 revisions',
        '30 days support',
      ],
      notIncluded: [
        'Database integration',
        'Payment gateway',
        'Admin panel',
        'Priority support',
      ],
      highlighted: false,
    },
    {
      name: 'Business',
      price: '$9,999',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-page application',
        'Advanced responsive design',
        'Full SEO optimization',
        'Database integration',
        'Payment gateway integration',
        'Admin panel',
        'API integration',
        'Unlimited revisions',
        '90 days support',
        'Performance optimization',
      ],
      notIncluded: [
        'Mobile app',
        'Dedicated account manager',
      ],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large-scale applications',
      features: [
        'Everything in Business',
        'Mobile app (iOS & Android)',
        'Cloud infrastructure setup',
        'Microservices architecture',
        'Advanced security features',
        'Load balancing',
        'Dedicated account manager',
        'Priority 24/7 support',
        '1 year support & maintenance',
        'Training sessions',
        'Custom integrations',
      ],
      notIncluded: [],
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and PayPal. Payment milestones are typically set at project start, midpoint, and completion.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes! You can upgrade your plan at any time. We\'ll credit any payments you\'ve already made toward the upgraded plan.',
    },
    {
      question: 'What is included in support?',
      answer: 'Support includes bug fixes, technical assistance, and minor updates. Major feature additions are quoted separately.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a satisfaction guarantee. If you\'re not happy with our work at any milestone, we\'ll work with you to make it right or provide a refund.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Choose the perfect plan for your project. All plans include source code and documentation.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'lg:-translate-y-4 shadow-2xl border-2 border-[#1A73E8]'
                    : 'shadow-md hover:shadow-lg'
                }`}
              >
                {plan.badge && (
                  <div className="inline-block px-4 py-1 bg-[#1A73E8] text-white rounded-full text-sm mb-4">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-3xl mb-2">{plan.name}</h3>
                <p className="text-[#6B7280] mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl text-[#1A73E8]">{plan.price}</span>
                  <span className="text-[#6B7280] ml-2">/ {plan.period}</span>
                </div>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg transition-all mb-8 ${
                    plan.highlighted
                      ? 'bg-[#1A73E8] text-white hover:bg-[#1557b0]'
                      : 'bg-[#F8FAFC] text-[#1A73E8] hover:bg-[#E5E7EB]'
                  }`}
                >
                  Get Started
                </Link>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="text-[#16A34A] flex-shrink-0 mt-1" size={20} />
                        <span className="text-[#374151]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {plan.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <X className="text-[#6B7280] flex-shrink-0 mt-1" size={20} />
                          <span className="text-[#6B7280]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Add-On Services</h2>
            <p className="text-xl text-[#6B7280]">
              Enhance your project with these additional services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#F8FAFC] p-6 rounded-xl text-center">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-xl mb-2">Mobile App</h3>
              <div className="text-[#1A73E8] mb-2">From $5,000</div>
              <p className="text-sm text-[#6B7280]">iOS & Android apps</p>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-xl text-center">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-xl mb-2">Security Audit</h3>
              <div className="text-[#1A73E8] mb-2">$1,500</div>
              <p className="text-sm text-[#6B7280]">Complete security review</p>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-xl text-center">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Analytics Setup</h3>
              <div className="text-[#1A73E8] mb-2">$800</div>
              <p className="text-sm text-[#6B7280]">Google Analytics & more</p>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-xl text-center">
              <div className="text-2xl mb-3">🎓</div>
              <h3 className="text-xl mb-2">Training</h3>
              <div className="text-[#1A73E8] mb-2">$500/session</div>
              <p className="text-sm text-[#6B7280]">Team training sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}>
                <h3 className="text-xl mb-3 text-[#1F2937]">{faq.question}</h3>
                <p className="text-[#6B7280]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-[#1A73E8] to-[#4F46E5] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team is here to help you choose the right plan for your needs
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-block"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
