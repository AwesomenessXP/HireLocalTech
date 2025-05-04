import { Filters } from "./filters";
import { JobCard } from "./job-card";

export function JobResults() {
  return (
    <div className="w-full px-6 sm:container sm:mx-auto sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto">
        <Filters />

        {/* Results Count */}
        <div className="mt-4 sm:mt-8 text-gray-600 text-sm sm:text-base">
          We&apos;ve found <span className="font-medium">3,730</span> job postings
        </div>

        <JobCard />
      </div>
    </div>
  );
} 