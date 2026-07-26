import { Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Reveal } from './Reveal';

const cards = [
    {
        icon: GraduationCap,
        label: 'Formação',
        value: 'Ciência da Computação',
        desc: 'UNIFAL-MG, 8° período.',
    },
    {
        icon: Briefcase,
        label: 'Experiência',
        value: '1+ ano no mercado',
        desc: 'Soluções web completas, escaláveis e focadas em UX.',
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
                                Sou a <span className="text-foreground">Nycole</span>, desenvolvedora Full
                                Stack com foco em aplicações web e mobile. Comecei trabalhando mais com
                                front-end, mas com o tempo fui ficando curiosa para entender como tudo
                                funciona por trás das telas. Hoje gosto de participar da construção da
                                solução como um todo, pensando desde a interface até as integrações, os
                                dados e as automações.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                Trabalho principalmente com{' '}
                                <span className="text-foreground">React, Next.js, React Native, TypeScript e Supabase</span>.
                                Nos últimos meses também tenho me aprofundado bastante em{' '}
                                <span className="text-foreground">integrações de IA e automações com n8n</span>,
                                criando desde chatbots de atendimento até fluxos que automatizam processos e
                                vendas.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                Já participei de um projeto reconhecido pelo MEC e pela OIT e atualmente
                                desenvolvo um produto próprio, acompanhando todas as etapas, desde o
                                levantamento dos requisitos até o desenvolvimento, deploy e manutenção.
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
