import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types'; 

interface ExtendedProjectsSectionProps {
    projects: Project[];
    openDetails: (project: Project) => void; 
}

export default function ProjectsSection({ projects, openDetails }: ExtendedProjectsSectionProps) {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filters = ['Todos', 'Front-end', 'Full-Stack', 'UI/UX Design', 'Automação & IA'];

    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'Todos') return true;
        
        const techString = project.tech.join(', ').toLowerCase();
        const titleString = project.title.toLowerCase();
        
        if (activeFilter === 'Front-end') {
            return techString.includes('react') || techString.includes('next.js') || techString.includes('tailwind');
        }
        if (activeFilter === 'Full-Stack') {
            return techString.includes('java') || techString.includes('supabase') || techString.includes('docker') || titleString.includes('full stack');
        }
        if (activeFilter === 'UI/UX Design') {
            return techString.includes('figma') || techString.includes('ui/ux');
        }
        if (activeFilter === 'Automação & IA') {
            return techString.includes('n8n') || techString.includes('automação') || techString.includes('inteligência');
        }
        
        return true;
    });

    return (
        <section id="projetos" className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">
                    Meus <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projetos</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === filter
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            openDetails={openDetails} 
                        />
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/30">
                    <h3 className="text-2xl font-semibold mb-6">Experiência Profissional</h3>
                    
                    <div className="space-y-8">
                        
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                                <Briefcase size={24} className="text-purple-400" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-lg">Desenvolvedora Web Júnior</h4>
                                <p className="text-purple-400 text-sm mb-2">Planny Marketing • Janeiro 2026 - Atual</p>
                                <ul className="text-gray-400 text-sm space-y-2">
                                    <li>• Atuação de ponta a ponta no sistema de saúde Dor.ia (Supabase + Next.js).</li>
                                    <li>• Integração de chats de Inteligência Artificial com fluxos do n8n.</li>
                                    <li>• Desenvolvimento de interfaces dinâmicas e gerenciamento de estado.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                                <Briefcase size={24} className="text-purple-400" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-lg">Desenvolvedora Front-end</h4>
                                <p className="text-purple-400 text-sm mb-2">Polygon • Março 2025 - Dezembro 2025</p>
                                <ul className="text-gray-400 text-sm space-y-2">
                                    <li>• Desenvolvimento do SisApec, reconhecido pelo MEC e OIT</li>
                                    <li>• Criação de biblioteca de componentes reutilizáveis</li>
                                    <li>• Integração com APIs REST, autenticação (OAuth2/JWT) e gerenciamento de estado</li>
                                    <li>• Desenvolvimento ágil com Jira e Git/Bitbucket</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}