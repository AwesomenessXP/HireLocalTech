'use client';

import { useState } from "react";
import { Job } from "@/types/job";
import { JobListings } from "./job-listings";
import { JobPagination } from "./job-pagination";
import { useFilters } from "@/context/filter-context";
import { useCategories } from "@/context/category-context";

const ITEMS_PER_PAGE = 5;

interface PaginatedJobListingsProps {
  jobs: Job[];
}

export function PaginatedJobListings({ jobs }: PaginatedJobListingsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { datePosted, salary, jobType, experience, education, location } = useFilters();
  const minDatePosted = datePosted
  const { categories } = useCategories();
  
  const filteredJobs = jobs.filter(job => {
    // filter by categories
    let categoriesSelected = categories.filter((cat) => cat.selected);
    const hasCategories = categoriesSelected.length > 0 ? 
        categories.some((cat) => {
          return cat.selected ? job.categories.includes(cat.name) : false;
        }) : true;

    const parseSalary = (label: string) => {
      return parseInt(label.replace(/[^0-9]/g, '')) * 1000;
    };

    const parseDatePosted = (label: string) => {
      switch (label) {
        case "Last 24 hours":
          return new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        case "Last 7 days":
          return new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
        case "Last 30 days":
          return new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
        case "All dates":
          return new Date(0).toISOString();
        default:
          return new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      }
    };

    const hasDatePosted = datePosted ? job.created_at >= parseDatePosted(minDatePosted) : true;
    const hasMinSalary = salary ? job.min_salary >= parseSalary(salary) || salary == "All salaries" : true;
    const hasJobType = jobType ? job.job_type == jobType || jobType == "All job types" : true;
    const hasExperience = experience ? job.experience_level === experience || experience == "All experience levels" : true;
    const hasEducation = education ? job.education_type.includes(education) || education == "All education levels" : true;
    const hasLocation = location ? job.location === location || location == "All locations" : true;
    
    const matches = hasDatePosted &&
    hasMinSalary &&
    hasJobType &&
    hasExperience &&
    hasEducation &&
    hasLocation &&
    hasCategories;

    // Debug this specific job and what caused it to be excluded
    if (!matches) {
      console.log("Filtered out job:", {
        jobTitle: job.title,
        hasDatePosted,
        hasMinSalary,
        hasJobType,
        hasExperience,
        hasEducation,
        hasLocation,
        hasCategories
      });
    }

    return matches;
  })

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

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