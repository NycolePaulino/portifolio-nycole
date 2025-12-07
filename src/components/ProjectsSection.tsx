import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types'; 

interface ExtendedProjectsSectionProps {
    projects: Project[];
    openDetails: (project: Project) => void; 
}



export default function ProjectsSection({ projects, openDetails }: ExtendedProjectsSectionProps) {
    return (
        <section id="projetos" className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Meus <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projetos</span>
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            openDetails={openDetails} 
                        />
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/30">
                    <h3 className="text-2xl font-semibold mb-4">Experiência Profissional</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500/20 p-2 rounded-lg">
                                <Briefcase size={24} className="text-purple-400" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-lg">Desenvolvedora Front-end Freelancer</h4>
                                <p className="text-purple-400 text-sm mb-2">Polygon • Março 2024 - Atualmente</p>
                                <ul className="text-gray-400 text-sm space-y-2">
                                    <li>• Desenvolvimento do SisApec, reconhecido pelo MEC e OIT</li>
                                    <li>• Criação de biblioteca de componentes reutilizáveis</li>
                                    <li>• Integração com APIs REST e gerenciamento de estado</li>
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