import { Bot, ClipboardList, Code2, Database, Layers, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Reveal } from './Reveal';
import { TechIcon } from './TechIcon';

const skills = [
    {
        icon: Code2,
        label: 'Front-end',
        items: [
            { name: 'React', slug: 'react' },
            { name: 'Next.js', slug: 'nextdotjs' },
            { name: 'React Native', slug: 'react' },
            { name: 'TypeScript', slug: 'typescript' },
            { name: 'Tailwind CSS', slug: 'tailwindcss' },
        ],
    },
    {
        icon: Layers,
        label: 'Back-end',
        items: [
            { name: 'Node.js', slug: 'nodedotjs' },
            { name: 'Java Spring Boot', slug: 'springboot' },
            { name: 'REST APIs', slug: 'swagger' },
            { name: 'Docker', slug: 'docker' },
            { name: 'Microsserviços', slug: 'kubernetes' },
        ],
    },
    {
        icon: Bot,
        label: 'IA & Automação',
        items: [
            { name: 'n8n', slug: 'n8n' },
            { name: 'OpenAI', slug: 'openai' },
            { name: 'WhatsApp API', slug: 'whatsapp' },
        ],
    },
    {
        icon: Database,
        label: 'Dados & Infra',
        items: [
            { name: 'Supabase', slug: 'supabase' },
            { name: 'Stripe', slug: 'stripe' },
        ],
    },
    {
        icon: Sparkles,
        label: 'UI/UX',
        items: [
            { name: 'Figma', slug: 'figma' },
            { name: 'Prototipagem', slug: 'framer' },
            { name: 'Mobile First', slug: 'css3' },
        ],
    },
    {
        icon: ClipboardList,
        label: 'Processo & Ferramentas',
        items: [
            { name: 'Git', slug: 'git' },
            { name: 'Jira', slug: 'jira' },
            { name: 'Bitbucket', slug: 'bitbucket' },
            { name: 'Metodologias Ágeis', slug: 'scrumalliance' },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24">
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    tag="// stack"
                    title="Com o que eu trabalho"
                    subtitle="O que uso no dia a dia, do front ao back, passando por automação e IA."
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((s, i) => (
                        <Reveal key={s.label} delay={(i % 3) * 100}>
                            <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/60 hover:-translate-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                        <s.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold">{s.label}</h3>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {s.items.map((item) => (
                                        <span
                                            key={item.name}
                                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                                        >
                                            <TechIcon slug={item.slug} />
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
