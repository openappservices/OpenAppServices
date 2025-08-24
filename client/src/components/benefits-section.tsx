import { motion } from "framer-motion";
import { DollarSign, Sprout, ChartLine, Shield } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs by up to 40% through intelligent automation that eliminates redundancies and optimizes resource allocation.",
      color: "bg-primary-green",
    },
    {
      icon: Sprout,
      title: "Enhanced Sustainability",
      description: "Meet your ESG goals with smart energy management and sustainable practices that reduce environmental impact by up to 60%.",
      color: "bg-accent-lime",
    },
    {
      icon: ChartLine,
      title: "Scalable Growth",
      description: "Future-proof your business with AI solutions that scale with your growth and adapt to changing market demands.",
      color: "bg-accent-cyan",
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Minimize human error and operational risks with automated quality control and predictive maintenance systems.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="benefits" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            data-testid="benefits-title"
          >
            Core Benefits
          </h2>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-testid="benefits-description"
          >
            Achieve measurable results with our proven AI automation solutions
            designed for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
                data-testid={`benefit-${index}`}
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-semibold mb-3 text-white"
                    data-testid={`benefit-title-${index}`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-gray-400 leading-relaxed"
                    data-testid={`benefit-description-${index}`}
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Sustainable business technology"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="benefits-image"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-green/20 to-accent-cyan/20 rounded-2xl"></div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-primary-green" data-testid="floating-stat-cost">
                40%
              </div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-accent-lime" data-testid="floating-stat-energy">
                60%
              </div>
              <div className="text-sm text-gray-400">Energy Savings</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
