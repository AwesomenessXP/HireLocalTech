import { Filters } from "./filters";
import { JobListings } from "./job-listings";
import { mockJobs } from "@/lib/mocks/mockJobs";
export function MainContent() {
  const jobCards = mockJobs;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto pb-12 px-4 py-12"> {/* Added pb-12 */}
      <Filters />
  
      {/* Results Count */}
      <div className="mt-4 sm:mt-8 text-gray-600 text-sm sm:text-base ">
        We&apos;ve found <span className="font-medium">{jobCards.length}</span> job postings
      </div>
  
      {/* Job Cards */}
      <JobListings jobs={jobCards} />
    </div>
  );
} 