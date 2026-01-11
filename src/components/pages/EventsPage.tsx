import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, MapPin, ShoppingCart, Check, Filter } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Events } from '@/entities';
import { useCartStore } from '@/store/cartStore';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { format } from 'date-fns';
import { Image } from '@/components/ui/image';

export default function EventsPage() {
  const [events, setEvents] = useState<Events[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  
  const { addItem, items: cartItems } = useCartStore();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { items } = await BaseCrudService.getAll<Events>('events');
      setEvents(items);
    } catch (error) {
      console.error('Failed to load events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (event: Events) => {
    addItem({
      id: event._id,
      name: event.eventName || 'Unnamed Event',
      price: event.eventPrice || 0,
      image: event.eventImage || '',
      date: event.eventDate ? format(new Date(event.eventDate), 'MMM dd, yyyy') : 'TBA',
    });

    setAddedItems(prev => new Set(prev).add(event._id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(event._id);
        return newSet;
      });
    }, 2000);
  };

  const isInCart = (eventId: string) => {
    return cartItems.some(item => item.id === eventId);
  };

  const categories = ['all', ...Array.from(new Set(events.map(e => e.eventLocation).filter(Boolean)))];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(e => e.eventLocation === selectedCategory);

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
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-background to-neon-blue/10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-neon-green/20 rounded-full blur-3xl"
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
              Fest <span className="text-neon-green">Events</span>
            </h1>
            <p className="font-paragraph text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover amazing events, competitions, and performances. Book your tickets now!
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 bg-background/50 backdrop-blur-sm border border-neon-green/30 rounded-xl p-2">
              <Filter className="w-5 h-5 text-neon-green ml-2" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-paragraph text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-neon-green text-black'
                        : 'text-foreground/70 hover:text-neon-green hover:bg-neon-green/10'
                    }`}
                  >
                    {category === 'all' ? 'All Events' : category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-paragraph text-xl text-foreground/60">No events found in this category.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative bg-background border border-neon-green/30 rounded-xl overflow-hidden h-full flex flex-col">
                    {/* Event Image */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-neon-green/20 to-neon-blue/20">
                      {event.eventImage ? (
                        <Image src={event.eventImage} alt={event.eventName || 'Event'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Calendar className="w-16 h-16 text-neon-green/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-neon-green text-black px-4 py-2 rounded-lg font-paragraph font-bold">
                        ₹{event.eventPrice || 0}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-neon-green transition-colors">
                        {event.eventName || 'Unnamed Event'}
                      </h3>
                      
                      <p className="font-paragraph text-sm text-foreground/70 mb-4 line-clamp-2 flex-1">
                        {event.eventDescription || 'No description available'}
                      </p>

                      <div className="space-y-2 mb-6">
                        {event.eventDate && (
                          <div className="flex items-center space-x-2 text-foreground/60">
                            <Calendar className="w-4 h-4 text-neon-green" />
                            <span className="font-paragraph text-sm">
                              {format(new Date(event.eventDate), 'MMM dd, yyyy')}
                              {event.eventTime && ` at ${event.eventTime}`}
                            </span>
                          </div>
                        )}
                        {event.eventLocation && (
                          <div className="flex items-center space-x-2 text-foreground/60">
                            <MapPin className="w-4 h-4 text-neon-green" />
                            <span className="font-paragraph text-sm">{event.eventLocation}</span>
                          </div>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddToCart(event)}
                        disabled={isInCart(event._id)}
                        className={`w-full py-3 rounded-lg font-paragraph font-bold transition-all ${
                          isInCart(event._id)
                            ? 'bg-neon-green/20 text-neon-green border-2 border-neon-green cursor-not-allowed'
                            : addedItems.has(event._id)
                            ? 'bg-neon-green text-black border-2 border-neon-green'
                            : 'bg-neon-green text-black hover:bg-neon-green/90'
                        }`}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          {isInCart(event._id) ? (
                            <>
                              <Check className="w-5 h-5" />
                              <span>In Cart</span>
                            </>
                          ) : addedItems.has(event._id) ? (
                            <>
                              <Check className="w-5 h-5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
