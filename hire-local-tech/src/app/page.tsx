import { SearchSection } from "@/components/home/search-section";
import { CategorySuggestions } from "@/components/home/category-suggestions";
import { Filters } from "@/components/home/filters";
import { JobCard } from "@/components/home/job-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-auto sm:h-[360px] w-full overflow-hidden px-4 sm:px-0">
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto h-full sm:h-[300px] relative">
          
          {/* On mobile: stack in a flex row */}
          <div className="flex sm:block items-center gap-4 pt-6">
            {/* Title */}
            <h1 className=" z-10 text-left text-3xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-600 drop-shadow leading-tight">
              The tech job board<br />for the Central Valley.
            </h1>

            {/* Image */}
            <div className="flex-shrink-0 z-0">
              <Image
                src="/city_transparent.png"
                alt="Central Valley skyline"
                width={2000}
                height={2000}
                priority
                className="h-[120px] sm:absolute sm:bottom-0 sm:right-0 sm:h-[250px] md:h-[330px] w-auto object-contain"
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
      <div className="w-full px-4 sm:container sm:mx-auto sm:px-6 py-3">
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
