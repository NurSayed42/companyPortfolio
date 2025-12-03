import { Link } from 'react-router-dom';
import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Cpu,
  Database,
  Layers,
  Lock,
  Gauge,
  Users,
  Rocket,
  Award,
  Clock,
  TrendingUp,
  BarChart,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function Home() {
  const services = [
    {
      icon: <Globe className="text-black" size={32} />,
      title: 'Web Development',
      description:
        'Build responsive, scalable web applications with cutting-edge technologies like React, Next.js, and modern frameworks.',
      gradient: 'from-blue-500 via-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50/90 via-blue-50/70 to-cyan-50/90',
      hoverGradient: 'from-blue-600 via-blue-500 to-cyan-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      iconShadow: 'shadow-blue-500/40',
      theme: 'blue',
      features: ['React/Next.js', 'Responsive Design', 'API Integration'],
    },
    {
      icon: <Smartphone className="text-black" size={32} />,
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile solutions for iOS and Android using Flutter, React Native, and Swift.',
      gradient: 'from-purple-500 via-purple-400 to-pink-500',
      bgGradient: 'from-purple-50/90 via-purple-50/70 to-pink-50/90',
      hoverGradient: 'from-purple-600 via-purple-500 to-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      iconShadow: 'shadow-purple-500/40',
      theme: 'purple',
      features: ['iOS & Android', 'Flutter/React Native', 'App Store Ready'],
    },
    {
      icon: <Cloud className="text-black" size={32} />,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services with AWS, Azure, and Google Cloud expertise.',
      gradient: 'from-emerald-500 via-emerald-400 to-teal-500',
      bgGradient: 'from-emerald-50/90 via-emerald-50/70 to-teal-50/90',
      hoverGradient: 'from-emerald-600 via-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      iconShadow: 'shadow-emerald-500/40',
      theme: 'green',
      features: ['AWS/Azure/GCP', 'Serverless', 'DevOps'],
    },
    {
      icon: <Palette className="text-black" size={32} />,
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive designs that enhance user experience and drive engagement through thoughtful interfaces.',
      gradient: 'from-orange-500 via-orange-400 to-amber-500',
      bgGradient: 'from-orange-50/90 via-orange-50/70 to-amber-50/90',
      hoverGradient: 'from-orange-600 via-orange-500 to-amber-600',
      iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500',
      iconShadow: 'shadow-orange-500/40',
      theme: 'orange',
      features: ['Figma/Adobe XD', 'User Research', 'Prototyping'],
    },
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: 'Security',
      description:
        'Comprehensive security solutions to protect your digital assets with advanced encryption and monitoring.',
      gradient: 'from-red-500 via-red-400 to-rose-500',
      bgGradient: 'from-red-50/90 via-red-50/70 to-rose-50/90',
      hoverGradient: 'from-red-600 via-red-500 to-rose-600',
      iconBg: 'bg-gradient-to-br from-red-500 to-rose-500',
      iconShadow: 'shadow-red-500/40',
      theme: 'red',
      features: ['Penetration Testing', 'SSL/TLS', 'Security Audit'],
    },
    {
      icon: <Zap className="text-green-800" size={32} />,
      title: 'Performance',
      description:
        'Optimization and performance tuning for maximum efficiency and lightning-fast user experiences.',
      gradient: 'from-violet-500 via-violet-400 to-indigo-500',
      bgGradient: 'from-violet-50/90 via-violet-50/70 to-indigo-50/90',
      hoverGradient: 'from-violet-600 via-violet-500 to-indigo-600',
      iconBg: 'bg-gradient-to-br from-violet-500 to-indigo-500',
      iconShadow: 'shadow-violet-500/40',
      theme: 'violet',
      features: ['Speed Optimization', 'Load Testing', 'Caching'],
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online store with payment integration, inventory management, and AI recommendations.',
      image:
        'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY0NzE4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Laravel', 'React', 'MySQL', 'Stripe'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Mobile Banking App',
      description:
        'Secure mobile banking solution with biometric authentication, real-time notifications, and AI fraud detection.',
      image:
        'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjU2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Flutter', 'Firebase', 'Node.js', 'Biometric'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Healthcare Management System',
      description:
        'Comprehensive healthcare platform for patient management, appointments, and medical records.',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      gradient: 'from-emerald-500 to-cyan-600',
    },
    {
      title: 'AI Analytics Dashboard',
      description:
        'Real-time analytics dashboard with machine learning predictions and interactive data visualization.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const features = [
    { icon: <Users size={24} />, text: 'Expert Development Team', color: 'text-blue-600' },
    { icon: <Clock size={24} />, text: '24/7 Support', color: 'text-green-600' },
    { icon: <Rocket size={24} />, text: 'Agile Methodology', color: 'text-purple-600' },
    { icon: <Award size={24} />, text: 'Quality Assurance', color: 'text-amber-600' },
    { icon: <TrendingUp size={24} />, text: 'On-Time Delivery', color: 'text-emerald-600' },
    { icon: <BarChart size={24} />, text: 'Scalable Solutions', color: 'text-indigo-600' },
  ];

  const technologies = [
    { name: 'React', logo: '⚛️', gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Next.js', logo: '▲', gradient: 'from-gray-800 to-black' },
    { name: 'Laravel', logo: '🔶', gradient: 'from-red-500 to-pink-600' },
    { name: 'Flutter', logo: '📱', gradient: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', logo: '🟢', gradient: 'from-green-500 to-emerald-600' },
    { name: 'Python', logo: '🐍', gradient: 'from-yellow-500 to-blue-600' },
    { name: 'AWS', logo: '☁️', gradient: 'from-orange-500 to-yellow-600' },
    { name: 'MongoDB', logo: '🍃', gradient: 'from-green-600 to-emerald-700' },
    { name: 'TypeScript', logo: 'TS', gradient: 'from-blue-600 to-indigo-700' },
    { name: 'Tailwind', logo: '🎨', gradient: 'from-teal-500 to-cyan-600' },
    { name: 'Docker', logo: '🐳', gradient: 'from-blue-500 to-indigo-600' },
    { name: 'GraphQL', logo: '📊', gradient: 'from-pink-500 to-purple-600' },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle size={20} />, color: 'from-blue-500 to-cyan-500' },
    { value: '99%', label: 'Client Satisfaction', icon: <Award size={20} />, color: 'from-emerald-500 to-teal-500' },
    { value: '50+', label: 'Expert Team Members', icon: <Users size={20} />, color: 'from-purple-500 to-pink-500' },
    { value: '24/7', label: 'Support Available', icon: <Clock size={20} />, color: 'from-orange-500 to-amber-500' },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative section-spacing bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                <span className="text-sm font-medium">Digital Transformation Experts</span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Build Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Digital Future
                </span>
                <br />
                <span className="text-white">With Us</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                We create innovative software solutions that transform businesses and drive growth. From web to mobile,
                cloud to AI - we&apos;ve got you covered with cutting-edge technology.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link
                    to="/contact"
                    className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                    <span className="relative flex items-center gap-3">
                      Get Started Free
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
                    </span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link
                    to="/portfolio"
                    className="group px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      View Our Work
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            >
              {/* Main Hero Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDc0NjQxMHww&ixlib=rb-4.1.0&q=80&w=1200"
                  alt="Modern Technology"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm"
                variants={floatAnimation}
                animate="animate"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm"
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Award size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99%</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <motion.div className="inline-flex items-center gap-3 mb-6" variants={fadeInUp}>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Services</span>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </motion.div>

            <motion.h2 className="text-5xl lg:text-6xl mb-8 font-bold" variants={fadeInUp}>
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                What We
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}
                Offer
              </span>
            </motion.h2>

            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
              We provide comprehensive digital solutions tailored to transform your business with cutting-edge technology and
              innovative approaches.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -20,
                  scale: 1.03,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  },
                }}
                className="group relative h-full"
              >
                {/* Background Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-500`}
                />

                {/* Main Card */}
                <div
                  className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group h-full flex flex-col`}
                >
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                      }}
                    />
                  </div>

                  {/* Floating Icon Container */}
                  <motion.div
                    className={`relative mb-8 inline-flex p-5 rounded-2xl ${service.iconBg} ${service.iconShadow} shadow-xl group-hover:shadow-2xl z-10`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{
                      scale: { type: 'spring', stiffness: 300 },
                      rotate: { duration: 0.6, ease: 'easeInOut' },
                    }}
                  >
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl blur-md" />

                    {/* Animated Rings */}
                    <motion.div
                      className="absolute -inset-2 border-2 border-white/30 rounded-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      }}
                    />

                    {/* Icon */}
                    <div className="relative">{service.icon}</div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative flex-grow">
                    <motion.h3
                      className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 mb-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden mb-8">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${service.gradient} rounded-full`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.5,
                          duration: 2,
                          ease: 'easeOut',
                        }}
                      >
                        <motion.div
                          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/services/${service.theme}`}
                      className={`inline-flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn overflow-hidden`}
                    >
                      <span>Get Started</span>
                      <motion.div
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ArrowRight size={20} className="text-white" />
                      </motion.div>

                      {/* Button Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-30 blur-md transition-opacity duration-300`}
                      />
                    </Link>
                  </motion.div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div
                      className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-br ${service.gradient} transform rotate-45 -translate-y-5 translate-x-5 opacity-10 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden">
                    <div
                      className={`absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-br ${service.gradient} transform rotate-45 translate-y-5 -translate-x-5 opacity-10 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className={`absolute top-3 right-3 w-4 h-4 rounded-full bg-gradient-to-r ${service.gradient}`}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                />
                <motion.div
                  className={`absolute bottom-3 left-3 w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient}`}
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.4,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Services Button */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative inline-block"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />

              <Link
                to="/services"
                className="relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />

                <span className="relative z-10">Explore All Services</span>
                <motion.div
                  className="relative z-10"
                  animate={{
                    x: [0, 8, 0],
                    rotate: [0, 15, 0, -15, 0],
                  }}
                  transition={{
                    x: { duration: 2, repeat: Infinity },
                    rotate: { duration: 3, repeat: Infinity },
                  }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div className="inline-flex items-center gap-3 mb-6" variants={fadeInUp}>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Our Portfolio</span>
              <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
            </motion.div>

            <motion.h2 className="text-5xl lg:text-6xl mb-8 font-bold" variants={fadeInUp}>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Featured</span>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {' '}
                Projects
              </span>
            </motion.h2>

            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUp}>
              See how we&apos;ve helped businesses transform with our innovative solutions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                {/* Project Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    {/* Project Tags */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 cursor-default shadow-lg"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))',
                      }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <Link to="/portfolio" className="inline-flex items-center gap-3 font-semibold group/link">
                      <span className="text-gray-800 group-hover/link:text-black transition-all duration-300">
                        View Case Study
                      </span>
                      <motion.div
                        className={`p-2 rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                        whileHover={{ x: 5, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden">
                    <div
                      className={`absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br ${project.gradient} transform rotate-45 translate-y-6 translate-x-6 opacity-10 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                  </div>
                </div>

                {/* Floating Element */}
                <motion.div
                  className={`absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient}`}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="section-spacing bg-gradient-to-b from-white to-gray-50/50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div className="inline-flex items-center gap-3 mb-6" variants={fadeInUp}>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Tech Stack</span>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </motion.div>

            <motion.h2 className="text-5xl lg:text-6xl mb-8 font-bold" variants={fadeInUp}>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Technologies
              </span>
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {' '}
                We Use
              </span>
            </motion.h2>

            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUp}>
              We work with cutting-edge technologies to build modern, scalable solutions
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  rotate: { duration: 0.5 },
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 hover:border-transparent transition-all duration-300 flex flex-col items-center justify-center gap-4 h-full">
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />

                  {/* Tech Logo */}
                  <motion.div
                    className={`text-4xl mb-2 relative z-10 p-4 rounded-xl bg-gradient-to-br ${tech.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 200, duration: 0.6 }}
                  >
                    {tech.logo}
                  </motion.div>

                  {/* Tech Name */}
                  <div className={`text-lg font-semibold bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent relative z-10`}>
                    {tech.name}
                  </div>

                  {/* Floating Element */}
                  <motion.div
                    className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${tech.gradient}`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.1,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-spacing overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 80 + 20,
                height: Math.random() * 80 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.8 }}>
            <motion.h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white" variants={fadeInUp}>
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-300 bg-clip-text text-transparent">
                Your Business?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Let&apos;s discuss how we can help turn your ideas into reality with our cutting-edge solutions
            </motion.p>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="group relative px-12 py-6 rounded-2xl bg-white text-gray-900 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />

                <span className="relative flex items-center gap-4">
                  Get Free Consultation
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </span>
              </Link>
            </motion.div>

            <motion.p className="text-white/70 mt-8" variants={fadeInUp}>
              No commitment required • 30-minute strategy session
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
