'use client'

import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRelativeTime } from "@/lib/utils/date";
import { Job } from "@/types/job";

export function JobCard({
  slug,
  title,
  company,
  description,
  created_at,
  logo_url,
  employment_type,
  remote,
  experience_level,
}: Job) {

  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/jobs/${slug}`);
  };

  const postedAgo = getRelativeTime(created_at);

  return (
    <Card
      className="mt-4 hover:shadow-md transition cursor-pointer flex flex-col justify-between"
      onClick={handleCardClick}
    >
      {/* Card Header */}
      <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-4 sm:space-y-0">
        {/* Left: Logo + Job Info */}
        <div className="flex gap-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: logo_url ? logo_url : "#808080" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20L15.8033 15.8033M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className="text-gray-600 text-sm">{company}</p>
            <p className="text-gray-400 text-xs mt-1">Posted {postedAgo}</p>
          </div>
        </div>
  
        {/* Desktop-only Apply Button */}
        <div className="hidden sm:block">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="bg-[#4F46E5] text-white hover:brightness-105"
          >
            View Job <span className="ml-1">→</span>
          </Button>
        </div>
      </CardHeader>
  
      {/* Card Content */}
      <CardContent className="flex flex-col gap-4">
        <p className="text-gray-700">{description}</p>
        <div className="flex gap-2 flex-wrap">
            <span
              key={employment_type}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {employment_type}
            </span>
            <span
              key={remote}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {remote}
            </span>
            <span
              key={experience_level}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {experience_level}
            </span>
        </div>
  
        {/* Mobile-only Apply Button */}
        <div className="block sm:hidden mt-4">
          <Button
            onClick={handleCardClick}
            className="bg-[#4F46E5] w-full text-white hover:brightness-105"
          >
            View Job <span className="ml-1">→</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}