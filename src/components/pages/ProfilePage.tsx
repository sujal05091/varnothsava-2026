import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Award, Trophy, Star, Calendar, Mail, User as UserIcon } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Badges } from '@/entities';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';

export default function ProfilePage() {
  const [badges, setBadges] = useState<Badges[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBadges();
  }, []);

  const loadBadges = async () => {
    try {
      const { items } = await BaseCrudService.getAll<Badges>('badges');
      setBadges(items);
    } catch (error) {
      console.error('Failed to load badges:', error);
    } finally {
      setLoading(false);
    }
  };

  // Dummy user data
  const user = {
    name: 'Sujal S kumar',
    email: 'sujal.23ad053@sode-edu.in',
    joinDate: 'January 2026',
    eventsAttended: 12,
    totalPoints: 2450,
    rank: 'Gold Member',
  };

  const stats = [
    { icon: Calendar, label: 'Events Attended', value: user.eventsAttended },
    { icon: Trophy, label: 'Total Points', value: user.totalPoints },
    { icon: Star, label: 'Rank', value: user.rank },
  ];

  const rarityColors: Record<string, string> = {
    Common: 'from-gray-500 to-gray-600',
    Rare: 'from-blue-500 to-blue-600',
    Epic: 'from-purple-500 to-purple-600',
    Legendary: 'from-yellow-500 to-orange-500',
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

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-2xl blur-2xl opacity-50" />
            
            <div className="relative bg-background border-2 border-neon-green/50 rounded-2xl p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green to-neon-blue rounded-full blur-xl opacity-50" />
                  <div className="relative w-32 h-32 bg-gradient-to-br from-neon-green to-neon-blue rounded-full flex items-center justify-center border-4 border-background">
                    <UserIcon className="w-16 h-16 text-black" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-neon-green text-black px-3 py-1 rounded-full font-paragraph text-xs font-bold">
                    {user.rank}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-2">
                    {user.name}
                  </h1>
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <Mail className="w-4 h-4 text-neon-green" />
                      <span className="font-paragraph text-sm">{user.email}</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-foreground/20" />
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <Calendar className="w-4 h-4 text-neon-green" />
                      <span className="font-paragraph text-sm">Joined {user.joinDate}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="inline-flex p-3 bg-neon-green/10 rounded-lg border border-neon-green/30 mb-2">
                          <stat.icon className="w-5 h-5 text-neon-green" />
                        </div>
                        <p className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="font-paragraph text-xs text-foreground/60">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Badges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  Your <span className="text-neon-green">Badges</span>
                </h2>
                <p className="font-paragraph text-foreground/70">
                  Collect badges by participating in events and activities
                </p>
              </div>
              <div className="text-right">
                <p className="font-heading text-3xl font-bold text-neon-green">{badges.length}</p>
                <p className="font-paragraph text-sm text-foreground/60">Earned</p>
              </div>
            </div>

            {badges.length === 0 ? (
              <div className="text-center py-20 bg-background/50 border border-neon-green/30 rounded-xl">
                <Award className="w-16 h-16 text-neon-green/50 mx-auto mb-4" />
                <p className="font-paragraph text-lg text-foreground/60">
                  No badges earned yet. Start participating in events!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      rarityColors[badge.rarity || 'Common'] || rarityColors.Common
                    } rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                    
                    <div className="relative bg-background border-2 border-neon-green/30 rounded-xl p-6 h-full flex flex-col items-center text-center">
                      {/* Badge Image */}
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          rarityColors[badge.rarity || 'Common'] || rarityColors.Common
                        } rounded-full blur-lg opacity-30`} />
                        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center border-2 border-neon-green/50">
                          {badge.badgeImage ? (
                            <Image src={badge.badgeImage} alt={badge.badgeName || 'Badge'} className="w-full h-full object-cover" />
                          ) : (
                            <Award className="w-12 h-12 text-neon-green" />
                          )}
                        </div>
                      </div>

                      {/* Badge Info */}
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                        {badge.badgeName || 'Unnamed Badge'}
                      </h3>
                      
                      <p className="font-paragraph text-sm text-foreground/70 mb-3 flex-1">
                        {badge.badgeDescription || 'No description'}
                      </p>

                      {/* Rarity & Category */}
                      <div className="flex items-center gap-2 flex-wrap justify-center">
                        {badge.rarity && (
                          <span className={`px-3 py-1 rounded-full text-xs font-paragraph font-bold bg-gradient-to-r ${
                            rarityColors[badge.rarity] || rarityColors.Common
                          } text-white`}>
                            {badge.rarity}
                          </span>
                        )}
                        {badge.category && (
                          <span className="px-3 py-1 rounded-full text-xs font-paragraph font-bold bg-neon-green/20 text-neon-green border border-neon-green/30">
                            {badge.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Recent <span className="text-neon-green">Achievements</span>
            </h2>

            <div className="space-y-4">
              {[
                { title: 'First Event Attended', date: 'Jan 15, 2026', points: 100 },
                { title: 'Social Butterfly', date: 'Jan 20, 2026', points: 250 },
                { title: 'Culture Enthusiast', date: 'Jan 25, 2026', points: 500 },
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative bg-background border border-neon-green/30 rounded-xl p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-neon-green/10 rounded-lg border border-neon-green/30">
                        <Trophy className="w-6 h-6 text-neon-green" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {achievement.title}
                        </h3>
                        <p className="font-paragraph text-sm text-foreground/60">{achievement.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-2xl font-bold text-neon-green">
                        +{achievement.points}
                      </p>
                      <p className="font-paragraph text-xs text-foreground/60">points</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
