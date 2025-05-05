import { HeroSection } from "@/components/home/hero-section";
import { SearchCategoryArea } from "@/components/home/search-category-area";
import { MainContent } from "@/components/home/main-content";

export default function Home() {
  
  return (
    <main className="bg-[#f8fafc] min-h-screen">
      <HeroSection />
      <SearchCategoryArea />
      <MainContent />
    </main>
  );
}