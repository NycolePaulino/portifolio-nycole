import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { Typewriter } from './Typewriter';
import { Terminal } from './Terminal';
import { WHATSAPP, LINKEDIN, GITHUB, EMAIL, CV_URL } from '../constants';

export default function HeroSection() {
    return (
        <section id="home" className="relative overflow-hidden pt-32 pb-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                            disponível para novas oportunidades
                        </div>
                        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                            Nycole Paulino Santos
                        </h1>
                        <div className="mt-6 font-mono text-lg text-muted-foreground">
                            <span className="text-primary">{'> '}</span>
                            <Typewriter phrases={['Desenvolvedora Front-end & Full-Stack']} />
                        </div>
                        <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
                            Desenvolvo aplicações web e mobile com{' '}
                            <span className="text-foreground">React, Next.js e React Native</span>.
                            Atualmente, tenho focado em{' '}
                            <span className="text-foreground">integrações de IA, automações</span> e na
                            criação de soluções que simplificam processos e melhoram a experiência do
                            usuário.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#projetos"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:brightness-110 transition-all"
                            >
                                Ver Projetos <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href={CV_URL}
                                download
                                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors"
                            >
                                Baixar currículo <Download className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="mt-10 flex items-center gap-5 text-muted-foreground">
                            <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors" aria-label="Email">
                                <Mail className="h-5 w-5" />
                            </a>
                            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="WhatsApp">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </Reveal>
                    <Reveal direction="scale" delay={150}>
                        <div className="relative">
                            <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/20 blur-3xl" />
                            <Terminal />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
