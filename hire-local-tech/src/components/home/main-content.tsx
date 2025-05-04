import { Filters } from "./filters";
import { JobCard } from "./job-card";

export function MainContent() {
  const jobCards = Array(8).fill(null); // Replace with your actual job data array

  return (
    <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto pb-12 px-4 py-12"> {/* Added pb-12 */}
      <Filters />
  
      {/* Results Count */}
      <div className="mt-4 sm:mt-8 text-gray-600 text-sm sm:text-base ">
        We&apos;ve found <span className="font-medium">3,730</span> job postings
      </div>
  
      {jobCards.map((_, index) => (
        <JobCard key={index} />
      ))}
    </div>
  );
} 