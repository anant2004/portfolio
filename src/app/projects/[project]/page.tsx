import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Spotlight } from '../../../../components/ui/spotlight-new';
import { BlurFade } from '../../../../components/BlurFade';
import { IconWorld } from '@tabler/icons-react';
import { ScrollProgress } from '../../../../components/ScrollProgress';
import { Badge } from '../../../../components/Badge';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongoose,
  SiPostman
} from 'react-icons/si';

interface ProjectProps {
  params: {
    project: string;
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/projects'));

  return files.map((filename) => ({
    project: filename.replace(/\.mdx?$/, ''),
  }));
}

export default async function ProjectPage({ params }: ProjectProps) {
  const filePath = path.join(process.cwd(), 'src/content/projects', `${params.project}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data: frontmatter, content } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();
  //console.log(contentHtml)

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "next.js":
        return <SiNextdotjs size={16} />;
      case "typescript":
        return <SiTypescript size={16} />;
      case "tailwind css":
        return <SiTailwindcss size={16} />;
      case "mongodb":
        return <SiMongodb size={16} />;
      case "vercel":
        return <SiVercel size={16} />;
      case "framer motion":
        return <SiFramer size={16} />;
      case "node.js":
        return <SiNodedotjs size={16} />;
      case "express.js":
        return <SiExpress size={16} />;
      case "mongoose":
        return <SiMongoose size={16} />;
      case "postman":
        return <SiPostman size={16} />;
      
      default:
        return null;
    }
  };

  return (
    <main className="bg-black min-h-screen text-white">
      {/* glass translucent effect here */}
      {/* scrollarea from schadcn for the scroll bar on left */}
      {/* use badges from shadcn to show techstack */}
      {/* can also use hovercard from shadcn for links or acertinity alternative for it */}


      <ScrollProgress />
      <div className='relative overflow-x-hidden'><Spotlight/></div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-gray-400 text-sm">{frontmatter.year}</p>
        <h1 className="text-4xl font-bold mt-2">{frontmatter.title}</h1>
        <p className="text-gray-400 mt-4">{frontmatter.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {frontmatter.techStack?.map((tech: string, index: number) => (
            <Badge
              key={index}
              label={tech}
              icon={getTechIcon(tech)}
            />
          ))}
        </div>
        <div className="flex space-x-4 mt-6">
          {frontmatter.telegramLink && (
            <a
              href={frontmatter.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 rounded px-4 py-2 inline-flex items-center space-x-2"
            >
              <span>📨</span> <span>Telegram</span>
            </a>
          )}
        </div>
        <BlurFade>
          {frontmatter.image && (
            <div className="mt-8 rounded overflow-hidden">
              <img src={frontmatter.image} alt={frontmatter.title} className="w-full object-cover" />
            </div>
          )}
        </BlurFade>
        <div className="prose prose-invert mt-8 prose-h2:text-3xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </main>
  );
}

