"use client";

import Link from "next/link";

interface JobBreadcrumbProps {
  jobTitle: string;
}

export function JobBreadcrumb({ jobTitle }: JobBreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-sm mb-6">
      <Link href="/" className="text-gray-500 hover:text-gray-700">
        Explore
      </Link>
      <span className="text-gray-500">/</span>
      <span className="text-gray-900">{jobTitle}</span>
    </div>
  );
} 