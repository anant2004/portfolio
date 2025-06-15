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
  return (
    <main className="bg-black min-h-screen text-white">
      {/* glass translucent effect here */}
      {/* scrollarea from schadcn for the scroll bar on left */}
      {/* use badges from shadcn to show techstack */}
      {/* can also use hovercard from shadcn for links or acertinity alternative for it */}
      

     <ScrollProgress />
      <Spotlight/>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-gray-400 text-sm">{frontmatter.year}</p>
        <h1 className="text-4xl font-bold mt-2">{frontmatter.title}</h1>
        <p className="text-gray-400 mt-4">{frontmatter.description}</p>
        
        <div className="flex space-x-4 mt-6">
          {frontmatter.websiteLink && (
            <a
              href={frontmatter.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 rounded px-4 py-2 inline-flex items-center space-x-2"
            >
              <IconWorld/> <span>Website</span>
            </a>
          )}
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

