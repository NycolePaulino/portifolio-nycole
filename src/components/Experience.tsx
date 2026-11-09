import { Reveal } from './Reveal';
import { TechIcon } from './TechIcon';

const experience = [
    {
        period: 'Desde Set 2026',
        role: 'Desenvolvedora de Sistemas • Trainee',
        company: 'A2W Tecnologia',
        desc: 'Trabalho num CRM/ERP para o agronegócio, um monólito legado grande em Angular 14. No dia a dia, faço melhorias no sistema conforme o que os clientes pedem e corrijo bugs da plataforma. O trabalho principal é transformar esse monólito aos poucos em micro frontends com tecnologias mais recentes. Também integro no front-end os serviços que estão sendo migrados da API legada para microsserviços.',
        tech: [
            { name: 'Angular', slug: 'angular' },
            { name: 'TypeScript', slug: 'typescript' },
            { name: 'RxJS', slug: 'reactivex' },
            { name: 'Micro frontends', slug: 'webcomponentsdotorg' },
        ],
    },
    {
        period: 'Desde Fev 2026',
        role: 'Desenvolvedora Full-Stack • Freelancer',
        company: 'MilaniFlow',
        desc: 'Desenvolvo sozinha a plataforma de atendimento e gestão de transportadoras, do levantamento de requisitos ao deploy. Também construí o agente de IA que faz a triagem do atendimento: o modelo interpreta as mensagens e pede ações por Function Calling, e o backend valida os dados, executa as operações e controla o estado de cada atendimento. Ele está integrado ao WhatsApp, ao Bitsac e a serviços internos por APIs e webhooks, e hoje atende em média 200 clientes por dia em validação.',
        tech: [
            { name: 'Node.js', slug: 'nodedotjs' },
            { name: 'Next.js', slug: 'nextdotjs' },
            { name: 'TypeScript', slug: 'typescript' },
            { name: 'Supabase', slug: 'supabase' },
            { name: 'OpenAI API', slug: 'openai' },
            { name: 'WhatsApp', slug: 'whatsapp' },
        ],
    },
    {
        period: 'Jan 2026 a Set 2026',
        role: 'Desenvolvedora Full-Stack Júnior',
        company: 'Planny Marketing',
        desc: 'Desenvolvi o DOR.IA, app de acompanhamento da dor com assistente de IA (OpenAI e Claude), com backend em Node.js/TypeScript/Fastify, Supabase e React Native. O app está publicado na App Store e no Google Play, com mais de 100 downloads. Integrei o assistente a workflows do n8n por webhooks, cuidando de sessões, encaminhamento por perfil, histórico das conversas e métricas. Também entreguei 5 sites institucionais e landing pages.',
        tech: [
            { name: 'Node.js', slug: 'nodedotjs' },
            { name: 'Fastify', slug: 'fastify' },
            { name: 'React Native', slug: 'react' },
            { name: 'Supabase', slug: 'supabase' },
            { name: 'n8n', slug: 'n8n' },
        ],
    },
    {
        period: 'Mar 2025 a Dez 2025',
        role: 'Desenvolvedora Front-end',
        company: 'Polygon Soluções',
        desc: 'Atuei na arquitetura front-end do SisApec, plataforma reconhecida pelo MEC e pela OIT, com Next.js e TypeScript. Criei a biblioteca de componentes do Design System, o que ajudou a acelerar em cerca de 70% o desenvolvimento de telas novas, e integrei com APIs REST usando autenticação OAuth2/JWT. Trabalhei com metodologia ágil, Jira e Bitbucket.',
        tech: [
            { name: 'Next.js', slug: 'nextdotjs' },
            { name: 'TypeScript', slug: 'typescript' },
            { name: 'REST API', slug: 'swagger' },
            { name: 'Jira', slug: 'jira' },
            { name: 'Bitbucket', slug: 'bitbucket' },
        ],
    },
];

export default function Experience() {
    return (
        <section id="experiencia" className="relative py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-xl sm:p-10">
                    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                        <Reveal direction="left">
                            <div className="lg:sticky lg:top-28">
                                <div className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
                                    Experiências recentes
                                </div>
                                <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground">
                                    Trajetória Profissional
                                </h2>
                                <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
                                    Por onde já passei e o que venho construindo em cada lugar.
                                </p>
                            </div>
                        </Reveal>

                        <div className="relative space-y-6 border-l border-border/60 pl-8">
                            {experience.map((e, i) => (
                                <Reveal key={e.role + e.company} delay={i * 120}>
                                    <div className="relative">
                                        <span className="absolute -left-[38px] top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_16px_4px_oklch(0.62_0.24_296/0.45)]" />
                                        <div className="rounded-2xl border border-border bg-background/50 p-6 backdrop-blur transition-all hover:border-primary/50">
                                            <div className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                                                {e.period.toUpperCase()}
                                            </div>
                                            <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                                                {e.role}
                                            </h3>
                                            <div className="mt-1 font-mono text-sm text-primary">{e.company}</div>
                                            <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
                                                {e.desc}
                                            </p>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {e.tech.map((t) => (
                                                    <span
                                                        key={t.name}
                                                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                                                    >
                                                        <TechIcon slug={t.slug} className="h-3 w-3" />
                                                        {t.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
