'use client'

import { FilterDropdown } from "@/components/ui/dropdown-menu";
import { useFilters } from "@/context/filter-context";

export function Filters() {
  const {
    datePosted,
    salary,
    jobType,
    experience,
    location,
    setDatePosted,
    setSalary,
    setJobType,
    setExperience,
    setLocation,
  } = useFilters();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-4 py-4">
      <span className="font-medium text-sm sm:text-base">Filter by:</span>
      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        <FilterDropdown 
          label="Date posted" 
          options={["Last 24 hours", "Last 7 days", "Last 30 days"]}
          value={datePosted}
          onChange={setDatePosted}
        />
        <FilterDropdown 
          label="Salary" 
          options={["$50k+", "$75k+", "$100k+", "$125k+"]}
          value={salary}
          onChange={setSalary}
        />
        <FilterDropdown 
          label="Job type" 
          options={["Full-time", "Part-time", "Contract", "Internship"]}
          value={jobType}
          onChange={setJobType}
        />
        <FilterDropdown 
          label="Experience" 
          options={["No experience", "Junior", "Mid Level", "Senior", "Lead"]}
          value={experience}
          onChange={setExperience}
        />
        <FilterDropdown 
          label="Work Setting" 
          options={["On-site", "Remote", "Hybrid"]}
          value={location}
          onChange={setLocation}
        />
      </div>
    </div>
  );
}