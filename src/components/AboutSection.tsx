import { Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Reveal } from './Reveal';

const cards = [
    {
        icon: GraduationCap,
        label: 'Formação',
        value: 'Ciência da Computação',
        desc: 'UNIFAL-MG, conclusão em dez. 2026.',
    },
    {
        icon: Briefcase,
        label: 'Experiência',
        value: 'Desde 2025 no mercado',
        desc: 'Back-end, front-end e agentes de IA, em empresa e como freelancer.',
    },
];

export default function AboutSection() {
    return (
        <section id="sobre" className="relative py-24">
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle tag="// sobre" title="Um pouco sobre mim" />
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                    <Reveal direction="left">
                        <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
                            <p className="text-base leading-relaxed text-muted-foreground">
                                Sou a <span className="text-foreground">Nycole</span>, desenvolvedora de
                                software. Comecei pelo front-end, mas com o tempo fui ficando curiosa para
                                entender como tudo funciona por trás das telas. Hoje passo a maior parte do
                                tempo no back-end e em produtos com IA: APIs, integrações, dados e agentes que
                                resolvem uma tarefa de verdade.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                Trabalho principalmente com{' '}
                                <span className="text-foreground">Node.js, TypeScript, Fastify e PostgreSQL</span>,
                                e uso LLMs via API (OpenAI, Claude, Gemini) com{' '}
                                <span className="text-foreground">Function Calling, RAG e embeddings</span>.
                                No front, sigo usando React, Next.js, React Native e Angular no dia a dia.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                Hoje sou trainee na A2W Tecnologia, onde ajudo a transformar um CRM/ERP
                                legado do agronegócio em micro frontends, e toco sozinha a plataforma da MilaniFlow, incluindo o agente
                                que faz a triagem do atendimento. Em outubro de 2026 dei um minicurso na
                                UNIFAL-MG sobre agentes de IA e RAG.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                O que mais gosto é resolver problemas de verdade e construir soluções que
                                façam sentido para quem vai usar. Estou sempre aprendendo coisas novas e
                                procuro um ambiente onde eu possa continuar evoluindo, trocar conhecimento
                                com outras pessoas e desenvolver produtos que gerem impacto.
                            </p>
                        </div>
                    </Reveal>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        {cards.map((c, i) => (
                            <Reveal key={c.label} direction="right" delay={i * 120}>
                                <div className="group relative h-full rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/60 hover:-translate-y-1">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                        <c.icon className="h-5 w-5" />
                                    </div>
                                    <div className="mt-4 font-mono text-xs text-primary">{c.label}</div>
                                    <div className="mt-1 font-display text-xl font-semibold">{c.value}</div>
                                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
