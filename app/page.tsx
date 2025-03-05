
// import { GoogleGeminiEffectDemo } from "@/pages/about";
import { AnimeNavBarDemo } from "@/src/components/ui/navbar/nav";

// import { SkillIconCloud } from "@/pages/skill";

import GoogleGeminiEffectDemo from "./about/page";
import LandingHero from "./hero/page";
import TimelineDemo from "./experience/page";
import GallerySection from "./gallery/page";
import ProjectSection from "./project/page";
import SkillIconCloud from "./skill/page";
import Footer from "./footer/page";



export default function Home() {
  return (
    <>
      <div>
        <div className="m-20">
          <AnimeNavBarDemo/>
          <main>
            <section>
              <LandingHero/>
            </section>
            <section>
              <GoogleGeminiEffectDemo />
            </section>
          </main>
        </div>
        <div className="mt-90">
          <TimelineDemo />
        </div>
        <div className="">
          <SkillIconCloud />
        </div>
        <div className="">
          <ProjectSection/>
        </div>
          <GallerySection/>
          <Footer/>
      </div>
    </>
  );
}
