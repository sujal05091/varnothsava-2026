import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle, Star } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { FrequentlyAskedQuestions } from '@/entities';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FrequentlyAskedQuestions[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    try {
      const { items } = await BaseCrudService.getAll<FrequentlyAskedQuestions>('faqs');
      const sortedItems = items.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return (a.displayOrder || 0) - (b.displayOrder || 0);
      });
      setFaqs(sortedItems);
    } catch (error) {
      console.error('Failed to load FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(faqs.map(f => f.category).filter(Boolean)))];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-background to-secondary/10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue rounded-full blur-xl opacity-50" />
                <div className="relative bg-background border-2 border-neon-green/50 rounded-full p-6">
                  <HelpCircle className="w-12 h-12 text-neon-green" />
                </div>
              </div>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-neon-green">Questions</span>
            </h1>
            <p className="font-paragraph text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              Find answers to common questions about VARNOTHSAVA 2K26
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
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-paragraph text-xl text-foreground/60">No FAQs found in this category.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className={`relative bg-background border rounded-xl overflow-hidden transition-all ${
                    openIndex === index 
                      ? 'border-neon-green/50 shadow-lg shadow-neon-green/10' 
                      : 'border-neon-green/30'
                  }`}>
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-neon-green/5 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center space-x-3 mb-2">
                          {faq.isFeatured && (
                            <Star className="w-4 h-4 text-neon-green fill-neon-green" />
                          )}
                          {faq.category && (
                            <span className="px-2 py-1 rounded-md bg-neon-green/20 text-neon-green font-paragraph text-xs font-bold">
                              {faq.category}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-neon-green transition-colors">
                          {faq.question || 'No question'}
                        </h3>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-6 h-6 text-neon-green" />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? 'auto' : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="h-px bg-neon-green/20 mb-4" />
                        <p className="font-paragraph text-foreground/80 leading-relaxed">
                          {faq.answer || 'No answer provided'}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-secondary/20" />
            
            <div className="relative bg-background/80 backdrop-blur-sm border-2 border-neon-green/50 rounded-2xl p-12 text-center">
              <HelpCircle className="w-16 h-16 text-neon-green mx-auto mb-6" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Still Have <span className="text-neon-green">Questions?</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neon-green text-black font-paragraph font-bold rounded-lg hover:bg-neon-green/90 transition-colors"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
