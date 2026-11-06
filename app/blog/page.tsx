import BlogBanner from "@/components/blog/BlogBanner";
import BlogSection from "@/components/home/BlogSection";

export default function Blog() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BlogBanner />
      <BlogSection />
    </div>
  );
}
