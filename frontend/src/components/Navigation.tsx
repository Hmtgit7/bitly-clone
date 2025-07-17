import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Link, Zap, Moon, Sun, LogOut, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import AuthModals from '@/components/AuthModals';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    ...(isAuthenticated ? [{ name: 'Dashboard', href: '/dashboard' }] : []),
  ];

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 dark:border-white/5 backdrop-blur-xl"
      >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <Zap className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Linklytics</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsAuthenticated(false)}
                  className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => setIsLoginOpen(true)}>
                  Login
                </Button>
                <Button variant="gradient" size="sm" onClick={() => setIsSignupOpen(true)}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card/80 backdrop-blur-lg rounded-xl mt-2 mb-4 p-4 border border-border/50"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 font-medium"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                  {isAuthenticated ? (
                    <>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-red-600 border-red-200 hover:bg-red-50"
                        onClick={() => setIsAuthenticated(false)}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" size="sm" className="w-full" onClick={() => setIsLoginOpen(true)}>
                        Login
                      </Button>
                      <Button variant="gradient" size="sm" className="w-full" onClick={() => setIsSignupOpen(true)}>
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </motion.nav>
      
      <AuthModals 
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        isSignupOpen={isSignupOpen}
        setIsSignupOpen={setIsSignupOpen}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};

export default Navigation;