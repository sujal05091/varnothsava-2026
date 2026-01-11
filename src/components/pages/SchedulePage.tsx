import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { FestSchedule } from '@/entities';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { format } from 'date-fns';

export default function SchedulePage() {
  const [scheduleItems, setScheduleItems] = useState<FestSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<string>('all');

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      const { items } = await BaseCrudService.getAll<FestSchedule>('schedule');
      setScheduleItems(items.sort((a, b) => {
        const dateA = a.eventDate ? new Date(a.eventDate).getTime() : 0;
        const dateB = b.eventDate ? new Date(b.eventDate).getTime() : 0;
        return dateA - dateB;
      }));
    } catch (error) {
      console.error('Failed to load schedule:', error);
    } finally {
      setLoading(false);
    }
  };

  const days = ['all', ...Array.from(new Set(scheduleItems.map(item => 
    item.eventDate ? format(new Date(item.eventDate), 'MMM dd') : ''
  ).filter(Boolean)))];

  const filteredSchedule = selectedDay === 'all' 
    ? scheduleItems 
    : scheduleItems.filter(item => 
        item.eventDate && format(new Date(item.eventDate), 'MMM dd') === selectedDay
      );

  const categories = Array.from(new Set(scheduleItems.map(item => item.category).filter(Boolean)));

  const categoryColors: Record<string, string> = {
    Music: 'from-neon-green to-neon-blue',
    Dance: 'from-secondary to-neon-green',
    Art: 'from-neon-blue to-secondary',
    Workshop: 'from-neon-green to-secondary',
    Competition: 'from-secondary to-neon-blue',
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-neon-green/10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/2 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Event <span className="text-neon-green">Schedule</span>
            </h1>
            <p className="font-paragraph text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              Plan your fest experience with our detailed timeline
            </p>
          </motion.div>

          {/* Day Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 bg-background/50 backdrop-blur-sm border border-neon-green/30 rounded-xl p-2">
              <Calendar className="w-5 h-5 text-neon-green ml-2" />
              <div className="flex flex-wrap gap-2">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-lg font-paragraph text-sm font-medium transition-all ${
                      selectedDay === day
                        ? 'bg-neon-green text-black'
                        : 'text-foreground/70 hover:text-neon-green hover:bg-neon-green/10'
                    }`}
                  >
                    {day === 'all' ? 'All Days' : day}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          {/* Category Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                  categoryColors[category] || 'from-neon-green to-neon-blue'
                }`} />
                <span className="font-paragraph text-sm text-foreground/70">{category}</span>
              </div>
            ))}
          </motion.div>

          {filteredSchedule.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-paragraph text-xl text-foreground/60">No events scheduled for this day.</p>
            </motion.div>
          ) : (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-blue to-secondary hidden md:block" />

              <div className="space-y-8">
                {filteredSchedule.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-neon-green border-4 border-background hidden md:block z-10">
                      <div className="absolute inset-0 bg-neon-green rounded-full animate-ping opacity-75" />
                    </div>

                    <div className="md:ml-24 group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative bg-background border border-neon-green/30 rounded-xl p-6 sm:p-8">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                {item.category && (
                                  <span className={`px-3 py-1 rounded-full text-xs font-paragraph font-bold bg-gradient-to-r ${
                                    categoryColors[item.category] || 'from-neon-green to-neon-blue'
                                  } text-white`}>
                                    {item.category}
                                  </span>
                                )}
                              </div>
                              
                              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-neon-green transition-colors">
                                {item.eventName || 'Unnamed Event'}
                              </h3>
                              
                              {item.description && (
                                <p className="font-paragraph text-foreground/70">
                                  {item.description}
                                </p>
                              )}
                            </div>

                            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:text-right">
                              {item.eventDate && (
                                <div className="flex lg:justify-end items-center space-x-2 text-foreground/60">
                                  <Calendar className="w-4 h-4 text-neon-green" />
                                  <span className="font-paragraph text-sm">
                                    {format(new Date(item.eventDate), 'MMM dd, yyyy')}
                                  </span>
                                </div>
                              )}
                              
                              {item.eventTime && (
                                <div className="flex lg:justify-end items-center space-x-2 text-foreground/60">
                                  <Clock className="w-4 h-4 text-neon-green" />
                                  <span className="font-paragraph text-sm">{item.eventTime}</span>
                                </div>
                              )}
                              
                              {item.location && (
                                <div className="flex lg:justify-end items-center space-x-2 text-foreground/60">
                                  <MapPin className="w-4 h-4 text-neon-green" />
                                  <span className="font-paragraph text-sm">{item.location}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
