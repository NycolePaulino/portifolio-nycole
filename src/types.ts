import React from 'react';


export interface Skill {
    name: string;
    level: number; 
}


export interface Project {
    title: string;
    description: string; 
    fullDescription: string; 
    tech: string[];
    highlight: boolean;
    imageUrl: string; 
    liveUrl?: string; 
    githubUrl?: string; 
    detailImages?: string[]; 
}

export interface ProjectCardProps {
    project: Project;
    openDetails: (project: Project) => void; 
}

export interface FormData {
    name: string;
    email: string;
    message: string;
}

export interface Skill {
    name: string;
    level: number; 
}


export interface NavigationProps {
    isScrolled: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    activeSection: string;
}

export interface ContactSectionProps {
    formData: FormData;
    handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface SkillBarProps {
    name: string;
    level: number;
}

export interface ProjectCardProps {
    project: Project;
}

export interface ProjectsSectionProps {
    projects: Project[];
}

export interface AboutSectionProps {
    skills: Skill[];
}