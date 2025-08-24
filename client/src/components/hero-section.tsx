import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/AI_tech_hero_background_3711c632.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with modern tech imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="AI automation technology background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight mt-8"
          data-testid="hero-headline"
        >
          <span className="text-white">AI Automation</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-accent-cyan">
            for a Smarter, Sustainable Business
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          data-testid="hero-description"
        >
          Transform your operations with intelligent automation that reduces costs,
          eliminates repetitive tasks, and drives sustainable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary-green hover:bg-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all btn-glow transform hover:scale-105"
            data-testid="hero-consultation-cta"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Get Free Consultation
          </Button>
          <Button
            variant="outline"
            className="border-2 border-gray-600 hover:border-primary-green px-8 py-4 rounded-xl text-lg font-medium transition-all hover:bg-primary-green/10"
            data-testid="hero-demo-cta"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          data-testid="hero-stats"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-green mb-2" data-testid="stat-automation">
              85%
            </div>
            <div className="text-gray-400">Task Automation Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-cyan mb-2" data-testid="stat-cost">
              40%
            </div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-lime mb-2" data-testid="stat-energy">
              60%
            </div>
            <div className="text-gray-400">Energy Savings</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
