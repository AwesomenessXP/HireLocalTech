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
  date_posted,
  logo_url,
  tags
}: Job) {

  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/jobs/${slug}`);
  };

  const postedAgo = getRelativeTime(date_posted);

  return (
    <Card className="mt-4 hover:shadow-md transition cursor-pointer" onClick={handleCardClick}>
      <CardHeader className="flex flex-row justify-between items-start space-y-0">
        <div className="flex gap-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: logo_url }}
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

        <Button
          onClick={handleCardClick}
          className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white hover:brightness-105"
        >
          Apply <span className="ml-1">→</span>
        </Button>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}