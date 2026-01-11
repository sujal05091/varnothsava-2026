import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { GalleryPhotos } from '@/entities';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { format } from 'date-fns';
import { Image } from '@/components/ui/image';

export default function GalleryPage() {
  const [photos, setPhotos] = useState<GalleryPhotos[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhotos | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const { items } = await BaseCrudService.getAll<GalleryPhotos>('galleryphotos');
      setPhotos(items);
    } catch (error) {
      console.error('Failed to load photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const tags = ['all', ...Array.from(new Set(photos.map(p => p.eventTag).filter(Boolean)))];

  const filteredPhotos = selectedTag === 'all' 
    ? photos 
    : photos.filter(p => p.eventTag === selectedTag);

  const slidesPerView = 1;
  const maxSlide = Math.max(0, filteredPhotos.length - slidesPerView);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev >= filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev <= 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedTag]);

  // Autoplay - automatically advance slides every 4 seconds
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds per slide

    return () => clearInterval(autoplayInterval);
  }, [currentSlide, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, maxSlide]);

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
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-background to-secondary/10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
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
              Event <span className="text-neon-green">Gallery</span>
            </h1>
            <p className="font-paragraph text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              Relive the magic through our collection of memorable moments
            </p>
          </motion.div>

          {/* Tag Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 bg-background/50 backdrop-blur-sm border border-neon-green/30 rounded-xl p-2">
              <Tag className="w-5 h-5 text-neon-green ml-2" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-lg font-paragraph text-sm font-medium transition-all ${
                      selectedTag === tag
                        ? 'bg-neon-green text-black'
                        : 'text-foreground/70 hover:text-neon-green hover:bg-neon-green/10'
                    }`}
                  >
                    {tag === 'all' ? 'All Photos' : tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          {filteredPhotos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-paragraph text-xl text-foreground/60">No photos found in this category.</p>
            </motion.div>
          ) : (
            <div className="relative">
              {/* Main Carousel */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-neon-green/30 bg-background/50 backdrop-blur-sm">
                <div className="relative h-[600px]">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentSlide}
                      custom={direction}
                      initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
                      transition={{ 
                        x: { type: 'spring', stiffness: 200, damping: 30 },
                        opacity: { duration: 0.5 }
                      }}
                      className="absolute inset-0 flex items-center justify-center p-8"
                    >
                      {filteredPhotos[currentSlide] && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          whileHover={{ scale: 1.02 }}
                          className="group relative cursor-pointer w-full h-full max-w-5xl"
                          onClick={() => setSelectedPhoto(filteredPhotos[currentSlide])}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/30 to-neon-blue/30 rounded-xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
                          
                          <div className="relative h-full overflow-hidden rounded-xl border-2 border-neon-green/30 bg-background group-hover:border-neon-green transition-all duration-500 shadow-2xl">
                            {filteredPhotos[currentSlide].photoFile ? (
                              <Image 
                                src={filteredPhotos[currentSlide].photoFile} 
                                alt={filteredPhotos[currentSlide].title || 'Gallery photo'} 
                                className="w-full h-full object-contain" 
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center">
                                <Calendar className="w-24 h-24 text-neon-green/50" />
                              </div>
                            )}
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                              {filteredPhotos[currentSlide].title && (
                                <motion.h3 
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                  className="font-heading text-3xl font-bold text-white mb-3"
                                >
                                  {filteredPhotos[currentSlide].title}
                                </motion.h3>
                              )}
                              {filteredPhotos[currentSlide].eventTag && (
                                <motion.p 
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.3, duration: 0.5 }}
                                  className="font-paragraph text-lg text-neon-green"
                                >
                                  {filteredPhotos[currentSlide].eventTag}
                                </motion.p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-background/80 backdrop-blur-sm border-2 border-neon-green/30 rounded-full hover:bg-neon-green hover:border-neon-green transition-all duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 text-neon-green group-hover:text-black transition-colors" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-background/80 backdrop-blur-sm border-2 border-neon-green/30 rounded-full hover:bg-neon-green hover:border-neon-green transition-all duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 text-neon-green group-hover:text-black transition-colors" />
                </motion.button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
                {filteredPhotos.map((photo, index) => (
                  <motion.button
                    key={photo._id}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      index === currentSlide 
                        ? 'border-neon-green w-20 h-20' 
                        : 'border-neon-green/30 w-16 h-16 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {photo.photoFile ? (
                      <Image 
                        src={photo.photoFile} 
                        alt={photo.title || 'Thumbnail'} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neon-green/20 to-neon-blue/20" />
                    )}
                    {index === currentSlide && (
                      <motion.div
                        layoutId="activeThumb"
                        className="absolute inset-0 border-2 border-neon-green rounded-lg"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Slide Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <p className="font-paragraph text-sm text-foreground/60">
                  {currentSlide + 1} / {filteredPhotos.length}
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 rounded-lg bg-neon-green/10 border border-neon-green/30 hover:bg-neon-green hover:text-black transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden border-2 border-neon-green/50 bg-background">
                {selectedPhoto.photoFile ? (
                  <Image src={selectedPhoto.photoFile} alt={selectedPhoto.title || 'Gallery photo'} className="w-full h-auto max-h-[80vh] object-contain" />
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center">
                    <Calendar className="w-24 h-24 text-neon-green/50" />
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="mt-6 bg-background/80 backdrop-blur-sm border border-neon-green/30 rounded-xl p-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {selectedPhoto.title || 'Untitled'}
                </h2>
                
                {selectedPhoto.description && (
                  <p className="font-paragraph text-foreground/70 mb-6">
                    {selectedPhoto.description}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedPhoto.photographer && (
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-neon-green" />
                      <div>
                        <p className="font-paragraph text-xs text-foreground/50">Photographer</p>
                        <p className="font-paragraph text-sm text-foreground">{selectedPhoto.photographer}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedPhoto.uploadDate && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-neon-green" />
                      <div>
                        <p className="font-paragraph text-xs text-foreground/50">Date</p>
                        <p className="font-paragraph text-sm text-foreground">
                          {format(new Date(selectedPhoto.uploadDate), 'MMM dd, yyyy')}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {selectedPhoto.eventTag && (
                    <div className="flex items-center space-x-2">
                      <Tag className="w-5 h-5 text-neon-green" />
                      <div>
                        <p className="font-paragraph text-xs text-foreground/50">Event</p>
                        <p className="font-paragraph text-sm text-foreground">{selectedPhoto.eventTag}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
