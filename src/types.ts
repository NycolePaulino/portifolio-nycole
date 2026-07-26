export interface Project {
    title: string;
    description: string;
    fullDescription: string;
    tech: string[];
    highlight: boolean;
    category?: string;
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
}

export interface ProjectCardProps {
    project: Project;
    openDetails: (project: Project) => void;
}

export interface ProjectsSectionProps {
    projects: Project[];
    openDetails: (project: Project) => void;
}
