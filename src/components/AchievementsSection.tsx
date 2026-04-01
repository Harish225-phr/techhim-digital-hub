import { motion } from "framer-motion";
import { Award, Star, Target, Gem, Shield, Sparkles } from "lucide-react";

const achievements = [
  { icon: Award, year: "2024", title: "Top Web Agency", desc: "Recognized as a leading web development agency for innovative digital solutions." },
  { icon: Star, year: "2024", title: "5-Star Client Rating", desc: "Maintained a perfect 5-star rating across 50+ client projects." },
  { icon: Target, year: "2025", title: "100% On-Time Delivery", desc: "Every single project delivered within the agreed timeline — zero delays." },
  { icon: Gem, year: "2025", title: "Premium Partner", desc: "Became a certified premium partner for Google Workspace solutions." },
  { icon: Shield, year: "2025", title: "Security Excellence", desc: "Achieved security compliance standards for all client data handling." },
  { icon: Sparkles, year: "2026", title: "Innovation Award", desc: "Awarded for pioneering automation solutions in the Indian market." },
];

const AchievementsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Achievements</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Awards & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Milestones that define our journey and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:glow-border"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10 group-hover:scale-150" />
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {item.year}
              </span>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2 font-display text-base font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
