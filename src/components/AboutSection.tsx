import { Briefcase, GraduationCap, Layers } from 'lucide-react';
import { AboutSectionProps } from '../types'; 
import SkillBar from './SkillBar';

const infoCards = [
    { icon: Briefcase, title: 'Experiência', description: 'Mais de 1 ano desenvolvendo soluções web modernas e escaláveis' },
    { icon: GraduationCap, title: 'Educação', description: 'Ciência da Computação - UNIFAL-MG (7° Período)' },
    { icon: Layers, title: 'Especialização', description: 'Front-end com React, TypeScript e Next.js' },
];


export default function AboutSection({ skills }: AboutSectionProps) {
    return (
        <section id="sobre" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Sobre <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mim</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoCards.map((card, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                            >
                            <card.icon className="text-purple-400 mb-4" size={32} />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-400">{card.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-semibold mb-6">Habilidades Técnicas</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}