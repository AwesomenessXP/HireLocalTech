'use client'

import { JobCard } from "./job-card";
import { Job } from "@/types/job";

interface JobListingsProps {
  jobs: Job[];
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