import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

export default function ProjectsOverlay({
    projects,
    openDetails,
    onClose,
}: {
    projects: Project[];
    openDetails: (project: Project) => void;
    onClose: () => void;
}) {
    const [activeFilter, setActiveFilter] = useState('Todos');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const categories = ['Todos', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];
    const filteredProjects =
        activeFilter === 'Todos' ? projects : projects.filter((p) => p.category === activeFilter);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
            <div className="sticky top-0 z-10 border-b border-border/60 bg-background/90 backdrop-blur-xl">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div>
                        <div className="font-mono text-xs text-primary">// todos os projetos</div>
                        <h2 className="font-display text-2xl font-bold">Todos os projetos</h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex items-center justify-center rounded-full border border-border p-2.5 text-foreground hover:border-primary/60 hover:text-primary transition-colors"
                        aria-label="Fechar"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="mb-10 flex flex-wrap gap-3">
                    {categories.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter as string)}
                            className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                                activeFilter === filter
                                    ? 'bg-primary text-primary-foreground shadow-glow'
                                    : 'border border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            openDetails={openDetails}
                            delay={(i % 3) * 100}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
