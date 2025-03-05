"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SparklesText } from "@/src/components/ui/sparkles-text";
import { ProejctLayoutGrid } from "./project";
import { GlowingEffect } from "@/src/components/ui/glowing-effect-project";


export default function ProjectSection() {
  return (
    <div className="bg-black flex flex-col justify-center items-center  pt-30 pb-50 text-white p-6">
      <p className="text-lg text-center text-gray-400 max-w-2xl  mx-auto">
        What I’ve Built
      </p>
      <div className="pt-10 pb-10 ">
        <SparklesText text="Projects That Define Me" />;
      </div>
      <p className="text-lg text-center text-gray-400 max-w-2xl mx-auto">
  Bringing ideas to life with clean code and innovative design. Each project showcases my expertise in problem-solving, performance optimization, and user-friendly interfaces. 
  <span className="text-blue-400 font-semibold"> Click </span> on any project below to explore more about the technologies used, key features, and live demos!
</p>

      <ProejctLayoutGrid />

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-white" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-white" />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-white" />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-white" />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-white" />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-700 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-gray-700  p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(255,255,255,0.1)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-gray-700 bg-gray-800 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
