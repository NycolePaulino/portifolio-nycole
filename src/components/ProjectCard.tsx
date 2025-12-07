import { ProjectCardProps } from '../types'; 

export default function ProjectCard({ project, openDetails }: ProjectCardProps) {
    return (
        <div
            onClick={() => openDetails(project)}
            className={`bg-gray-800/50 p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group relative overflow-hidden ${
                project.highlight ? 'border-purple-500/50 hover:border-purple-500' : 'border-gray-700 hover:border-purple-500/50'
            }`}
        >
            
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            {project.imageUrl ? (
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            ) : (
                <div className="w-full h-48 bg-gray-700/50 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Sem imagem</span>
                </div>
            )}
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-700/50 px-3 py-1 rounded-full text-purple-300">
                    {tech}
                </span>
                ))}
            </div>

            <span className="text-sm font-medium text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                Ver Detalhes →
            </span>
        </div>
    );
}