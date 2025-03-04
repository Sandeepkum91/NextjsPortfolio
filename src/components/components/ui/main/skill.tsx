import { Sparkles } from "lucide-react";
import { IconCloud } from "../skillicon";
import DisplayCards from "@/src/components/skillcard";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Development",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale before:hover:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale before:hover:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-34 translate-y-32 hover:translate-y-14",
  },
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function SkillIconCloud() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-10">
      {/* Section Heading */}
      <div className="m-20">
        <p className="text-2xl md:text-6xl font-semibold pb-15 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-950">
          Skills That Shape My Development Journey
        </p>
        <p className="text-lg text-center text-gray-300 max-w-2xl  mx-auto">
          A blend of expertise across frontend, backend, mobile, and cloud
          technologies, helping me build scalable and high-performance
          applications.
        </p>
      </div>
      {/* Skill Icons & Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Icon Cloud */}
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-10 pb-10 pt-6">
          <IconCloud iconSlugs={slugs} />
        </div>

        {/* Skill Cards */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
          {/* Skill Categories at the Top */}
          <div className="text-center space-y-4">
            {/* Development Skills */}
            {/* <div>
              <h3 className="text-xl font-semibold text-blue-500">
                Development
              </h3>
              <p className="text-gray-300">
                HTML, CSS, JavaScript, TypeScript, React.js, Next.js, React
                Native (Android), Node.js, MySQL, SQL
              </p>
            </div> */}

            {/* UI/UX & Frontend Libraries */}
           

            {/* Tools & DevOps */}
            {/* <div>
              <h3 className="text-xl font-semibold text-blue-500">
                Tools & DevOps
              </h3>
              <p className="text-gray-300">
                Git, GitHub, Jira, AWS, Docker, DBeaver
              </p>
            </div> */}

            {/* Soft Skills */}
            {/* <div>
              <h3 className="text-xl font-semibold text-blue-500">
                Soft Skills
              </h3>
              <p className="text-gray-300">
                Community Management, Teamwork, Time Management, Adaptability
              </p>
            </div> */}
          </div>

          {/* Cards Below the Skills */}
          <DisplayCards cards={defaultCards} />
        </div>
      </div>
    </div>
  );
}
