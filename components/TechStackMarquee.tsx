import React from "react";
import { motion } from "motion/react";
import { FaReact, FaNode, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiMongodb, SiPostgresql, SiPostman } from "react-icons/si";

const TechIcons = {
  React: FaReact,
  Next: SiNextdotjs,
  TypeScript: SiTypescript,
  Node: FaNode,
  Tailwind: SiTailwindcss,
  JavaScript: SiJavascript,
  Docker: FaDocker,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Postman: SiPostman,
};

export function TechStackMarquee() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden rounded-lg bg-black">
      <div className="relative flex flex-col w-full h-full">
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-4 py-6 px-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {Object.entries(TechIcons).map(([name, Icon]) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center gap-3 rounded-lg bg-zinc-900 px-6 py-4 min-w-28 text-white"
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <Icon size={40} />
                </div>
                <span className="text-sm text-zinc-400">{name}</span>
              </div>
            ))}
            {Object.entries(TechIcons).map(([name, Icon]) => (
              <div
                key={name + "-duplicate"}
                className="flex flex-col items-center justify-center gap-3 rounded-lg bg-zinc-900 px-6 py-4 min-w-28 text-white"
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <Icon size={40} />
                </div>
                <span className="text-sm text-zinc-400">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 