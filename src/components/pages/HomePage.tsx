// HPI 1.6-G
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket, ArrowRight, Sparkles, Music, Palette, Trophy, Zap, Globe, Cpu, Play } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Image } from '@/components/ui/image';

// --- Utility Components ---

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-on-scroll ${className || ''}`}>
      {children}
    </div>
  );
};

const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-green opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-blue opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
    </div>
  );
};

// --- Main Component ---

export default function HomePage() {
  // --- Canonical Data Sources ---
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const features = [
    { icon: Music, title: 'Sonic Realms', description: 'Live performances by top-tier artists and bands.', id: 'feat-1' },
    { icon: Palette, title: 'Visual Arts', description: 'Immersive creative exhibitions and installations.', id: 'feat-2' },
    { icon: Trophy, title: 'Battle Arena', description: 'High-stakes competitions with massive prize pools.', id: 'feat-3' },
    { icon: Sparkles, title: 'Skill Forge', description: 'Workshops led by industry pioneers and masters.', id: 'feat-4' },
  ];

  const festDate = '2026-03-15T00:00:00';

  // --- Logic Preservation ---
  useEffect(() => {
    const targetDate = new Date(festDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- Scroll & Motion Hooks ---
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Mouse parallax effect for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  const bgX = useTransform(mouseX, [0, 1], ["-5%", "5%"]);
  const bgY = useTransform(mouseY, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-neon-green selection:text-black" onMouseMove={handleMouseMove}>
      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
        .text-stroke-hover:hover {
          -webkit-text-stroke: 1px #39FF14;
          color: transparent;
        }
        .grid-bg {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .clip-chevron {
          clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
        }
      `}</style>

      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Dynamic Background */}
        <motion.div 
          style={{ x: bgX, y: bgY, scale: 1.1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] mix-blend-screen" />
          <img 
            src="/src/images/logo.png" 
            alt="Varnothsava Background" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </motion.div>

        {/* Fireworks Video - Left Side */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[80vh] w-auto opacity-60 z-10 pointer-events-none"
        >
          <source src="/src/lottie/Fireworks.webm" type="video/webm" />
        </video>

        {/* Fireworks Video - Right Side */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[80vh] w-auto opacity-60 z-10 pointer-events-none scale-x-[-1]"
        >
          <source src="/src/lottie/Fireworks.webm" type="video/webm" />
        </video>

        {/* Fireworks1 Video - Top Left */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-10 top-10 h-[50vh] w-auto opacity-50 z-10 pointer-events-none"
        >
          <source src="/src/lottie/fireworks1.webm" type="video/webm" />
        </video>

        {/* Fireworks1 Video - Top Right */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-10 top-10 h-[50vh] w-auto opacity-50 z-10 pointer-events-none scale-x-[-1]"
        >
          <source src="/src/lottie/fireworks1.webm" type="video/webm" />
        </video>

        {/* Confetti Video - Full Screen Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-10 pointer-events-none mix-blend-screen"
        >
          <source src="/src/lottie/Confetti.webm" type="video/webm" />
        </video>

        {/* Hero Content */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          {/* Logo Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-7xl px-4"
          >
            <img
              src="/src/images/logo.png"
              alt="VARNOTHSAVA 2K26 Logo"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-green to-transparent" />
        </motion.div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <section className="py-12 bg-neon-green text-black overflow-hidden border-y border-black">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tighter"
          >
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Culture</span>
                <Zap className="w-8 h-8 fill-black" />
                <span>Music</span>
                <Zap className="w-8 h-8 fill-black" />
                <span>Art</span>
                <Zap className="w-8 h-8 fill-black" />
                <span>Tech</span>
                <Zap className="w-8 h-8 fill-black" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MANIFESTO / ABOUT SECTION (Sticky) --- */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Sticky Title */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <AnimatedElement>
                <h2 className="font-heading text-5xl sm:text-7xl font-bold text-white mb-8 leading-none">
                  THE <br />
                  <span className="text-neon-blue">FUTURE</span> <br />
                  IS NOW
                </h2>
                <div className="w-24 h-2 bg-neon-green mb-8" />
                <p className="font-paragraph text-white/60 text-lg leading-relaxed max-w-md">
                  Varnothsava 2K26 isn't just a fest. It's a movement. A digital awakening where tradition meets the avant-garde.
                </p>
              </AnimatedElement>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="lg:col-span-7 flex flex-col gap-24">
            <AnimatedElement delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-green to-neon-blue opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
                  <Image 
                    src="/src/images/dj1.webp" 
                    alt="Crowd at concert" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="font-heading text-3xl text-white mb-2">Electric Atmosphere</h3>
                    <p className="font-paragraph text-white/70">Experience the pulse of 5,000+ students.</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-neon-green/50 transition-colors">
                  <Globe className="w-10 h-10 text-neon-green mb-6" />
                  <h4 className="font-heading text-xl text-white mb-4">Global Stage</h4>
                  <p className="font-paragraph text-white/60 text-sm">
                    Showcasing talent on a platform that transcends boundaries.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-neon-blue/50 transition-colors">
                  <Cpu className="w-10 h-10 text-neon-blue mb-6" />
                  <h4 className="font-heading text-xl text-white mb-4">Digital Integration</h4>
                  <p className="font-paragraph text-white/60 text-sm">
                    Seamlessly blended physical and digital experiences.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID (Broken Layout) --- */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
              <h2 className="font-heading text-4xl sm:text-6xl font-bold text-white">
                EVENT <span className="text-stroke">DOMAINS</span>
              </h2>
              <Link to="/events" className="hidden md:flex items-center gap-2 text-neon-green font-paragraph hover:text-white transition-colors">
                Explore All Categories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <AnimatedElement key={feature.id} delay={index * 100} className={index % 2 === 1 ? "lg:translate-y-16" : ""}>
                <div className="group relative h-full bg-[#1a1a1a] border border-white/5 hover:border-neon-green/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <feature.icon className="w-24 h-24 text-neon-green transform rotate-12 translate-x-8 -translate-y-8" />
                  </div>
                  
                  <div className="p-8 h-full flex flex-col relative z-10">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-green group-hover:text-black transition-colors">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-heading text-2xl text-white mb-4 group-hover:text-neon-green transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="font-paragraph text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
                      <span>Discover</span>
                      <div className="h-[1px] w-8 bg-current" />
                    </div>
                  </div>

                  {/* Hover Glitch Overlay */}
                  <div className="absolute inset-0 bg-neon-green/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                </div>
              </AnimatedElement>
            ))}
          </div>
          
          <div className="mt-24 md:hidden flex justify-center">
            <Link to="/events" className="flex items-center gap-2 text-neon-green font-paragraph hover:text-white transition-colors">
              Explore All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- VISUAL BREATHER / PARALLAX --- */}
      <section className="relative h-[80vh] w-full overflow-hidden clip-diagonal">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-0">
           {/* Parallax Image Container */}
           <motion.div 
             style={{ y: useTransform(scrollYProgress, [0.5, 1], ["-20%", "20%"]) }}
             className="w-full h-[120%]"
           >
             <Image 
               src="/src/images/dj2.jpg" 
               alt="Stage Lights" 
               className="w-full h-full object-cover"
             />
           </motion.div>
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <AnimatedElement>
              <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <h2 className="font-heading text-5xl sm:text-8xl font-black text-white tracking-tighter mix-blend-overlay">
                RELIVE THE <br /> HYPE
              </h2>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* --- SCHEDULE PREVIEW (Horizontal Scroll Idea) --- */}
      <section className="py-32 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <AnimatedElement>
                <span className="text-neon-blue font-paragraph text-sm tracking-widest uppercase mb-4 block">Timeline</span>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                  DON'T MISS <br /> A BEAT
                </h2>
                <p className="font-paragraph text-white/60 mb-8">
                  Three days of non-stop action. Plan your Varnothsava experience with our interactive schedule.
                </p>
                <Link to="/schedule">
                  <button className="px-8 py-4 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-bold font-paragraph uppercase tracking-wider rounded-sm">
                    Full Schedule
                  </button>
                </Link>
              </AnimatedElement>
            </div>

            <div className="lg:w-2/3 w-full">
              <div className="space-y-4">
                {[
                  { time: "Day 1 • 10:00 AM", event: "Inauguration Ceremony", loc: "Main Auditorium" },
                  { time: "Day 1 • 02:00 PM", event: "Battle of Bands", loc: "Open Air Theatre" },
                  { time: "Day 2 • 11:00 AM", event: "Hackathon Finals", loc: "Tech Block" },
                  { time: "Day 3 • 06:00 PM", event: "Pro Night: DJ Snake", loc: "Main Ground" },
                ].map((item, idx) => (
                  <AnimatedElement key={idx} delay={idx * 100}>
                    <div className="group flex items-center justify-between p-6 bg-white/5 border-l-2 border-transparent hover:border-neon-green hover:bg-white/10 transition-all cursor-pointer">
                      <div>
                        <span className="block text-neon-green text-xs font-bold uppercase tracking-wider mb-1">{item.time}</span>
                        <h3 className="text-xl sm:text-2xl font-heading text-white group-hover:translate-x-2 transition-transform">{item.event}</h3>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-white/40 text-sm flex items-center gap-2 justify-end">
                          <MapPin className="w-4 h-4" /> {item.loc}
                        </span>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPONSORS TICKER --- */}
      <section className="py-16 border-t border-white/10 bg-black">
        <div className="text-center mb-12">
          <span className="font-paragraph text-xs text-white/40 uppercase tracking-[0.3em]">Powered By</span>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="flex whitespace-nowrap">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-24 px-12"
            >
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {['NeonTech', 'CyberSystems', 'FutureCorp', 'DataFlow', 'SynthWave', 'PixelPerfect', 'GridLock'].map((sponsor) => (
                    <span key={sponsor} className="font-heading text-3xl font-bold text-white/20 hover:text-white/80 transition-colors cursor-default">
                      {sponsor}
                    </span>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative py-40 px-4 overflow-hidden flex items-center justify-center bg-neon-green">
        <div className="absolute inset-0 grid-bg opacity-10 mix-blend-multiply" />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-6xl sm:text-8xl md:text-9xl font-black text-black mb-8 leading-[0.8]">
            JOIN THE <br /> REVOLUTION
          </h2>
          <p className="font-paragraph text-black/70 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Tickets are selling fast. Secure your spot in history.
          </p>
          <Link to="/events">
            <button className="group relative px-12 py-6 bg-black text-white font-bold font-paragraph text-lg uppercase tracking-wider overflow-hidden rounded-sm hover:shadow-2xl hover:shadow-black/20 transition-all">
              <span className="relative z-10 flex items-center gap-3">
                Grab Tickets <Ticket className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}