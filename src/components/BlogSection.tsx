import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Why React is the Future of Web Development in 2026",
    excerpt: "Explore why React continues to dominate the frontend landscape and how businesses can leverage it for growth.",
    category: "Technology",
    readTime: "5 min read",
    date: "Mar 25, 2026",
    featured: true,
  },
  {
    title: "10 Ways Google Apps Script Can Automate Your Business",
    excerpt: "From automated emails to custom dashboards — discover how Google Apps Script can save hours of manual work.",
    category: "Automation",
    readTime: "7 min read",
    date: "Mar 18, 2026",
    featured: true,
  },
  {
    title: "SEO Best Practices for Small Businesses in India",
    excerpt: "A comprehensive guide to boosting your online visibility with proven SEO techniques tailored for Indian businesses.",
    category: "SEO",
    readTime: "6 min read",
    date: "Mar 10, 2026",
    featured: false,
  },
  {
    title: "Building Scalable MIS Systems: A Complete Guide",
    excerpt: "Learn the architecture and best practices behind building management information systems that grow with your business.",
    category: "Development",
    readTime: "8 min read",
    date: "Mar 5, 2026",
    featured: false,
  },
  {
    title: "How to Choose the Right Tech Stack for Your Startup",
    excerpt: "A founder's guide to selecting the perfect technology stack based on budget, scalability, and team expertise.",
    category: "Startup",
    readTime: "6 min read",
    date: "Feb 28, 2026",
    featured: false,
  },
  {
    title: "The Power of Real-Time Dashboards for Decision Making",
    excerpt: "How live data dashboards can transform your business operations and help you make smarter, faster decisions.",
    category: "Analytics",
    readTime: "4 min read",
    date: "Feb 20, 2026",
    featured: false,
  },
];

interface BlogSectionProps {
  limit?: number;
}

const BlogSection = ({ limit }: BlogSectionProps) => {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;
  const featuredPosts = posts.filter((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <section className="section-padding" id="blog">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Blog & Insights</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Stay updated with the latest trends, tips, and insights from the world of technology and digital transformation.
          </p>
        </motion.div>

        {/* Featured posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-8 grid gap-6 lg:grid-cols-2">
            {featuredPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:glow-border"
              >
                <div className="bg-gradient-to-br from-primary/20 to-accent/5 p-8">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                    <Tag className="h-3 w-3" /> {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Regular posts */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card group cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:glow-border"
            >
              <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3" /> {post.category}
              </span>
              <h4 className="mb-2 font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link to="/blog" className="gradient-btn inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
