import React from 'react';
import { X, Globe, Github } from 'lucide-react';
import { Project } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectDetailsModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const allImages = [
        project.imageUrl, 
        ...(project.detailImages || [])
    ].filter(Boolean);

    return (
        <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300 border border-purple-700/50"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative p-6 md:p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 transition-colors z-20 p-2 rounded-full bg-gray-900/50" // Aumentei o z-index para z-20
                        aria-label="Fechar detalhes do projeto"
                    >
                        <X size={24} />
                    </button>
                    {allImages && allImages.length > 0 && (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation 
                            pagination={{ clickable: true }}
                            className="w-full h-96 rounded-lg mb-6 shadow-xl border border-gray-700/50 bg-black/20"
                        >
                            {allImages.map((imgUrl, index) => (
                                <SwiperSlide key={index} className="relative overflow-hidden rounded-lg bg-gray-900">
                                    <div className="absolute inset-0 z-0">
                                        <img 
                                            src={imgUrl} 
                                            alt="" 
                                            className="w-full h-full object-cover blur-2xl opacity-40 scale-110" 
                                        />
                                    </div>
                                    <div className="relative z-10 w-full h-full flex items-center justify-center p-2 md:p-4">
                                        <img 
                                            src={imgUrl} 
                                            alt={`Screenshot ${index + 1} do projeto ${project.title}`}
                                            className="max-w-full max-h-full object-contain rounded shadow-2xl ring-1 ring-white/10" 

                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {project.title}
                        </h2>
                        <div className="flex space-x-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-pink-400 transition-colors flex items-center space-x-2 border border-purple-400 px-3 py-1 rounded-full text-sm">
                                    <Globe size={18} />
                                    <span>Ver Live</span>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2 border border-gray-500 px-3 py-1 rounded-full text-sm">
                                    <Github size={18} />
                                    <span>GitHub</span>
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-8">
                        {project.fullDescription}
                    </p>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-purple-300">Tecnologias Utilizadas</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>                       
                </div>
            </div>
        </div>
    );
}