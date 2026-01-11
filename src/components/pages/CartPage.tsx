import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Image } from '@/components/ui/image';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  const total = getTotalPrice();

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

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4">
              Your <span className="text-neon-green">Cart</span>
            </h1>
            <p className="font-paragraph text-lg text-foreground/70">
              {items.length > 0 ? `${items.length} event${items.length > 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
            </p>
          </motion.div>

          {items.length === 0 ? (
            // Empty State
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue rounded-full blur-2xl opacity-30" />
                  <div className="relative bg-background border-2 border-neon-green/30 rounded-full p-12">
                    <ShoppingBag className="w-24 h-24 text-neon-green" />
                  </div>
                </div>
              </motion.div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Your Cart is Empty
              </h2>
              <p className="font-paragraph text-lg text-foreground/60 mb-8 max-w-md mx-auto">
                Looks like you haven't added any events yet. Explore our amazing lineup!
              </p>

              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-neon-green text-black font-paragraph font-bold rounded-lg hover:bg-neon-green/90 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <span>Browse Events</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative bg-background border border-neon-green/30 rounded-xl p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* Image */}
                          <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex-shrink-0">
                            {item.image ? (
                              <Image src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ShoppingBag className="w-12 h-12 text-neon-green/50" />
                              </div>
                            )}
                          </div>

                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                                {item.name}
                              </h3>
                              <p className="font-paragraph text-sm text-foreground/60 mb-3">
                                {item.date}
                              </p>
                            </div>

                            <div className="flex items-center justify-between">
                              {/* Quantity Controls */}
                              <div className="flex items-center space-x-3">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </motion.button>
                                
                                <span className="font-paragraph font-bold text-lg text-foreground w-8 text-center">
                                  {item.quantity}
                                </span>
                                
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </motion.button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <p className="font-heading text-2xl font-bold text-neon-green">
                                  ₹{item.price * item.quantity}
                                </p>
                                {item.quantity > 1 && (
                                  <p className="font-paragraph text-xs text-foreground/50">
                                    ₹{item.price} each
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Remove Button */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.id)}
                            className="absolute top-4 right-4 p-2 rounded-lg bg-destructive/10 border border-destructive/30 hover:bg-destructive hover:border-destructive transition-colors group/btn"
                          >
                            <Trash2 className="w-4 h-4 text-destructive group-hover/btn:text-destructive-foreground" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Clear Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full py-3 bg-destructive/10 border border-destructive/30 text-destructive font-paragraph font-bold rounded-lg hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  Clear Cart
                </motion.button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="sticky top-24"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-xl blur-xl opacity-50" />
                    
                    <div className="relative bg-background border-2 border-neon-green/50 rounded-xl p-6">
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Order Summary
                      </h2>

                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between font-paragraph text-foreground/70">
                          <span>Subtotal</span>
                          <span>₹{total}</span>
                        </div>
                        <div className="flex justify-between font-paragraph text-foreground/70">
                          <span>Service Fee</span>
                          <span>₹0</span>
                        </div>
                        <div className="h-px bg-neon-green/20" />
                        <div className="flex justify-between font-heading text-xl font-bold text-foreground">
                          <span>Total</span>
                          <span className="text-neon-green">₹{total}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-neon-green text-black font-paragraph font-bold rounded-lg hover:bg-neon-green/90 transition-colors mb-4"
                      >
                        Proceed to Checkout
                      </motion.button>

                      <Link to="/events">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 bg-transparent border-2 border-neon-green text-neon-green font-paragraph font-bold rounded-lg hover:bg-neon-green hover:text-black transition-colors"
                        >
                          Continue Shopping
                        </motion.button>
                      </Link>

                      <p className="font-paragraph text-xs text-foreground/50 text-center mt-6">
                        Secure checkout powered by VARNOTHSAVA
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
