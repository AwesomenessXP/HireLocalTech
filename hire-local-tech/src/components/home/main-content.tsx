import { Filters } from "./filters";
import { JobListings } from "./job-listings";

export function MainContent() {
  const jobCards = [
    {
      title: "Frontend Developer",
      company: "ValleyTech Co.",
      description: "Build modern web apps using React and Tailwind CSS for Central Valley businesses.",
      tags: ["Full-time", "Remote", "Mid-Level"],
      iconBgColor: "#E1F7E9",
    },
    {
      title: "IT Support Specialist",
      company: "Fresno General Hospital",
      description: "Provide responsive tech support and system maintenance for hospital staff.",
      tags: ["Full-time", "On-site", "Entry Level"],
      iconBgColor: "#FFE5F7",
    },
    {
      title: "Data Analyst",
      company: "Modesto Analytics Group",
      description: "Analyze and visualize business performance data using SQL and Tableau.",
      tags: ["Contract", "Hybrid", "Mid-Level"],
      iconBgColor: "#FAFFA5",
    },
    {
      title: "Backend Engineer",
      company: "AgriCloud Inc.",
      description: "Develop APIs and cloud infrastructure for precision agriculture tools.",
      tags: ["Full-time", "Remote", "Senior"],
      iconBgColor: "#E5F3FF",
    },
    {
      title: "Cybersecurity Analyst",
      company: "City of Stockton",
      description: "Monitor threats and harden municipal IT systems from security vulnerabilities.",
      tags: ["Full-time", "On-site", "Senior"],
      iconBgColor: "#F0E5FF",
    },
    {
      title: "Product Designer",
      company: "Seed & Pixel",
      description: "Design intuitive UIs for SaaS products focused on farm and inventory tools.",
      tags: ["Full-time", "Hybrid", "Mid-Level"],
      iconBgColor: "#FFF2E5",
    },
    {
      title: "DevOps Engineer",
      company: "CloudHarvest",
      description: "Implement CI/CD pipelines and manage AWS environments for agri-tech solutions.",
      tags: ["Full-time", "Remote", "Senior"],
      iconBgColor: "#E1F0FF",
    },
    {
      title: "CRM Administrator",
      company: "Riverbank Solar",
      description: "Customize and maintain HubSpot CRM to support sales and service teams.",
      tags: ["Part-time", "Remote", "Mid-Level"],
      iconBgColor: "#E0FFEB",
    },
    {
      title: "QA Tester",
      company: "Central Valley Code Labs",
      description: "Test new features and report bugs for a suite of web and mobile tools.",
      tags: ["Internship", "On-site", "Entry Level"],
      iconBgColor: "#FFF3F3",
    },
    {
      title: "Machine Learning Engineer",
      company: "CropAI",
      description: "Build and deploy predictive models for crop yield optimization.",
      tags: ["Full-time", "Hybrid", "Senior"],
      iconBgColor: "#F3F0FF",
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto pb-12 px-4 py-12"> {/* Added pb-12 */}
      <Filters />
  
      {/* Results Count */}
      <div className="mt-4 sm:mt-8 text-gray-600 text-sm sm:text-base ">
        We&apos;ve found <span className="font-medium">{jobCards.length}</span> job postings
      </div>
  
      {/* Job Cards */}
      <JobListings jobs={jobCards} />
    </div>
  );
} 