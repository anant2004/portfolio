import { cn } from "../lib/utils";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandInstagram,
  IconMail,
  IconFile,
} from "@tabler/icons-react";

export function GridBackgroundDemo() {
  const socialLinks = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/anant2004",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "https://www.linkedin.com/in/anant-kumar-140107266/",
    },
    {
      title: "X",
      icon: <IconBrandX className="h-full w-full" />,
      href: "https://x.com/anant_ak17",
    },
    {
      title: "Resume",
      icon: <IconFile className="h-full w-full" />,
      href: "https://drive.google.com/file/d/1FjR21zi5xCYDYOutLzjEas2ACXEP6xEo/view?usp=sharing",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full" />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=anant2004infinity@gmail.com",
    },
  ];

  return (
    <div className="relative flex h-[50rem] w-full flex-col bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* Bottom fade gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        {/* Available for projects badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-neutral-950/5 px-5 py-2.5 text-base font-medium text-neutral-700 dark:bg-neutral-400/10 dark:text-neutral-400 border-2 border-neutral-950/10 dark:border-neutral-400/10 backdrop-blur">
            <span className="relative flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500"></span>
            </span>
            Available for projects
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-7xl sm:text-8xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">
          Hi, I'm Anant.
          <br />
          A full stack developer.
        </h1>
        
        {/* Description */}
        <p className="text-2xl sm:text-3xl text-neutral-700 dark:text-neutral-400 max-w-3xl mb-8">
          Mainly working in the JavaScript ecosystem, I'm a dedicated problem-solver
          who thrives on learning and building.
        </p>

        <div className="mt-8 max-w-3xl">
          <FloatingDock 
            items={socialLinks}
            desktopClassName="relative"
            mobileClassName="relative"
          />
        </div>
      </div>
    </div>
  );
}
