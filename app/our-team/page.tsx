import OurTeamBanner from "@/components/our-team/OurTeamBanner";
import SpecialistsSection from "@/components/our-team/SpecialistsSection";

export default function OurTeam() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <OurTeamBanner />
      <SpecialistsSection />
    </div>
  );
}
