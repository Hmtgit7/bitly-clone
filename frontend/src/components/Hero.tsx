import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Link, BarChart3 } from 'lucide-react';
import heroGraphic from '@/assets/hero-graphic.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20"
            >
              <span className="text-sm text-white/90">✨ New</span>
              <span className="text-sm text-white">Advanced Analytics Dashboard</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Linklytics Simplifies 
              <span className="block gradient-text">URL Shortening</span> 
              For Efficient Sharing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Linklytics streamlines the process of URL shortening, making sharing links effortless and efficient. With its user-friendly interface, Linklytics allows you to generate concise, easy-to-share URLs in seconds. Simplify your sharing experience with Linklytics today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" className="group">
                <Link className="mr-2 h-5 w-5" />
                Create Short Link
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Analytics
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-white/60">Links Shortened</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/60">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img 
                src={heroGraphic} 
                alt="Linklytics 3D Graphic" 
                className="w-full max-w-lg mx-auto filter drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-10 -left-10 glass rounded-2xl p-4 backdrop-blur-md"
              >
                <div className="text-xs text-white/80">Links Created</div>
                <div className="text-2xl font-bold text-white">247K</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-20 -right-10 glass rounded-2xl p-4 backdrop-blur-md"
              >
                <div className="text-xs text-white/80">Click Rate</div>
                <div className="text-2xl font-bold text-primary-light">96.2%</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;