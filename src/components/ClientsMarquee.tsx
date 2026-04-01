import { motion } from "framer-motion";

const clients = [
  "StartupXYZ", "GlobalRetail Co.", "FinServe India", "EduTech Pro",
  "HealthPlus", "AgriSmart", "LogiTrack", "CloudNine Solutions",
  "DataDrive Analytics", "SmartFactory", "UrbanBuild", "PayFlow",
  "GreenEnergy Co.", "FoodChain", "TravelEase", "MediaPulse",
];

const ClientsMarquee = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Trusted By</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Partnering with businesses across industries to deliver transformative digital solutions.
          </p>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-4"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="glass-card flex min-w-[180px] items-center justify-center rounded-xl px-6 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:glow-border"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 - Reverse */}
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4"
          >
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
              <div
                key={`rev-${client}-${i}`}
                className="glass-card flex min-w-[180px] items-center justify-center rounded-xl px-6 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:glow-border"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
