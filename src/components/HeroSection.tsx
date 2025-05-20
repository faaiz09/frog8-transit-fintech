import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
}

const HeroSection = ({
  headline = "Empowering Commuter-First Financial Access",
  subheadline = "One card. One platform. One journey.",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[700px] bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
      </div>

      {/* Transit-inspired lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 right-0 h-0.5 bg-yellow-400 opacity-30"></div>
        <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-green-400 opacity-30"></div>
        <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-red-400 opacity-30"></div>
        <div className="absolute bottom-20 left-0 right-0 h-0.5 bg-blue-400 opacity-30"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {headline}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8">
            {subheadline}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">
            Frog8 is reimagining public transit into a gateway for inclusive,
            unattended financial services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
            >
              Explore Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              Investor Deck
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Abstract metro map lines */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-20"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L200,50 L400,20 L600,70 L800,40 L1000,60 L1200,30"
          stroke="#FCD34D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,20 L200,70 L400,40 L600,90 L800,60 L1000,80 L1200,50"
          stroke="#34D399"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,40 L200,10 L400,60 L600,30 L800,80 L1000,20 L1200,70"
          stroke="#F87171"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default HeroSection;
