import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const section = document.getElementById('home');
        
        const handleMouseMove = (e: MouseEvent) => { 
            if (section) {
                const rect = section.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        section?.addEventListener('mousemove', handleMouseMove);
        return () => section?.removeEventListener('mousemove', handleMouseMove);
    }, []); 

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 z-10">
                        <div className="space-y-2">
                            <p className="text-purple-400 text-lg font-medium">Olá, eu sou</p>
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                Nycole Paulino
                                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Santos
                                </span>
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300">
                            Desenvolvedora Front-end
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Especializada em React, TypeScript e Next.js. Transformo ideias em interfaces web modernas, responsivas e de alto desempenho.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#contato" className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                                Entre em Contato
                            </a>
                            <a href="#projetos" className="border border-purple-500 px-6 py-3 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300">
                                Ver Projetos
                            </a>
                        </div>
                    </div>
                    <div className="relative h-96 flex items-center justify-center">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="space-y-3 opacity-40">
                                <div className="flex items-center space-x-2 animate-pulse" style={{ animationDelay: '0s' }}>
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-purple-500 to-transparent rounded w-64"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-8" style={{ animationDelay: '0.2s' }}>
                                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-pink-500 to-transparent rounded w-48"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-8" style={{ animationDelay: '0.4s' }}>
                                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-purple-400 to-transparent rounded w-56"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-16" style={{ animationDelay: '0.6s' }}>
                                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-pink-400 to-transparent rounded w-40"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-8" style={{ animationDelay: '0.8s' }}>
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-purple-500 to-transparent rounded w-52"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse" style={{ animationDelay: '1s' }}>
                                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-pink-500 to-transparent rounded w-44"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-8" style={{ animationDelay: '1.2s' }}>
                                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-purple-400 to-transparent rounded w-60"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-16" style={{ animationDelay: '1.4s' }}>
                                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-pink-400 to-transparent rounded w-36"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-16" style={{ animationDelay: '1.6s' }}>
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-purple-500 to-transparent rounded w-48"></div>
                                </div>
                                <div className="flex items-center space-x-2 animate-pulse ml-8" style={{ animationDelay: '1.8s' }}>
                                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                    <div className="h-2 bg-gradient-to-r from-pink-500 to-transparent rounded w-56"></div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 animate-pulse"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
            <div 
                className="absolute w-64 h-64 bg-purple-500/30 rounded-full blur-3xl transition-all duration-100 ease-out z-0 opacity-70" 
                style={{ 
                    transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
                    display: 'none',
                }}
            ></div>
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
        </section>
    );
}