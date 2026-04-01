import { motion } from "framer-motion";
import {
  Briefcase, MapPin, Clock, ArrowRight,
  Heart, Rocket, BookOpen, Coffee, Gamepad2, Trophy,
} from "lucide-react";

const perks = [
  { icon: Rocket, title: "Fast Growth", desc: "Accelerate your career with hands-on projects and mentorship." },
  { icon: BookOpen, title: "Learning Budget", desc: "Annual budget for courses, certifications, and conferences." },
  { icon: Coffee, title: "Flexible Hours", desc: "Work when you're most productive — we trust our team." },
  { icon: Gamepad2, title: "Fun Culture", desc: "Team outings, game nights, and a vibrant work environment." },
  { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance for you and your family." },
  { icon: Trophy, title: "Recognition", desc: "Regular awards and bonuses for outstanding contributions." },
];

const openings = [
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote / Hybrid",
    department: "Engineering",
    description: "Build and maintain scalable web applications using React, Node.js, and PostgreSQL.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    description: "Design intuitive user interfaces and create seamless user experiences for our client projects.",
  },
  {
    title: "Google Apps Script Developer",
    type: "Contract",
    location: "Remote",
    department: "Automation",
    description: "Build automation solutions and custom tools using Google Workspace and Apps Script.",
  },
  {
    title: "SEO Specialist",
    type: "Full-time",
    location: "Remote / Hybrid",
    department: "Marketing",
    description: "Drive organic growth through technical SEO, content strategy, and analytics.",
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "On-site",
    department: "Sales",
    description: "Identify opportunities, build client relationships, and drive revenue growth.",
  },
];

const CareersSection = () => {
  return (
    <section className="section-padding" id="careers">
      <div className="container mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Join Our Team</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Build Your <span className="gradient-text">Career</span> With Us
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            We're looking for passionate people who want to make an impact. Join a team that values innovation, growth, and collaboration.
          </p>
        </motion.div>

        {/* Perks */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center font-display text-2xl font-bold text-foreground"
          >
            Why Work With <span className="gradient-text">TechHim</span>?
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:glow-border"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <perk.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="mb-1 font-display text-base font-semibold text-foreground">{perk.title}</h4>
                <p className="text-sm text-muted-foreground">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Openings */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-display text-2xl font-bold text-foreground"
        >
          Open <span className="gradient-text">Positions</span>
        </motion.h3>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="glass-card group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:glow-border md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h4 className="font-display text-base font-semibold text-foreground">{job.title}</h4>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {job.department}
                  </span>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">{job.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.type}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                </div>
              </div>
              <button className="gradient-btn flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm whitespace-nowrap">
                Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
