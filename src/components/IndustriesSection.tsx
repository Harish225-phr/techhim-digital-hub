import { motion } from "framer-motion";
import {
  Building2, ShoppingCart, GraduationCap, HeartPulse,
  Truck, Landmark, Factory, Leaf, Utensils, Plane,
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Real Estate", desc: "Property management portals, listing websites, and CRM solutions for real estate firms." },
  { icon: ShoppingCart, name: "E-Commerce", desc: "Online stores, inventory management, and payment gateway integrations." },
  { icon: GraduationCap, name: "Education", desc: "LMS platforms, student portals, and edtech solutions for modern learning." },
  { icon: HeartPulse, name: "Healthcare", desc: "Patient management systems, telemedicine apps, and health record digitization." },
  { icon: Truck, name: "Logistics", desc: "Fleet tracking, supply chain management, and warehouse automation systems." },
  { icon: Landmark, name: "Finance & Banking", desc: "Fintech dashboards, payment solutions, and regulatory compliance tools." },
  { icon: Factory, name: "Manufacturing", desc: "Production tracking, quality control dashboards, and IoT integrations." },
  { icon: Leaf, name: "Agriculture", desc: "Farm management tools, crop analytics, and marketplace platforms." },
  { icon: Utensils, name: "Food & Restaurant", desc: "Online ordering, POS systems, and delivery management platforms." },
  { icon: Plane, name: "Travel & Hospitality", desc: "Booking engines, travel portals, and hospitality management solutions." },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding" id="industries">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Industries</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            We bring deep domain expertise across diverse industries, delivering solutions that understand your business challenges.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glass-card group cursor-pointer rounded-2xl p-6 text-center transition-all duration-300 hover:glow-border"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="mb-2 font-display text-sm font-semibold text-foreground">{item.name}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
