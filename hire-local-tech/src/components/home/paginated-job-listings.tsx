'use client';

import { useState } from "react";
import { Job } from "@/types/job";
import { JobListings } from "./job-listings";
import { JobPagination } from "./job-pagination";
import { useFilters } from "@/context/filter-context";
import { useCategories } from "@/context/category-context";
import { filterJobs } from "@/lib/utils/filterJobs";
const ITEMS_PER_PAGE = 10;

interface PaginatedJobListingsProps {
  jobs: Job[];
}

export function PaginatedJobListings({ jobs }: PaginatedJobListingsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const filters = useFilters();
  const { categories } = useCategories();
  
  const filteredJobs = filterJobs(jobs, filters, categories);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  return (
    <>
      {/* Results Count */}
      <div className="mt-4 sm:mt-8 text-gray-600 text-sm sm:text-base ">
        We&apos;ve found <span className="font-medium">{currentJobs.length}</span> 
        {currentJobs.length === 1 ? " job posting" : " job postings"}
      </div>

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