import { Filters } from "./filters";
import { mockJobs } from "@/lib/mocks/mockJobs";
import { PaginatedJobListings } from "./paginated-job-listings";

export function MainContent() {
  const jobCards = mockJobs;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto pb-12 px-4 py-12">
      <Filters />
  
      {/* Job Cards with Pagination */}
      <PaginatedJobListings jobs={jobCards} />
    </div>
  );
} 