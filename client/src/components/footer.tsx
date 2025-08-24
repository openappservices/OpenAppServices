import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";
import logoPath from "@assets/generated_images/Modern_tech_company_logo_5eea7bc7.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Process Automation",
    "Energy Optimization", 
    "AI Integration",
    "Consultation"
  ];

  const company = [
    { name: "About Us", action: () => scrollToSection("about") },
    { name: "Case Studies", action: () => {} },
    { name: "Blog", action: () => {} },
    { name: "Contact", action: () => scrollToSection("contact") }
  ];

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
            data-testid="footer-company-info"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
                <img 
                  src={logoPath} 
                  alt="Open App Services" 
                  className="w-6 h-6 text-white"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Network className="w-6 h-6 text-white hidden" />
              </div>
              <span className="text-xl font-semibold text-white">
                Open App Services
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md" data-testid="footer-description">
              Transforming businesses through intelligent AI automation solutions
              that drive sustainability and growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-green rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-linkedin"
              >
                <SiLinkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-green rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-twitter"
              >
                <SiX className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-green rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-github"
              >
                <SiGithub className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="footer-services"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-primary-green transition-colors"
                    data-testid={`footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="footer-company"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={item.action}
                    className="hover:text-primary-green transition-colors text-left"
                    data-testid={`footer-company-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          data-testid="footer-bottom"
        >
          <p className="text-gray-400">
            © 2024 Open App Services. All rights reserved. |{" "}
            <a
              href="#"
              className="text-primary-green hover:text-emerald-400 transition-colors"
              data-testid="footer-privacy"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary-green hover:text-emerald-400 transition-colors"
              data-testid="footer-terms"
            >
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
