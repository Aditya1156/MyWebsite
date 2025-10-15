"use client";
import React from "react";
import { motion } from "framer-motion";

interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string;
  tags: string[];
  image?: string;
}

export const ExperienceColumn = (props: {
  className?: string;
  experiences: Experience[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.experiences.map((exp, i) => (
                <div 
                  className="p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-xl shadow-orange/5 max-w-sm w-full bg-white/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-orange/10 transition-all duration-300" 
                  key={i}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Color accent bar */}
                  <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${
                    i % 3 === 0 ? 'from-orange to-orange/70' : 
                    i % 3 === 1 ? 'from-purple-400 to-purple-300' : 
                    'from-green-500 to-green-400'
                  }`}></div>

                  <div className="relative z-10">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal mb-2">
                      {exp.role}
                    </h3>
                    
                    <p className="text-sm font-medium text-charcoal/70 flex items-center gap-2 mb-1">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full ${
                        i % 3 === 0 ? 'bg-orange' : 
                        i % 3 === 1 ? 'bg-purple-400' : 
                        'bg-green-500'
                      }`}></span>
                      {exp.organization}
                    </p>
                    
                    <p className="text-xs font-medium text-charcoal/60 mb-4 flex items-center gap-2">
                      <span className="inline-block">📅</span>
                      {exp.duration}
                    </p>
                    
                    <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs font-mono bg-gradient-to-br from-cream to-cream/80 text-charcoal/80 px-3 py-1 rounded-full border border-charcoal/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
