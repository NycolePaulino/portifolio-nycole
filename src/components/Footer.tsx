import bannerLogo from '../assets/icone/banner-logo.png';

export default function Footer() {
    return (
        <footer className="border-t border-border/40 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
                <img src={bannerLogo} alt="Nycole Paulino Santos, Web Developer" className="h-8 w-auto" />
                <p className="font-mono text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Nycole Paulino Santos
                </p>
            </div>
        </footer>
    );
}
