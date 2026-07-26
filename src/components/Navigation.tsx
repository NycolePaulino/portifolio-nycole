import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import bannerMark from '../assets/icone/banner-mark.png';
import { CV_URL } from '../constants';

const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Contato', href: '#contato' },
];

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const solid = scrolled || open;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                solid ? 'border-b border-border/40 bg-background/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                <a href="#home" className="shrink-0" aria-label="Início">
                    <img src={bannerMark} alt="Nycole Paulino Santos" className="h-11 w-auto" />
                </a>

                <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href={CV_URL}
                    download
                    className="hidden md:inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20 transition-all"
                >
                    Baixar CV <Download className="h-4 w-4" />
                </a>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground md:hidden"
                    aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={open}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <nav className="border-t border-border/40 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-4 text-sm">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={CV_URL}
                            download
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 font-medium text-foreground hover:bg-primary/20 transition-all"
                        >
                            Baixar CV <Download className="h-4 w-4" />
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
