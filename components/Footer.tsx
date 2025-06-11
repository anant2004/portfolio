import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-24 px-4 sm:px-8 md:px-12 lg:px-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Anant Kumar</h2>
            <p className="text-zinc-400">
              A dedicated problem-solver who thrives on learning and building.
            </p>
          </div>

          {/* Empty columns for spacing */}
          <div></div>
          <div></div>

          {/* Navigation Sections - Now on the right */}
          <div className="space-y-4 text-right">
            <h3 className="text-sm text-zinc-400 uppercase">ME</h3>
            <nav className="flex flex-col items-end space-y-3">
              <Link href="https://github.com/anant2004" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">GitHub</Link>
              <Link href="https://gupdav.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">Gupdav</Link>
              <Link href="https://www.linkedin.com/in/anant-kumar-140107266/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">LinkedIn</Link>
              <Link href="https://drive.google.com/file/d/1FjR21zi5xCYDYOutLzjEas2ACXEP6xEo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">Resume</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
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
          <div className="text-zinc-400 text-sm">
            © 2024 Anant Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 