"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="bg-black text-white">
      {/* Section header */}
      <div className="border-b border-white/10 px-6 py-6 md:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
          About
        </span>
      </div>

      {/* Content */}
      <div className="px-6 py-20 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Main text */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl font-medium leading-[1.3] md:text-4xl lg:text-5xl">
              I build high-performance mobile and web applications. 4+ years
              shipping products used by{" "}
              <span className="text-[#818cf8]">100k+ daily users</span>. I focus
              on the details that make apps feel great.
            </p>
          </motion.div>

          {/* Stats/details */}
          <motion.div
            className="space-y-10 md:col-span-4 md:col-start-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                Focus
              </span>
              <p className="mt-2 text-lg">
                React Native, TypeScript, Performance, Testing, CI/CD
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                Approach
              </span>
              <p className="mt-2 text-lg">
                Performance-first. 60 FPS or nothing. Every millisecond matters.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                Currently
              </span>
              <p className="mt-2 text-lg">
                Available for new projects and collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services grid */}
      <div className="grid border-t border-white/10 md:grid-cols-3">
        {[
          { title: "Mobile Development", desc: "React Native apps that feel native" },
          { title: "Web Development", desc: "Next.js, React, modern tooling" },
          { title: "Performance", desc: "Audits, optimization, speed" },
        ].map((service, index) => (
          <motion.div
            key={service.title}
            className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-10 md:last:border-r-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="mb-2 text-lg font-medium">{service.title}</h3>
            <p className="font-mono text-sm text-gray-500">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
