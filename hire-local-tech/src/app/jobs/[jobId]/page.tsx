// app/jobs/[jobId]/page.tsx
import { fetchJobById } from "@/lib/mocks/mockJobs";
import { ApplyNowButton } from "@/components/jobs/apply-button";
import { JobBreadcrumb } from "@/components/jobs/job-breadcrumb";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";


export default async function JobDetailPage({ params }: { params: { jobId: string } }) {
    const { jobId } = params;
    const job = fetchJobById(jobId);
    if (!job) return <div className="p-6">Job not found</div>;

    return (
    <main className="max-w-3xl mx-auto p-6">
        <JobBreadcrumb jobTitle={job.title} />

        {/* Title Row with Icon and Apply Button */}
        <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
            <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: job.logo_url }}
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
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-gray-600">{job.company}</p>
            </div>
        </div>

        <ApplyNowButton />
        </div>

        {/* Location and Applicants Info */}
        <div className="mt-6 space-y-2 text-gray-600">
        <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{job.applicants} Applicants</span>
        </div>
        </div>

        {/* Long Description */}
        <MarkdownRenderer content={job.long_description} />

        {/* Tags */}
        <div className="flex gap-2 mt-6 flex-wrap">
        {job.tags.map((tag) => (
            <span
            key={tag}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
            {tag}
            </span>
        ))}
        </div>
    </main>
    );
}