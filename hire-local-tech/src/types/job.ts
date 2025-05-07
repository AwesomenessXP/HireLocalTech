export interface Job {
    id: string;
    slug: string;
    url: string | null;
    title: string;
    company: string;
    description: string;
    long_description: string;
    logo_url: string | null;
    location: string;
    applicants: number;
    created_at: string; // ISO date string
    min_salary: number;
    max_salary: number;
    employment_type: string;
    remote: string;
    experience_level: string;
}