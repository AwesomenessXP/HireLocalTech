import { HeroSection } from "@/components/home/hero-section";
import { SearchCategoryArea } from "@/components/home/search-category-area";
import { JobResults } from "@/components/home/job-results";

export default function Home() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">
      <HeroSection />
      <SearchCategoryArea />
      <JobResults />
    </main>
  );
}