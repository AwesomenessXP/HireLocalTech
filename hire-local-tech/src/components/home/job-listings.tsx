'use client'

import { JobCard } from "./job-card";

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
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          {...job}
          onApply={() => console.log(`Apply clicked for: ${job.title}`)}
        />
      ))}
    </div>
  );
}