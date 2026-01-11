import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Sponsors } from '@/entities';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsors[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSponsors();
  }, []);

  const loadSponsors = async () => {
    try {
      const { items } = await BaseCrudService.getAll<Sponsors>('sponsors');
      setSponsors(items);
    } catch (error) {
      console.error('Failed to load sponsors:', error);
    } finally {
      setLoading(false);
    }
  };

  const tierOrder = ['Platinum', 'Gold', 'Silver', 'Bronze'];
  const sponsorsByTier = tierOrder.reduce((acc, tier) => {
    acc[tier] = sponsors.filter(s => s.tier === tier);
    return acc;
  }, {} as Record<string, Sponsors[]>);

  const tierColors: Record<string, string> = {
    Platinum: 'from-gray-300 to-gray-100',
    Gold: 'from-yellow-400 to-yellow-200',
    Silver: 'from-gray-400 to-gray-300',
    Bronze: 'from-orange-600 to-orange-400',
  };

  const tierSizes: Record<string, string> = {
    Platinum: 'lg:col-span-4',
    Gold: 'lg:col-span-2',
    Silver: 'lg:col-span-2',
    Bronze: 'lg:col-span-2',
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

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
        <source src="/src/lottie/Celebration.webm" type="video/webm" />
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
        <source src="/src/lottie/Starry.webm" type="video/webm" />
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
        <source src="/src/lottie/Starry.webm" type="video/webm" />
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
        <source src="/src/lottie/confetti (1).webm" type="video/webm" />
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
        <source src="/src/lottie/confetti (1).webm" type="video/webm" />
      </video>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-background to-neon-green/10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-[120rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Our <span className="text-neon-green">Sponsors</span>
            </h1>
            <p className="font-paragraph text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              We're grateful to our amazing partners who make VARNOTHSAVA 2K26 possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsors by Tier */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto space-y-16">
          {tierOrder.map((tier, tierIndex) => {
            const tierSponsors = sponsorsByTier[tier];
            if (!tierSponsors || tierSponsors.length === 0) return null;

            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: tierIndex * 0.2, duration: 0.8 }}
              >
                {/* Tier Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tierColors[tier]} flex items-center justify-center`}>
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                      {tier} <span className="text-neon-green">Sponsors</span>
                    </h2>
                  </div>
                  <div className={`h-1 w-32 mx-auto rounded-full bg-gradient-to-r ${tierColors[tier]}`} />
                </div>

                {/* Sponsors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tierSponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor._id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tierIndex * 0.2 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8 }}
                      className={`group relative ${tierSizes[tier] || 'lg:col-span-2'}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${tierColors[tier]} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                      
                      <div className="relative bg-background border-2 border-neon-green/30 rounded-xl p-8 h-full flex flex-col">
                        {/* Logo */}
                        <div className="flex-1 flex items-center justify-center mb-6">
                          {sponsor.logo ? (
                            <Image src={sponsor.logo} alt={sponsor.name || 'Sponsor'} className="max-w-full max-h-32 object-contain group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center">
                              <Award className="w-16 h-16 text-neon-green/50" />
                            </div>
                          )}
                        </div>

                        {/* Sponsor Info */}
                        <div className="text-center">
                          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-neon-green transition-colors">
                            {sponsor.name || 'Unnamed Sponsor'}
                          </h3>
                          
                          {sponsor.description && (
                            <p className="font-paragraph text-sm text-foreground/70 mb-4 line-clamp-2">
                              {sponsor.description}
                            </p>
                          )}

                          {sponsor.websiteUrl && (
                            <a
                              href={sponsor.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 text-neon-green hover:text-neon-blue transition-colors"
                            >
                              <span className="font-paragraph text-sm font-medium">Visit Website</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>

                        {/* Tier Badge */}
                        <div className="absolute top-4 right-4">
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${tierColors[tier]} text-black font-paragraph text-xs font-bold`}>
                            {tier}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {sponsors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Award className="w-16 h-16 text-neon-green/50 mx-auto mb-4" />
              <p className="font-paragraph text-xl text-foreground/60">
                No sponsors listed yet. Stay tuned!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-secondary/20" />
            
            <div className="relative bg-background/80 backdrop-blur-sm border-2 border-neon-green/50 rounded-2xl p-12 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Become a <span className="text-neon-green">Sponsor</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Partner with us to reach thousands of students and showcase your brand at the biggest cultural fest of 2026
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neon-green text-black font-paragraph font-bold rounded-lg hover:bg-neon-green/90 transition-colors"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
