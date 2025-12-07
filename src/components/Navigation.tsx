import { NavigationProps } from '../types'; 


export default function Navigation({ isScrolled, setActiveSection }: NavigationProps) {
  const navItems = ['Home', 'Sobre', 'Projetos', 'Contato'];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        NP
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
                            onClick={() => setActiveSection(item.toLowerCase())}
                        >
                            {item}
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}