
// Define a type for a single social media profile.
interface ResumeProfile {
    network: string;
    username: string;
    url: string;
}

// Define a type for a project.
export interface ResumeProject {
    name: string;
    type: string;
    tech: string[];
    images: string[];
    description: string;
    highlights: string[];
    url: string;
}

// Define a type for the user's location.
interface ResumeLocation {
    city: string;
    countryCode: string;
    region: string;
    postalCode: string;
}

// Define the core "basics" section of the resume.
// We've moved `projects` out of this section for a cleaner structure.
export interface ResumeBasics {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    portfolioUrl?: string; // Made optional
    linkedinUrl?: string; // Made optional
    githubUrl?: string; // Made optional
    // Standardizing on a single summary field for clarity.
    // 'resSummary' and 'homeSummary' could be handled by a single field or a union type if needed.
    summary: string;
    homeSummary?: string[]; // Made optional, using a single consistent name
    location: ResumeLocation;
    profiles: ResumeProfile[];
}

// The main, top-level type for the entire resume.
// This is a more typical resume data structure, with distinct sections.
export interface ResumeData {
    basics: ResumeBasics;
    // Projects is now a top-level property, which is a more logical structure.
    projects: ResumeProject[];
    // You could easily add more sections here, like:
    // work: WorkExperience[];
    // education: Education[];
    // skills: Skills[];
}
