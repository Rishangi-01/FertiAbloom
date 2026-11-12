import BlogBanner from "@/components/blog/BlogBanner";
import OurBlogSection from "@/components/blog/OurBlogSection";

export default function Blog() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BlogBanner />
      <OurBlogSection />
    </div>
  );
}
