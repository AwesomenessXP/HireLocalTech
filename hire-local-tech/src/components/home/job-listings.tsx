'use client'

import { JobCard } from "./job-card";
import { useId } from "react";
interface JobCardProps {
  id: string;
  slug: string;
  title: string;
  company: string;
  description: string;
  date_posted: string;
  long_description: string;
  tags: string[];
  iconBgColor?: string;
  onApply?: () => void;
}

interface JobListingsProps {
  jobs: JobCardProps[];
}

export function JobListings({ jobs }: JobListingsProps) {
  return (
    <div className="flex flex-col gap-4">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          {...job}
        />
      ))}
    </div>
  );
}