import { motion } from 'framer-motion';
import { Link, BarChart3, Shield, Zap, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Link,
      title: "Simple URL Shortening",
      description: "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.",
      gradient: "bg-feature-gradient-1",
      delay: 0.2
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.",
      gradient: "bg-feature-gradient-2",
      delay: 0.4
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.",
      gradient: "bg-feature-gradient-3",
      delay: 0.6
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast redirects and instant URL generation. Our optimized infrastructure ensures minimal latency for the best user experience.",
      gradient: "bg-feature-gradient-1",
      delay: 0.8
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Worldwide content delivery network ensures your shortened links work perfectly anywhere in the world with optimal speed and reliability.",
      gradient: "bg-feature-gradient-2",
      delay: 1.0
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with team management features, shared dashboards, and collaborative link organization tools.",
      gradient: "bg-feature-gradient-3",
      delay: 1.2
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Trusted by individuals and teams at the 
            <span className="block gradient-text">world's best companies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover why millions choose Linklytics for their URL shortening needs. 
            Our comprehensive suite of features makes link management simple and powerful.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-6"
                  >
                    <div className={`inline-flex p-4 rounded-xl ${feature.gradient} shadow-glow group-hover:shadow-glow-strong transition-all duration-500`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: feature.delay + 0.3 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-8 py-4 rounded-xl font-semibold text-white"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;