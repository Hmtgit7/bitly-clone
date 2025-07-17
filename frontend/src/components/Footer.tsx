import { motion } from 'framer-motion';
import { Link, Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Analytics", href: "#analytics" },
        { name: "API", href: "#api" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Status", href: "#status" },
        { name: "Security", href: "#security" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
        { name: "Cookies", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-background via-background/95 to-background/90 border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
            
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Link className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold gradient-text">Linklytics</span>
                </div>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Simplifying URL shortening for efficient sharing. Create, manage, and analyze your links with the most powerful URL shortener.
                </p>
                
                {/* Social links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300 text-primary"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links sections */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: sectionIndex * 0.1 + linkIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border/50"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Stay updated with Linklytics
              </h3>
              <p className="text-muted-foreground text-sm">
                Get the latest features and updates delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 min-w-[280px]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <span>© 2025 Linklytics. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for better link sharing.</span>
            </div>
            <div className="text-xs">
              All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;