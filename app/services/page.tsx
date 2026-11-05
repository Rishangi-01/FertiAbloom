import OurServices from "@/components/services/OurServices";
import ServiceBanner from "@/components/services/ServiceBanner";

export default function Services() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ServiceBanner />
      <OurServices />
    </div>
  );
}
