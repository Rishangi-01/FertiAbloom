import AboutHero from "@/components/about-us/AboutHero";
import AboutSec from "@/components/about-us/AboutSec";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function AboutUs() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <AboutHero />
      <AboutSec />
      <StatsSection />
      <WhyChooseUs />
    </div>
  );
}
