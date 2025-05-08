import { Job } from "@/types/job";
import { FilterState } from "@/context/filter-context";
import { Category } from "@/context/category-context";

const parseSalary = (label: string) => {
    return parseInt(label.replace(/[^0-9]/g, '')) * 1000;
};

const parseDatePosted = (label: string) => {
    switch (label) {
        case "Last 24 hours":
        return new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        case "Last 7 days":
        return new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
        case "Last 30 days":
        return new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
        case "All dates":
        return new Date(0).toISOString();
        default:
        return new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    }
};

export function filterJobs(jobs: Job[], filters: FilterState, categories: Category[]): Job[] {
    const {
      datePosted,
      salary,
      jobType,
      experience,
      education,
      location,
    } = filters;
  
    const selectedCategories = categories.filter((cat) => cat.selected);
  
    return jobs.filter((job) => {
      const hasCategories =
        selectedCategories.length > 0
          ? selectedCategories.some((cat) => job.categories.includes(cat.name))
          : true;
  
      const hasDatePosted = datePosted
        ? job.created_at >= parseDatePosted(datePosted)
        : true;
  
      const hasMinSalary =
        salary && salary !== "All salaries"
          ? job.min_salary >= parseSalary(salary)
          : true;
  
      const hasJobType =
        jobType && jobType !== "All job types"
          ? job.job_type === jobType
          : true;
  
      const hasExperience =
        experience && experience !== "All experience levels"
          ? job.experience_level === experience
          : true;
  
      const hasEducation =
        education && education !== "All education levels"
          ? job.education_type.includes(education)
          : true;
  
      const hasLocation =
        location && location !== "All locations"
          ? job.location === location
          : true;
  
      const matches =
        hasCategories &&
        hasDatePosted &&
        hasMinSalary &&
        hasJobType &&
        hasExperience &&
        hasEducation &&
        hasLocation;
  
      if (!matches && process.env.NODE_ENV === "development") {
        console.log("Filtered out job:", {
          jobTitle: job.title,
          hasCategories,
          hasDatePosted,
          hasMinSalary,
          hasJobType,
          hasExperience,
          hasEducation,
          hasLocation,
        });
      }
  
      return matches;
    });
  }