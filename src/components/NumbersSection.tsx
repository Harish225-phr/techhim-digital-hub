import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const numbers = [
  { value: 500, suffix: "K+", label: "Lines of Code Written" },
  { value: 99, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 30, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
  { value: 3, suffix: "x", label: "Avg. ROI for Clients" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const NumbersSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">By The Numbers</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Impact in <span className="gradient-text">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {numbers.map((num, i) => (
            <motion.div
              key={num.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">
                <AnimatedNumber target={num.value} suffix={num.suffix} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{num.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
