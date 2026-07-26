import { Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Reveal } from './Reveal';
import { WHATSAPP, WHATSAPP_LABEL, LINKEDIN, GITHUB, EMAIL, LOCATION } from '../constants';

const links = [
    { icon: MessageCircle, label: 'WhatsApp', value: WHATSAPP_LABEL, href: WHATSAPP, external: true },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/nycole-paulino', href: LINKEDIN, external: true },
    { icon: Mail, label: 'E-mail', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Github, label: 'GitHub', value: '@nycolepaulino', href: GITHUB, external: true },
];

export default function ContactSection() {
    return (
        <section id="contato" className="relative py-24">
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    tag="// contato"
                    title="Bora trocar uma ideia?"
                    subtitle="Se tiver uma vaga, um freela ou só quiser conversar sobre algum projeto, me chama em qualquer um desses canais. Respondo mais rápido no WhatsApp."
                />

                <div className="grid gap-4 sm:grid-cols-2">
                    {links.map((c, i) => (
                        <Reveal key={c.label} delay={(i % 2) * 100}>
                            <a
                                href={c.href}
                                target={c.external ? '_blank' : undefined}
                                rel={c.external ? 'noreferrer' : undefined}
                                className="group flex h-full items-center gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                    <c.icon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                    <div className="font-mono text-xs text-primary">{c.label}</div>
                                    <div className="truncate text-sm text-foreground">{c.value}</div>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={180}>
                    <div className="mt-6 flex items-center gap-2 font-mono text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" /> {LOCATION}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
