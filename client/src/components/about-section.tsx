import { motion } from "framer-motion";
import { Lightbulb, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              data-testid="about-title"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-accent-cyan">
                About Open App Services
              </span>
            </h2>
            <p
              className="text-xl text-gray-400 leading-relaxed mb-8"
              data-testid="about-description-1"
            >
              We are a forward-thinking technology company dedicated to helping
              organizations leverage AI automation for sustainable growth. Our
              mission is to bridge the gap between cutting-edge artificial
              intelligence and practical business applications, creating solutions
              that drive both profitability and environmental responsibility.
            </p>
            <p
              className="text-lg text-gray-400 leading-relaxed mb-8"
              data-testid="about-description-2"
            >
              Founded by a team of AI experts and sustainability advocates, we
              believe that the future of business lies in intelligent automation
              that not only reduces costs but also contributes to a more
              sustainable world. Our solutions are designed to evolve with your
              business, ensuring long-term success and positive environmental
              impact.
            </p>

            {/* Company Values */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid="value-innovation"
              >
                <div className="w-16 h-16 bg-primary-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">
                  Cutting-edge AI solutions
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid="value-sustainability"
              >
                <div className="w-16 h-16 bg-accent-lime rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Sustainability</h4>
                <p className="text-gray-400 text-sm">
                  Environmental responsibility
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional team collaboration"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 to-accent-cyan/10 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
