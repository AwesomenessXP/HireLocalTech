'use client';

import { useState } from "react";
import { Job } from "@/types/job";
import { JobListings } from "./job-listings";
import { JobPagination } from "./job-pagination";

const ITEMS_PER_PAGE = 5;

interface PaginatedJobListingsProps {
  jobs: Job[];
}

export function PaginatedJobListings({ jobs }: PaginatedJobListingsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, endIndex);

  return (
    <>
      <JobListings jobs={currentJobs} />
      
      {totalPages > 1 && (
        <div className="mt-8">
          <JobPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
} 