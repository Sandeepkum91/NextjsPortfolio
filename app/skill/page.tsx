import { Sparkles } from "lucide-react";
// import { IconCloud } from "../skillicon";
import DisplayCards from "@/src/components/ui/skillcard";
import { TextRevealCard } from "@/src/components/ui/text-reveal-card";
import { IconCloud } from "@/src/components/ui/skillicon";
// import { TextRevealCard } from "../text-reveal-card";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Development",
    description: "Building scalable and efficient application",
    // date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale before:hover:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "UI/UX Design",
    description: "Intuitive & Aesthetic Design",
    // date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale before:hover:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "DevOps & Cloud",
    description: "Cloud & Workflow Automation",
    // date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
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

export default function SkillIconCloud() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 pb-40 mb-6">
      <TextRevealCard
        text="My Digital Toolkit"
        revealText="My Digital Toolkit"
        bgColor="white"
      />
      <div className="px-30 pb-22">
     
        <p className="text-2xl md:text-6xl font-semibold pb-15 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-950">
          Skills That Shape My Development Journey
        </p>

        <p className="text-lg text-center text-gray-400 max-w-2xl  mx-auto">
          A blend of expertise across frontend, backend, mobile, and cloud
          technologies, helping me build scalable and high-performance
          applications.
        </p>
      </div>
      {/* Skill Icons & Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Icon Cloud */}
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden  bg-background px-10 pb-10 pt-6">
          <IconCloud iconSlugs={slugs} />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
          <div className="text-center space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-500">
                Development
              </h3>
              <p className="text-gray-500">
                HTML, CSS, JavaScript, TypeScript, React.js, Next.js, React
                Native (Android), Node.js, MySQL, SQL
              </p>
            </div>

            {/* UI/UX & Frontend Libraries */}
            <div>
              <h3 className="text-xl font-semibold text-blue-500">
                UI/UX & Frontend Libraries
              </h3>
              <p className="text-gray-500">Figma, Canva, MUI, Tailwind CSS</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-500">
                Tools & DevOps
              </h3>
              <p className="text-gray-500">
                Git, GitHub, Jira, AWS, Docker, DBeaver
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-500">
                Soft Skills
              </h3>
              <p className="text-gray-500 ">
                Community Management, Teamwork, Time Management, Adaptability
              </p>
            </div>
          </div>
          <div className="pt-7">
            <DisplayCards cards={defaultCards} />
          </div>
        </div>
      </div>
    </div>
  );
}
