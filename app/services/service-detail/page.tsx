import GynecologyService from "@/components/service-detail/GynecologyService";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import WomensHealthSection from "@/components/service-detail/WomensHealthSection";

export default function ServiceDetail() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ServiceDetailBanner />
      <GynecologyService />
      <WomensHealthSection />
    </div>
  );
}
