import { Reveal } from './Reveal';

export default function SectionTitle({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
    return (
        <Reveal className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-primary">
                <span className="h-px w-8 bg-primary" /> {tag}
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </Reveal>
    );
}
