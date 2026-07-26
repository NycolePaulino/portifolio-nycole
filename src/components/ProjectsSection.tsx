import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectsOverlay from './ProjectsOverlay';
import SectionTitle from './SectionTitle';
import { ProjectsSectionProps } from '../types';

export default function ProjectsSection({ projects, openDetails }: ProjectsSectionProps) {
    const [showAll, setShowAll] = useState(false);
    const featured = projects.slice(0, 3);

    return (
        <section id="projetos" className="relative py-24">
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    tag="// projetos"
                    title="Alguns projetos que já fiz"
                    subtitle="Entre trabalhos freelas, projetos pessoais e o que já entreguei em empresas."
                />

                <div className="grid gap-8 md:grid-cols-3">
                    {featured.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            openDetails={openDetails}
                            delay={i * 120}
                            size="large"
                        />
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setShowAll(true)}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary/60 hover:-translate-y-0.5"
                    >
                        Ver todos os projetos ({projects.length})
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {showAll && (
                <ProjectsOverlay
                    projects={projects}
                    openDetails={openDetails}
                    onClose={() => setShowAll(false)}
                />
            )}
        </section>
    );
}
