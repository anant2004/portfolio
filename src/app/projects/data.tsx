export const projects = [
  {
    slug: "gupdav",
    year: "2024",
    title: "Gupdav.com: The Personal Branding and Content Universe",
    description: "Helping business owners and founders start and grow their content to put themselves out and define a face for everything they do.",
    image: "/gupdav.png",
  },
  {
    slug: "videotube",
    year: "2024",
    title: "VideoTube: First Backend Project",
    description: "A foundational backend project built with Node.js, Express, and MongoDB, demonstrating core server-side development concepts through a video-sharing platform implementation.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1170&auto=format&fit=crop",
  },
  {
    slug: "portfolio",
    year: "2025",
    title: "Portfolio: A showcase of my work and skills",
    description: "A modern, responsive portfolio website built with Next.js, React, and TailwindCSS, showcasing my projects, skills, and professional journey through an elegant and interactive user interface.",
    image: "/portfolio.png",
  }
];

export function getProjectBySlug(slug: string){
    return projects.find(project => project.slug === slug)
}