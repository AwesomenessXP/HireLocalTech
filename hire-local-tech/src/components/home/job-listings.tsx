'use client'

import { JobCard } from "./job-card";
import { useId } from "react";
interface JobCardProps {
  title: string;
  company: string;
  description: string;
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
          key={useId()}
          {...job}
          onApply={() => console.log(`Apply clicked for: ${job.title}`)}
        />
      ))}
    </div>
  );
}