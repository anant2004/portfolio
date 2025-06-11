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

          {/* Navigation Sections */}
          <div className="space-y-4">
            <h3 className="text-sm text-zinc-400 uppercase">Me</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/projects" className="text-zinc-300 hover:text-white transition-colors">Projects</Link>
              <Link href="/blog" className="text-zinc-300 hover:text-white transition-colors">Blog</Link>
              <Link href="/bookmarks" className="text-zinc-300 hover:text-white transition-colors">Bookmarks</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm text-zinc-400 uppercase">This site</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/analytics" className="text-zinc-300 hover:text-white transition-colors">Analytics</Link>
              <Link href="/rss" className="text-zinc-300 hover:text-white transition-colors">RSS</Link>
              <Link href="/source" className="text-zinc-300 hover:text-white transition-colors">Source code</Link>
            </nav>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="https://notion.so" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <SiNotion className="w-6 h-6" />
            </Link>
            <Link href="mailto:example@email.com" className="text-zinc-400 hover:text-white transition-colors">
              <FaEnvelope className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <FaXTwitter className="w-6 h-6" />
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