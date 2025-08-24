import { motion } from "framer-motion";
import { Bot, Leaf, Brain, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "Process Automation",
      description: "Eliminate repetitive manual tasks with intelligent workflows that adapt and learn from your business patterns.",
      features: ["Workflow Design", "Task Automation", "Integration Setup"],
      gradient: "from-primary-green to-emerald-400",
    },
    {
      icon: Leaf,
      title: "Energy Optimization",
      description: "Reduce energy consumption and carbon footprint through smart resource management and predictive analytics.",
      features: ["Smart Monitoring", "Predictive Analysis", "ESG Reporting"],
      gradient: "from-accent-cyan to-blue-400",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Seamlessly integrate cutting-edge AI solutions into your existing infrastructure for maximum efficiency.",
      features: ["Custom AI Models", "System Integration", "Performance Optimization"],
      gradient: "from-accent-lime to-green-400",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            data-testid="services-title"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-accent-cyan">
              Transform Your Operations
            </span>
          </h2>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-testid="services-description"
          >
            Open App Services helps companies reduce manual, repetitive tasks and
            energy consumption through intelligent AI integration and automation
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`service-card-${index}`}
            >
              <Card className="bg-gray-900 border-gray-700 card-hover h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-4 text-white"
                    data-testid={`service-title-${index}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-400 mb-6"
                    data-testid={`service-description-${index}`}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-4 h-4 text-primary-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
