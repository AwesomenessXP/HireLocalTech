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
    <div className="flex flex-col gap-4 mt-4 py-4">
      {/* Line 1: Filter by */}
      
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          {/* Fixed width label */}
          <div className="w-28 shrink-0">
            <span className="font-medium text-sm sm:text-base">Filter by:</span>
          </div>

          {/* Dropdowns */}
          <div className="flex flex-wrap gap-2 sm:gap-2">
            <div className="min-w-[150px] flex-1 sm:flex-none sm:w-48">
              <FilterDropdown
                label="Posted"
                options={["Last 24 hours", "Last 7 days", "Last 30 days"]}
                value={datePosted}
                onChange={setDatePosted}
              />
            </div>
            <div className="min-w-[150px] flex-1 sm:flex-none sm:w-48">
              <FilterDropdown
                label="Salary"
                options={["$50k+", "$75k+", "$100k+", "$125k+"]}
                value={salary}
                onChange={setSalary}
              />
            </div>
            <div className="min-w-[150px] flex-1 sm:flex-none sm:w-48">
              <FilterDropdown
                label="Job type"
                options={["Project-based", "Internship", "Contract", "Full-time", "Part-time"]}
                value={jobType}
                onChange={setJobType}
              />
            </div>
          </div>
        </div>

      {/* Line 2: Refine by */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        {/* Same fixed width label */}
        <div className="w-28 shrink-0">
          <span className="font-medium text-sm sm:text-base">Refine by:</span>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap gap-2 sm:gap-2">
          <div className="min-w-[150px] flex-1 sm:flex-none sm:w-48">
            <FilterDropdown
              label="Experience"
              options={["Junior", "Mid-level", "Senior", "Lead"]}
              value={experience}
              onChange={setExperience}
            />
          </div>
          <div className="min-w-[150px] flex-1 sm:flex-none sm:w-48">
            <FilterDropdown
              label="Education"
              options={["No degree", "Associate", "Bachelor", "Master", "Doctorate"]}
              value={education}
              onChange={setEducation}
            />
          </div>
          <div className="min-w-[150px] flex-1 sm:flex-none sm:w-48">
            <FilterDropdown
              label="Location"
              options={["Modesto", "Stockton", "Tracy", "Turlock", "Manteca", "Lodi"]}
              value={location}
              onChange={setLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}