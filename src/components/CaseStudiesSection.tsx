import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    title: "E-Commerce Platform Overhaul",
    client: "GlobalRetail Co.",
    industry: "E-Commerce",
    description: "Rebuilt a legacy e-commerce platform into a modern React-based storefront with 3x faster load times and 45% increase in conversions.",
    metrics: [
      { icon: TrendingUp, label: "Conversion Rate", value: "+45%" },
      { icon: Clock, label: "Load Time", value: "-70%" },
      { icon: Users, label: "User Engagement", value: "+60%" },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Automated MIS Reporting System",
    client: "FinServe India",
    industry: "Finance",
    description: "Built an automated MIS system using Google Apps Script that eliminated 40+ hours of manual reporting per month.",
    metrics: [
      { icon: Clock, label: "Hours Saved/Month", value: "40+" },
      { icon: TrendingUp, label: "Accuracy", value: "99.8%" },
      { icon: Users, label: "Teams Using", value: "12" },
    ],
    tags: ["Google Apps Script", "Dashboard", "Automation"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "EdTech Learning Platform",
    client: "EduTech Pro",
    industry: "Education",
    description: "Designed and developed a full-featured LMS with video streaming, quiz engine, and certificate generation for 10,000+ students.",
    metrics: [
      { icon: Users, label: "Active Students", value: "10K+" },
      { icon: TrendingUp, label: "Course Completion", value: "+35%" },
      { icon: Clock, label: "Delivery Time", value: "8 weeks" },
    ],
    tags: ["React", "Firebase", "Video API", "PDF Gen"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Real Estate Listing Portal",
    client: "UrbanBuild",
    industry: "Real Estate",
    description: "Created a modern property listing portal with advanced search, map integration, and lead management CRM.",
    metrics: [
      { icon: TrendingUp, label: "Lead Quality", value: "+55%" },
      { icon: Users, label: "Monthly Visitors", value: "50K+" },
      { icon: Clock, label: "Time to Market", value: "6 weeks" },
    ],
    tags: ["React", "Maps API", "CRM", "SEO"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Healthcare Patient Portal",
    client: "HealthPlus",
    industry: "Healthcare",
    description: "Built a HIPAA-aware patient portal with appointment scheduling, medical records, and telemedicine integration.",
    metrics: [
      { icon: Users, label: "Patients Onboarded", value: "5K+" },
      { icon: Clock, label: "Wait Time Reduced", value: "-60%" },
      { icon: TrendingUp, label: "Satisfaction", value: "4.8/5" },
    ],
    tags: ["React", "Node.js", "WebRTC", "PostgreSQL"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Supply Chain Dashboard",
    client: "LogiTrack",
    industry: "Logistics",
    description: "Developed a real-time supply chain dashboard with GPS tracking, inventory alerts, and predictive analytics.",
    metrics: [
      { icon: TrendingUp, label: "Efficiency", value: "+40%" },
      { icon: Clock, label: "Response Time", value: "-50%" },
      { icon: Users, label: "Warehouses", value: "25+" },
    ],
    tags: ["React", "Python", "IoT", "Charts"],
    color: "from-teal-500/20 to-green-500/20",
  },
];

interface CaseStudiesSectionProps {
  limit?: number;
}

const CaseStudiesSection = ({ limit }: CaseStudiesSectionProps) => {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="section-padding" id="case-studies">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Portfolio</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Real projects, real results. Explore how we've helped businesses transform digitally.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:glow-border"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${cs.color} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-background/50 px-3 py-1 text-xs font-medium text-primary">
                    {cs.industry}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-1 font-display text-lg font-bold text-foreground">{cs.title}</h3>
                <p className="mb-3 text-xs text-primary">{cs.client}</p>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{cs.description}</p>

                {/* Metrics */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl bg-secondary/50 p-3 text-center">
                      <m.icon className="mx-auto mb-1 h-4 w-4 text-primary" />
                      <p className="font-display text-lg font-bold text-foreground">{m.value}</p>
                      <p className="text-[10px] text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
