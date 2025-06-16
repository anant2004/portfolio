import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    year: "2024",
    title: "Gupdav.com: The Personal Branding and Content Universe",
    description: "Helping business owners and founders start and grow their content to put themselves out and define a face for everything they do.",
    image: "/gupdav.png",
    link: "/projects/gupdav"
  },
  {
    year: "2024",
    title: "VideoTube: First Backend Project",
    description: "A foundational backend project built with Node.js, Express, and MongoDB, demonstrating core server-side development concepts through a video-sharing platform implementation.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1170&auto=format&fit=crop",
    link: "/projects/videotube"
  },
  {
    year: "2025",
    title: "Portfolio: A showcase of my work and skills",
    description: "A modern, responsive portfolio website built with Next.js, React, and TailwindCSS, showcasing my projects, skills, and professional journey through an elegant and interactive user interface.",
    image: "/portfolio.png",
    link: "/projects/portfolio"
  }
];

export function ProjectSection() {
  return (
    <div className="w-full bg-black text-white py-24 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-emerald-400 bg-emerald-950/40 rounded-full">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.6C7.05701 1.6 6.15264 1.93714 5.47753 2.53726C4.80241 3.13737 4.4 3.95131 4.4 4.8V5.6H3.6C2.91635 5.6 2.26139 5.85286 1.78629 6.30294C1.31119 6.75303 1.04 7.37043 1.04 8.016L1.6 12.816C1.62813 13.2374 1.83427 13.6285 2.17156 13.9091C2.50885 14.1897 2.94876 14.3398 3.4 14.328H12.6C13.0513 14.3398 13.4912 14.1897 13.8284 13.9091C14.1657 13.6285 14.3719 13.2374 14.4 12.816L14.96 8.016C14.96 7.37043 14.6888 6.75303 14.2137 6.30294C13.7386 5.85286 13.0837 5.6 12.4 5.6H11.6V4.8C11.6 3.95131 11.1976 3.13737 10.5225 2.53726C9.84736 1.93714 8.94299 1.6 8 1.6ZM8 2.4C8.74065 2.4 9.45119 2.67428 9.97631 3.16188C10.5014 3.64947 10.8 4.31304 10.8 5V5.6H5.2V5C5.2 4.31304 5.49857 3.64947 6.02369 3.16188C6.54881 2.67428 7.25935 2.4 8 2.4ZM3.6 6.4H12.4C12.8243 6.4 13.2313 6.55857 13.5314 6.84113C13.8314 7.12369 14 7.50783 14 7.908L13.44 12.724C13.4251 12.9538 13.3163 13.1678 13.1381 13.3218C12.9598 13.4758 12.7273 13.5581 12.488 13.552H3.512C3.27016 13.5547 3.03676 13.4697 2.85872 13.3139C2.68069 13.1581 2.57228 12.9429 2.56 12.712L2 7.908C2 7.50783 2.16857 7.12369 2.46863 6.84113C2.76869 6.55857 3.17565 6.4 3.6 6.4Z" fill="currentColor"/>
              </svg>
              <span className="text-base font-medium">Projects</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-semibold mb-6">
              Milestones in the<br />
              learning journey
            </h2>
            <p className="text-lg text-zinc-400">
              Each project marks a step forward, showcasing my growth and journey as a developer.
              Explore how I've tackled challenges and built solutions along the way.
            </p>
          </div>
          <Link 
            href="/projects"
            className="hidden md:flex items-center gap-2 px-6 py-3 text-base text-white border border-zinc-800 rounded-full hover:bg-zinc-800/50 transition-colors"
          >
            View all projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group" target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-[4/3] mb-6 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="text-zinc-500">{project.year}</div>
                <h3 className="text-2xl font-normal line-clamp-2">{project.title}</h3>
                <p className="text-zinc-400 line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Projects Button */}
        <Link 
          href="/projects" 
          className="md:hidden flex items-center justify-center gap-2 px-6 py-3 mt-12 text-base text-white border border-zinc-800 rounded-full hover:bg-zinc-800/50 transition-colors"
        >
          View all projects
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}