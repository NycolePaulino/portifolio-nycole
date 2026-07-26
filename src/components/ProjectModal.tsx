import React from 'react';
import { X, Globe, Github, Apple, PlayCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300 border border-primary/40"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative p-6 md:p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors z-20 p-2 rounded-full bg-background/50"
                        aria-label="Fechar detalhes do projeto"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-background/40">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:brightness-125 transition-all flex items-center space-x-2 border border-primary/40 px-3 py-1 rounded-full text-sm">
                                <Globe size={18} />
                                <span>Ver Live</span>
                            </a>
                        )}
                        {project.appStoreUrl && (
                            <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center space-x-2 border border-border px-3 py-1 rounded-full text-sm">
                                <Apple size={18} />
                                <span>App Store</span>
                            </a>
                        )}
                        {project.playStoreUrl && (
                            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center space-x-2 border border-border px-3 py-1 rounded-full text-sm">
                                <PlayCircle size={18} />
                                <span>Google Play</span>
                            </a>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center space-x-2 border border-border px-3 py-1 rounded-full text-sm">
                                <Github size={18} />
                                <span>GitHub</span>
                            </a>
                        )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
                        {project.fullDescription}
                    </p>
                    <div className="mb-2">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Tecnologias Utilizadas</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="bg-primary/15 text-primary text-sm px-3 py-1 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
