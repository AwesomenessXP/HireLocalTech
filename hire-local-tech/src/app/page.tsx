import { SearchSection } from "@/components/home/search-section";
import { CategorySuggestions } from "@/components/home/category-suggestions";
import { Filters } from "@/components/home/filters";
import { JobCard } from "@/components/home/job-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">
    {/* Hero Section */}
    <div className="relative h-auto sm:h-[360px] w-full overflow-hidden px-3 sm:px-0">
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto h-full sm:h-[300px] relative">
        
        {/* On mobile: center text; on larger: standard layout */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-6 text-center sm:text-left">
          {/* Text */}
          <div className="z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-600 drop-shadow leading-tight">
              The tech job board<br />for the Central Valley.
            </h1>
            <p className="mt-2 text-gray-700 sm:text-lg md:text-xl text-sm font-medium">
              (Land a tech job... without moving to the Bay)
            </p>
          </div>

          {/* Image — hidden on small screens */}
          <div className="hidden sm:block flex-shrink-0 z-0">
            <Image
              src="/city_transparent.png"
              alt="Central Valley skyline"
              width={2000}
              height={2000}
              priority
              className="sm:absolute sm:bottom-0 sm:right-0 sm:h-[250px] md:h-[330px] w-auto object-contain z-0"
            />
          </div>
        </div>
  

          {/* Search + Categories */}
          <div className="mt-6 sm:absolute sm:top-[200px] left-1/2 transform sm:-translate-x-1/2 w-full">
            <div className="flex flex-col gap-y-3 sm:gap-y-4 max-w-4xl mx-auto px-4">
              <SearchSection />
              <CategorySuggestions />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 sm:container sm:mx-auto sm:px-6 py-3">
        <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto">
          <Filters />

          {/* Results Count */}
          <div className="mt-4 sm:mt-8 text-gray-600 text-sm sm:text-base">
            We&apos;ve found <span className="font-medium">3,730</span> job postings
          </div>

          <JobCard />
        </div>
      </div>
    </main>
  );
}
