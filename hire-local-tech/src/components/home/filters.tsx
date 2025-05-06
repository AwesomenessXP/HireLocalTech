'use client'

import { FilterDropdown } from "@/components/ui/dropdown-menu";
import { useFilters } from "@/context/filter-context";

export function Filters() {
  const {
    datePosted,
    salary,
    jobType,
    experience,
    education,
    location,
    setDatePosted,
    setSalary,
    setJobType,
    setExperience,
    setEducation,
    setLocation,
  } = useFilters();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-4 py-4">
      <span className="font-medium text-sm sm:text-base">Filter by:</span>
      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        <FilterDropdown 
          label="Posted" 
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
          options={["Project-based", "Internship", "Contract", "Full-time", "Part-time",]}
          value={jobType}
          onChange={setJobType}
        />
        <FilterDropdown 
          label="Experience" 
          options={["Junior", "Mid-level", "Senior", "Lead"]}
          value={experience}
          onChange={setExperience}
        />
        <FilterDropdown 
          label="Education" 
          options={["No degree", "Associate", "Bachelor", "Master", "Doctorate"]}
          value={education}
          onChange={setEducation}
        />
        <FilterDropdown 
          label="Location" 
          options={["Modesto", "Stockton", "Tracy", "Turlock", "Manteca", "Lodi"]}
          value={location}
          onChange={setLocation}
        />
      </div>
    </div>
  );
}