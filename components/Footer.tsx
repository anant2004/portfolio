import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4">
        <div>
          {/* Left column: Name and description */}
          <h2 className="text-2xl font-bold mb-2">Anant Kumar</h2>
          <p className="text-zinc-400">A dedicated problem-solver who thrives on learning and building.</p>
        </div>
        <div className="flex flex-col items-end">
          {/* Right column: Links */}
          <span className="text-zinc-400 mb-2">ME</span>
          <Link href="https://github.com/anant2004" target="_blank" rel="noopener noreferrer" className="mb-1 text-zinc-300 hover:text-white transition-colors">GitHub</Link>
          <Link href="https://gupdav.com" target="_blank" rel="noopener noreferrer" className="mb-1 text-zinc-300 hover:text-white transition-colors">Gupdav</Link>
          <Link href="https://www.linkedin.com/in/anant-kumar-140107266/" target="_blank" rel="noopener noreferrer" className="mb-1 text-zinc-300 hover:text-white transition-colors">LinkedIn</Link>
          <Link href="https://drive.google.com/file/d/1FjR21zi5xCYDYOutLzjEas2ACXEP6xEo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">Resume</Link>
        </div>
      </div>
      {/* Social icons and copyright below */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link href="https://github.com/anant2004" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/anant-kumar-140107266/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
          <FaLinkedin className="w-6 h-6" />
        </Link>
        <Link href="https://x.com/anant_ak17" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
          <FaXTwitter className="w-6 h-6" />
        </Link>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=anant2004infinity@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
          <FaEnvelope className="w-6 h-6" />
        </Link>
      </div>
      <div className="mt-4 text-center text-zinc-400 text-sm">
        © 2024 Anant Kumar. All rights reserved.
      </div>
    </footer>
  );
} 