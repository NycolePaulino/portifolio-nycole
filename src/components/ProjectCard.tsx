import { ArrowUpRight } from 'lucide-react';
import { ProjectCardProps } from '../types';
import { Reveal } from './Reveal';

export default function ProjectCard({
    project,
    openDetails,
    delay = 0,
    size = 'default',
}: ProjectCardProps & { delay?: number; size?: 'default' | 'large' }) {
    const large = size === 'large';

    return (
        <Reveal delay={delay}>
            <article
                onClick={() => openDetails(project)}
                className={`group cursor-pointer rounded-2xl border border-border bg-card/40 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow ${
                    large ? 'p-5' : 'p-4'
                }`}
            >
                {project.category && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {project.category}
                    </span>
                )}

                <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-xl bg-background/60">
                    <img
                        src={project.imageUrl}
                        alt={`Prévia do projeto ${project.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-glow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4" />
                    </span>
                </div>

                <div className={large ? 'mt-5' : 'mt-4'}>
                    <h3 className={`font-display font-semibold ${large ? 'text-2xl' : 'text-lg'}`}>{project.title}</h3>
                    <p className={`mt-2 text-muted-foreground ${large ? 'text-base' : 'text-sm'}`}>{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                            <span key={t} className="font-mono text-[11px] text-muted-foreground">
                                #{t.toLowerCase().replace(/[^a-z0-9]+/g, '')}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </Reveal>
    );
}
