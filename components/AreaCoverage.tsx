import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { WorldMap } from './ui/world-map';
import BlurText from './BlurText';
import { MapPin } from 'lucide-react';

// International coverage - Shivamogga as the base
const areaCoverageData = [
  {
    start: {
      lat: 13.9299,
      lng: 75.5681,
      label: "Shivamogga"
    },
    end: {
      lat: 40.7128,
      lng: -74.0060,
      label: "New York"
    },
  },
  {
    start: {
      lat: 13.9299,
      lng: 75.5681,
      label: "Shivamogga"
    },
    end: {
      lat: 51.5074,
      lng: -0.1278,
      label: "London"
    },
  },
  {
    start: {
      lat: 13.9299,
      lng: 75.5681,
      label: "Shivamogga"
    },
    end: {
      lat: 35.6762,
      lng: 139.6503,
      label: "Tokyo"
    },
  },
  {
    start: {
      lat: 13.9299,
      lng: 75.5681,
      label: "Shivamogga"
    },
    end: {
      lat: -33.8688,
      lng: 151.2093,
      label: "Sydney"
    },
  },
  {
    start: {
      lat: 13.9299,
      lng: 75.5681,
      label: "Shivamogga"
    },
    end: {
      lat: 1.3521,
      lng: 103.8198,
      label: "Singapore"
    },
  },
  {
    start: {
      lat: 13.9299,
      lng: 75.5681,
      label: "Shivamogga"
    },
    end: {
      lat: 25.2048,
      lng: 55.2708,
      label: "Dubai"
    },
  },
];

const cities = [
  { name: "Shivamogga", region: "India (HQ)", icon: "🏠" },
  { name: "New York", region: "USA", icon: "🗽" },
  { name: "London", region: "UK", icon: "🇬🇧" },
  { name: "Tokyo", region: "Japan", icon: "🗾" },
  { name: "Sydney", region: "Australia", icon: "🦘" },
  { name: "Singapore", region: "Singapore", icon: "🦁" },
  { name: "Dubai", region: "UAE", icon: "🏜️" },
  { name: "Toronto", region: "Canada", icon: "🍁" },
];

const AreaCoverage: React.FC = () => {
  return (
    <AnimatedSection id="area-coverage" className="py-24 bg-gradient-to-br from-white via-cream/50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <BlurText
            text="Global Service Coverage"
            className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tighter"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base md:text-lg">
            Based in Shivamogga, India, delivering exceptional web development services to clients worldwide
          </p>
        </div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <WorldMap 
            dots={areaCoverageData}
            lineColor="#FF6B00"
            showLabels={true}
            animationDuration={2}
            loop={true}
          />
        </motion.div>

        {/* Cities Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">
            International Locations We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange/10 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {city.icon}
                  </span>
                  <h4 className="font-bold text-charcoal text-lg mb-1">
                    {city.name}
                  </h4>
                  <p className="text-charcoal/60 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {city.region}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-orange/10">
                  <div className="flex items-center justify-center gap-2 text-orange text-xs font-semibold">
                    <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
                    Available
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange/10 via-orange/5 to-orange/10 rounded-2xl p-8 max-w-3xl mx-auto border border-orange/20">
            <h3 className="text-2xl font-bold text-charcoal mb-3">
              Don't see your location?
            </h3>
            <p className="text-charcoal/70 mb-6">
              I work remotely with clients across the globe. No matter where you're located, let's build something amazing together!
            </p>
            <a
              href="mailto:adicodes@outlook.com"
              className="inline-flex items-center gap-2 bg-orange text-cream px-8 py-4 rounded-full font-semibold hover:bg-orange-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange/50"
            >
              <MapPin className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default AreaCoverage;
