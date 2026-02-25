"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export function Hero() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from([line1Ref.current, line2Ref.current, line3Ref.current], {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Main content */}
      <div className="flex min-h-screen flex-col justify-between px-6 pb-10 pt-32 md:px-10">
        {/* Center - Main headline */}
        <div className="my-auto py-20">
          <h1 className="max-w-5xl">
            <div ref={line1Ref} className="overflow-hidden">
              <span className="block text-3xl font-medium leading-[1.3] md:text-4xl lg:text-[8vw] lg:leading-[0.95]">
                Software engineer
              </span>
            </div>
            <div ref={line2Ref} className="overflow-hidden">
              <span className="block text-3xl font-medium leading-[1.3] md:text-4xl lg:text-[8vw] lg:leading-[0.95]">
                building for mobile
              </span>
            </div>
            <div ref={line3Ref} className="overflow-hidden">
              <span className="block text-3xl font-medium leading-[1.3] md:text-4xl lg:text-[8vw] lg:leading-[0.95]">
                <span className="text-[#818cf8]">&</span> web.
              </span>
            </div>
          </h1>
        </div>

        {/* Bottom - Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-md">
            <p className="text-lg leading-relaxed text-gray-400">
              Currently available for new projects. Based in the US, working
              with teams worldwide. Specializing in React Native, TypeScript,
              and performance.
            </p>
          </div>

          <a
            href="#work"
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-white"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Indigo accent block */}
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-[#4338ca] md:h-48 md:w-48" />
    </section>
  );
}
