export interface Job {
    id: string;
    slug: string;
    title: string;
    company: string;
    description: string;
    long_description: string;
    tags: string[];
    logo_url: string;
    location: string;
    applicants: number;
    date_posted: string; // ISO date string
    salary: [number, number]; // Tuple: [min, max]
}