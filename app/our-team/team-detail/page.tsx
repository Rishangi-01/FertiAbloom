import DoctorDetails from "@/components/team-details/DoctorDetails";
import TeamDetailBanner from "@/components/team-details/TeamDetailBanner";

export default function TeamDetail() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <TeamDetailBanner />
      <DoctorDetails />
    </div>
  );
}
