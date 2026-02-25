"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Rhystic Buddy",
    description:
      "Companion app for Magic: The Gathering. 60 FPS animations, 5-star reviews.",
    tags: ["React Native", "TypeScript", "Reanimated"],
    year: "2024",
    color: "bg-[#4338ca]",
  },
  {
    id: "02",
    title: "Rainbow Wallet",
    description:
      "Contributed to one of the most beloved Ethereum wallets. Performance, testing, CI/CD.",
    tags: ["React Native", "Web3", "CI/CD"],
    year: "2023",
    color: "bg-[#312e81]",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-white">
      {/* Section header */}
      <div className="border-b border-black/10 px-6 py-6 md:px-10">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            Selected Work
          </span>
          <span className="font-mono text-xs text-gray-500">
            02 Projects
          </span>
        </div>
      </div>

      {/* Projects */}
      <div>
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="group border-b border-black/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="grid md:grid-cols-12">
              {/* Image placeholder */}
              <div
                className={`aspect-[4/3] ${project.color} md:col-span-5 md:aspect-auto md:min-h-[400px]`}
              >
                <div className="flex h-full items-center justify-center p-10">
                  <span className="text-4xl font-semibold text-white/20 md:text-6xl">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:col-span-7 md:p-10">
                <div>
                  <div className="mb-6 flex items-baseline justify-between">
                    <span className="font-mono text-xs text-gray-500">
                      {project.id}
                    </span>
                    <span className="font-mono text-xs text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mb-4 text-4xl font-semibold text-black md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mb-8 max-w-md text-lg text-gray-600">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs uppercase tracking-wider text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
