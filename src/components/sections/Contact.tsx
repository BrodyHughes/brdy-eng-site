"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="bg-[#4338ca] text-white">
      {/* Section header */}
      <div className="border-b border-white/20 px-6 py-6 md:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-white/60">
          Contact
        </span>
      </div>

      {/* Content */}
      <div className="px-6 py-20 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 max-w-4xl text-4xl font-semibold leading-[1.1] md:text-6xl lg:text-7xl">
            Have a project in mind? Let&apos;s talk.
          </h2>

          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <a
              href="mailto:hello@brdy.dev"
              className="group inline-flex items-center gap-3 text-xl transition-opacity hover:opacity-70 md:text-2xl"
            >
              <span className="font-mono text-sm uppercase text-white/60">Email</span>
              <span>hello@brdy.dev</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-xl transition-opacity hover:opacity-70 md:text-2xl"
            >
              <span className="font-mono text-sm uppercase text-white/60">GitHub</span>
              <span>@brdy</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-xl transition-opacity hover:opacity-70 md:text-2xl"
            >
              <span className="font-mono text-sm uppercase text-white/60">Twitter</span>
              <span>@brdy</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-white/20 px-6 py-6 md:px-10">
        <p className="font-mono text-xs text-white/60">
          Based in the US. Working with teams worldwide.
        </p>
      </div>
    </section>
  );
}
