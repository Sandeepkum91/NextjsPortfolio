import { LandingHero } from "../src/components/components/ui/main/hero";
import { GoogleGeminiEffectDemo } from "@/src/components/components/ui/main/about";
import { AnimeNavBarDemo } from "@/src/components/components/ui/navbar/nav";
import { TimelineDemo } from "@/src/components/components/ui/main/exp";
import { SkillIconCloud } from "@/src/components/components/ui/main/skill";

export default function Home() {
  return (
    <>
      <div>
        <div className="m-20">
          <AnimeNavBarDemo />
          <main>
            <section>
              <LandingHero />
            </section>
            <section>
              <GoogleGeminiEffectDemo />
            </section>
          </main>
        </div>
        <div className="mt-90">
          <TimelineDemo />
        </div>
        <div className="m-20">
          <SkillIconCloud />
        </div>
      </div>
    </>
  );
}
