import BookAppointmentBanner from "@/components/book-appointment/BookAppointmentBanner";
import BookAppointmentSection from "@/components/book-appointment/BookAppointmentSection";

export default function BookAppointment() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BookAppointmentBanner />
      <BookAppointmentSection />
    </div>
  );
}
