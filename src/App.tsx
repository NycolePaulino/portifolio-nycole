import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailsModal from './components/ProjectModal';
import sisapecPacientes from "./assets/ProjectSisapecImages/sisapecPacientes.png";
import sisapecInicial from "./assets/ProjectSisapecImages/sisapecInicial.png"; 
import sisapecLogin from "./assets/ProjectSisapecImages/sisapecLogin.png";
import sisapecPrincipal from "./assets/ProjectSisapecImages/sisapecPrincipal.png"
import { Skill, Project, FormData } from './types'; 
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjkadyoz'; 
import APARATUS from "./assets/ProjectsBarbeariaImages/logo.png";
import aparatusAgendamento from "./assets/ProjectsBarbeariaImages/agendamentos.png";
import aparatusBarbearias from "./assets/ProjectsBarbeariaImages/barbearis.png";
import aparatusPagamentos from "./assets/ProjectsBarbeariaImages/pagamento.png";
import aparatusInicial from "./assets/ProjectsBarbeariaImages/telaInicial.png";
import sisapcClinicas from "./assets/ProjectSisapecImages/clinicas.png";
import sisapecModal from "./assets/ProjectSisapecImages/modal.png";
import sisapecModalDiagnosticos from "./assets/ProjectSisapecImages/modalDiagnosticos.png";
import sisapecModalPacientes from "./assets/ProjectSisapecImages/modalPaciente.png";
import sisapecModalTarefas from "./assets/ProjectSisapecImages/modalTarefas.png";
import sisapecPageTerfas from "./assets/ProjectSisapecImages/PageTarefas.png";


const skillsData: Skill[] = [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS / UI Libs', level: 90 },
    
    { name: 'Java Spring Boot', level: 70 }, 
    { name: 'Microservices & Docker', level: 65 }, 
    { name: 'Integração de APIs (REST)', level: 90 }, 
    
    { name: 'Git / DevOps Flow', level: 80 },
    { name: 'MongoDB / Database', level: 55 }
];

const projectsData: Project[] = [
    {
        title: 'SisApec',
        description: 'Projeto de relevância nacional reconhecido pelo MEC e OIT. Sistema desenvolvido com Next.js, React e TypeScript.',
        fullDescription: 'O SisAPEC é um ecossistema digital de saúde reconhecido pelo MEC e OIT, focado em estruturar o Processo de Enfermagem com uso de IA e interoperabilidade (HL7 FHIR). \n\nMinha atuação: Como responsável pelo Front-end, arquitetei a solução utilizando Next.js e TypeScript, focando na performance de formulários clínicos complexos. Desenvolvi um Design System próprio com Tailwind CSS para garantir consistência visual e implementei a integração segura com APIs REST, assegurando uma experiência fluida para os profissionais de saúde.',
        imageUrl: sisapecPrincipal,
        detailImages: [sisapecInicial, sisapecLogin, sisapcClinicas, sisapecPacientes, sisapecModal, sisapecModalDiagnosticos, sisapecModalPacientes, sisapecPageTerfas, sisapecModalTarefas],
        liveUrl: 'https://sisapec.com',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        highlight: true 
    },
    {
        title: 'Barbearia Aparatus (Full Stack)',
        description: 'Arquitetura distribuída completa: De Monólito a Microsserviços com Java, Docker e Next.js.',
        fullDescription: 'Atuei no ciclo completo de engenharia de software deste projeto. Iniciei construindo a versão Monolítica para validação de regras de negócio e, posteriormente, realizei a refatoração total para uma Arquitetura de Microsserviços escalável. O backend é composto por 5 serviços isolados (Auth, Agendamento, Pagamento, Gateway e Discovery) rodando em containers Docker. O front-end em Next.js consome os dados via API Gateway, implementando fluxos complexos de autenticação OAuth2 (Google) e pagamentos reais com Stripe.',
        imageUrl: APARATUS, 
        detailImages: [aparatusInicial, aparatusBarbearias, aparatusPagamentos, aparatusAgendamento],
        tech: ['Java Spring Boot', 'Docker', 'Microservices', 'Next.js', 'Stripe', 'MongoDB'],
        liveUrl: 'https://github.com/NycolePaulino/barbearia-aparatus-microservices', 
        highlight: false 
    },
    
];


export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openProjectDetails = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; 
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset'; 
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (status !== 'idle') {
            setStatus('idle');
            setMessage('');
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('A enviar mensagem...');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), 
            });

            if (response.ok) {
                setStatus('success');
                setMessage('A sua mensagem foi enviada! Entrarei em contacto em breve.');
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setStatus('error');
                setMessage('Erro ao enviar a mensagem. Por favor, tente novamente.');
            }

        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            setStatus('error');
            setMessage('Ocorreu um erro de rede. Verifique a sua ligação.');
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
            <Navigation 
                isScrolled={isScrolled} 
                setActiveSection={setActiveSection} 
                activeSection={activeSection}
            />
            
            <main>
                <HeroSection />
                <AboutSection skills={skillsData} />
                <ProjectsSection 
                    projects={projectsData} 
                    openDetails={openProjectDetails} 
                />
                <ContactSection 
                    formData={formData} 
                    handleFormChange={handleFormChange} 
                    handleSubmit={handleSubmit} 
                />
                {status !== 'idle' && (
                    <div className="max-w-6xl mx-auto px-6 pb-10">
                        <p className={`text-center mt-4 p-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                            status === 'loading' 
                                ? 'bg-purple-600/20 text-purple-400 animate-pulse' 
                                : status === 'success' 
                                ? 'bg-green-600/20 text-green-400' 
                                : 'bg-red-600/20 text-red-400'
                        }`}>
                            {message}
                        </p>
                    </div>
                )}
            </main>
            <Footer />

            {selectedProject && (
                <ProjectDetailsModal
                    project={selectedProject}
                    onClose={closeProjectDetails}
                />
            )}
        
        </div>
    );
}