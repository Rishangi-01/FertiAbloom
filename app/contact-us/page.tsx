import ContactBanner from "@/components/contact/ContactBanner";
import ContactSection from "@/components/contact/ContactSection";
import LocationMapSection from "@/components/contact/LocationMapSection";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ContactBanner />
      <ContactSection />
      <LocationMapSection />
    </div>
  );
}
