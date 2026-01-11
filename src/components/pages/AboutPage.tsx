import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Youtube, Users, Calendar, Trophy, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Expected Attendees', value: '10,000+' },
    { icon: Calendar, label: 'Days of Events', value: '3' },
    { icon: Trophy, label: 'Competitions', value: '50+' },
    { icon: Sparkles, label: 'Performances', value: '100+' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['SMVITM Campus', 'Bantakal, Udupi', 'Karnataka - 574115'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['varnothsava@smvitm.ac.in', 'info@varnothsava.com'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', handle: '@varnothsava2k26' },
    { icon: Facebook, href: '#', label: 'Facebook', handle: 'VARNOTHSAVA' },
    { icon: Twitter, href: '#', label: 'Twitter', handle: '@varnothsava' },
    { icon: Youtube, href: '#', label: 'YouTube', handle: 'VARNOTHSAVA Official' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Celebration Background Animation - Full Screen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full opacity-20 pointer-events-none z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src="/lottie/Celebration.webm" type="video/webm" />
      </video>

      {/* Starry Background Animation - Left */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed left-0 top-0 h-full w-auto opacity-30 pointer-events-none z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src="/lottie/Starry.webm" type="video/webm" />
      </video>

      {/* Starry Background Animation - Right */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed right-0 top-0 h-full w-auto opacity-30 pointer-events-none z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src="/lottie/Starry.webm" type="video/webm" />
      </video>

      {/* Confetti Animation - Top Left */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed left-0 top-0 w-64 h-64 opacity-40 pointer-events-none z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src="/lottie/confetti (1).webm" type="video/webm" />
      </video>

      {/* Confetti Animation - Top Right */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed right-0 top-0 w-64 h-64 opacity-40 pointer-events-none z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src="/lottie/confetti (1).webm" type="video/webm" />
      </video>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-background to-neon-blue/10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-[120rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              About <span className="text-neon-green">VARNOTHSAVA</span>
            </h1>
            <p className="font-paragraph text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              The official cultural fest of Shri Madhwa Vadiraja Institute of Technology and Management
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Welcome to the <span className="text-neon-green">Future of Culture</span>
              </h2>
              <div className="space-y-4 font-paragraph text-foreground/80 leading-relaxed">
                <p>
                  VARNOTHSAVA 2K26 is not just a cultural fest—it's a revolution. We're bringing together the best of art, music, dance, technology, and innovation to create an unforgettable experience for students across the nation.
                </p>
                <p>
                  With over 50 competitions, 100+ performances, and countless workshops, VARNOTHSAVA is where creativity meets technology, and tradition meets innovation. From electrifying music concerts to mind-bending art installations, we've got it all.
                </p>
                <p>
                  Join us for three days of non-stop entertainment, learning, and networking. Whether you're a performer, competitor, or spectator, VARNOTHSAVA 2K26 promises to be an experience you'll never forget.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative bg-background border-2 border-neon-green/30 rounded-xl p-6 text-center">
                    <div className="inline-flex p-4 bg-neon-green/10 rounded-lg border border-neon-green/30 mb-4">
                      <stat.icon className="w-8 h-8 text-neon-green" />
                    </div>
                    <p className="font-heading text-3xl font-bold text-neon-green mb-2">
                      {stat.value}
                    </p>
                    <p className="font-paragraph text-sm text-foreground/70">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-neon-green">Touch</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-blue/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative bg-background border border-neon-green/30 rounded-xl p-8 text-center h-full flex flex-col">
                  <div className="inline-flex p-4 bg-neon-green/10 rounded-lg border border-neon-green/30 mb-6 self-center">
                    <info.icon className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 flex-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-paragraph text-sm text-foreground/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.title === 'Location' && (
                    <>
                      <a
                        href="https://www.google.com/maps/place/Shri+Madhwa+Vadiraja+Institute+of+Technology+and+Management/@13.2108,74.7447,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 block rounded-lg overflow-hidden border-2 border-neon-green/30 hover:border-neon-green transition-colors"
                      >
                        <img
                          src="/images/map.png"
                          alt="SMVITM Campus Map"
                          className="w-full h-48 object-cover"
                        />
                      </a>
                      <motion.a
                        href="https://www.google.com/maps/place/Shri+Madhwa+Vadiraja+Institute+of+Technology+and+Management/@13.2108,74.7447,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon-green text-black font-paragraph font-bold rounded-lg hover:bg-neon-green/90 transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        Track Location
                      </motion.a>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
              Follow Us on <span className="text-neon-green">Social Media</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative bg-background border border-neon-green/30 rounded-xl p-6 text-center">
                    <div className="inline-flex p-4 bg-neon-green/10 rounded-lg border border-neon-green/30 mb-4 group-hover:bg-neon-green group-hover:border-neon-green transition-colors">
                      <social.icon className="w-8 h-8 text-neon-green group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-neon-green transition-colors">
                      {social.label}
                    </h4>
                    <p className="font-paragraph text-sm text-foreground/60">
                      {social.handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl border-2 border-neon-green/50"
          >
            <a
              href="https://www.google.com/maps/place/Shri+Madhwa+Vadiraja+Institute+of+Technology+and+Management/@13.2108,74.7447,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <img
                src="/images/campus.jpg"
                alt="SMVITM Campus"
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-neon-green mx-auto mb-3 drop-shadow-lg" />
                  <p className="font-heading text-2xl font-bold text-white mb-1 drop-shadow-lg">
                    SMVITM Campus
                  </p>
                  <p className="font-paragraph text-white/90 drop-shadow-lg">
                    Bantakal, Udupi, Karnataka
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
