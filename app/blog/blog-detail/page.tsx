import BlogDetailBanner from "@/components/blog-detail/BlogDetailBanner";
import PregnancyCareSection from "@/components/blog-detail/PregnancyCareSection";

export default function BlogDetail() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BlogDetailBanner />
      <PregnancyCareSection />
    </div>
  );
}
