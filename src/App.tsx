import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailsModal from './components/ProjectModal';
import { Skill, Project, FormData } from './types'; 

//  IMAGENS SISAPEC 
import sisapecPacientes from "./assets/ProjectSisapecImages/sisapecPacientes.png";
import sisapecInicial from "./assets/ProjectSisapecImages/sisapecInicial.png"; 
import sisapecLogin from "./assets/ProjectSisapecImages/sisapecLogin.png";
import sisapecPrincipal from "./assets/ProjectSisapecImages/sisapecPrincipal.png"
import sisapcClinicas from "./assets/ProjectSisapecImages/clinicas.png";
import sisapecModal from "./assets/ProjectSisapecImages/modal.png";
import sisapecModalDiagnosticos from "./assets/ProjectSisapecImages/modalDiagnosticos.png";
import sisapecModalPacientes from "./assets/ProjectSisapecImages/modalPaciente.png";
import sisapecModalTarefas from "./assets/ProjectSisapecImages/modalTarefas.png";
import sisapecPageTerfas from "./assets/ProjectSisapecImages/PageTarefas.png";

//  IMAGENS APARATUS 
import APARATUS from "./assets/ProjectsBarbeariaImages/logo.png";
import aparatusAgendamento from "./assets/ProjectsBarbeariaImages/agendamentos.png";
import aparatusBarbearias from "./assets/ProjectsBarbeariaImages/barbearis.png";
import aparatusPagamentos from "./assets/ProjectsBarbeariaImages/pagamento.png";
import aparatusInicial from "./assets/ProjectsBarbeariaImages/telaInicial.png";

// IMAGENS MILANI
import milaniLogo from "./assets/ProjectsMilanflowImages/MilaniFlowLogo.png";
import milaniLogin from "./assets/ProjectsMilanflowImages/login.png";
import milaniDashboard from "./assets/ProjectsMilanflowImages/dashboard.png";
import milaniMensagens from "./assets/ProjectsMilanflowImages/mensagens.png";
import milaniPainel from "./assets/ProjectsMilanflowImages/painel.png";
import milaniRelatorio from "./assets/ProjectsMilanflowImages/relatorio.png";
import milaniChips from "./assets/ProjectsMilanflowImages/chips.png";

// IMAGENS DOR.IA
import dorIaLogo from "./assets/ProjectsDoriaImages/dorLogo.png"
import loginDoria from "./assets/ProjectsDoriaImages/login.png";
import landding from "./assets/ProjectsDoriaImages/ladding.png";
import chat from "./assets/ProjectsDoriaImages/chat.png";
import informacoes from "./assets/ProjectsDoriaImages/informacoes.png";

// IMAGENS REALEZA
import logoRealeza from "./assets/ProjectsRealezaImages/logoRealeza.png";
import principal from "./assets/ProjectsRealezaImages/principal.png";
import cadastro from "./assets/ProjectsRealezaImages/cadastro.png";
import selecao from "./assets/ProjectsRealezaImages/selecao.png";
import revisao from "./assets/ProjectsRealezaImages/revisao.png";
import carrinho from "./assets/ProjectsRealezaImages/carrinho.png";


// IMAGENS ANTONY
import alunos from "./assets/ProjectsAntonyImages/alunos.png";
import criarTreino from "./assets/ProjectsAntonyImages/criartreino.png";
import execucao from "./assets/ProjectsAntonyImages/execucao.png";
import home from "./assets/ProjectsAntonyImages/home.png";
import listaTreino from "./assets/ProjectsAntonyImages/listaTreino.png";
import loginTreino from "./assets/ProjectsAntonyImages/login.png";
import logoAntony from "./assets/ProjectsAntonyImages/LogoAnthony.png";

// IMAGENS LOOT CENTRAL
import cadastroLoot from "./assets/ProjectsLootImages/cadastroLoot.png";
import loginLoot from "./assets/ProjectsLootImages/loginLoot.png";
import homeLoot from "./assets/ProjectsLootImages/homeLoot.png";
import LootLogo from "./assets/ProjectsLootImages/lootLogo.jpg";

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjkadyoz'; 

const skillsData: Skill[] = [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS / UI Libs', level: 90 },
    { name: 'Java Spring Boot', level: 70 }, 
    { name: 'Microservices & Docker', level: 65 }, 
    { name: 'Integração de APIs (REST)', level: 90 }, 
    { name: 'Git / DevOps Flow', level: 80 },
    { name: 'Supabase (BaaS)', level: 80 },
    { name: 'Automação & IA (n8n)', level: 80 }
];

const projectsData: Project[] = [
    {
        title: 'MilaniFlow (Automação & Integração)',
        description: 'Arquitetura de automação com robô de WhatsApp, integrado ao n8n para gestão de vendas.',
        fullDescription: 'O Desafio: A Milani recebia um alto volume de clientes vindos de transportadoras parceiras, e o processo de reconhecimento de pedidos e atendimento era manual, lento e sujeito a falhas de comunicação.\n\nA Minha Solução: Desenvolvi uma arquitetura de automação ponta a ponta utilizando o n8n. Criei um robô que reconhece automaticamente novas vendas e pedidos, realiza o primeiro atendimento e a comunicação via WhatsApp de forma autônoma, e injeta todos esses dados em tempo real nos painéis de controle do sistema. Isso zerou o tempo de espera do cliente e automatizou a gestão da equipe.',
        imageUrl: milaniLogo,
        detailImages: [milaniDashboard, milaniLogin, milaniMensagens, milaniPainel, milaniRelatorio, milaniChips], 
        liveUrl: 'https://www.milaniflow.com.br/',
        tech: ['n8n', 'WhatsApp API', 'React', 'Next.js', 'Automação'],
        highlight: true 
    },
    {
        title: 'Ecossistema Planny: Dor.ia & IA',
        description: 'Desenvolvimento Full-Stack do sistema de saúde Dor.ia e chats de Inteligência Artificial (DAVI e Sophia).',
        fullDescription: 'O Desafio: Desenvolver interfaces modernas para o setor de saúde (gestão de dores crônicas) e criar assistentes virtuais inteligentes que pudessem interagir com os usuários em tempo real de forma fluida.\n\nA Minha Solução: Atuei de ponta a ponta na construção do sistema Dor.ia, gerenciando o banco de dados e o estado da aplicação com Supabase. Além disso, desenvolvi a interface e a integração dos chats de Inteligência Artificial DAVI e Sophia. Orquestrei a comunicação do front-end com os webhooks do n8n para garantir que as respostas geradas pela IA chegassem à tela do usuário com alta performance e sem gargalos.',
        imageUrl: dorIaLogo,
        detailImages: [landding, loginDoria, chat, informacoes], 
        liveUrl: '',
        tech: ['React', 'Next.js', 'Supabase', 'n8n', 'Inteligência Artificial'],
        highlight: true 
    },
    {
        title: 'SisApec',
        description: 'Projeto de relevância nacional reconhecido pelo MEC e OIT. Sistema desenvolvido com Next.js, React e TypeScript.',
        fullDescription: 'O SisAPEC é um ecossistema digital de saúde reconhecido pelo MEC e OIT, focado em estruturar o Processo de Enfermagem com uso de IA e interoperabilidade (HL7 FHIR).\n\nMinha atuação: Como responsável pelo Front-end, arquitetei a solução utilizando Next.js e TypeScript, focando na performance de formulários clínicos complexos. Desenvolvi um Design System próprio com Tailwind CSS para garantir consistência visual e implementei a integração segura com APIs REST, assegurando uma experiência fluida para os profissionais de saúde.',
        imageUrl: sisapecPrincipal,
        detailImages: [sisapecInicial, sisapecLogin, sisapcClinicas, sisapecPacientes, sisapecModal, sisapecModalDiagnosticos, sisapecModalPacientes, sisapecPageTerfas, sisapecModalTarefas],
        liveUrl: 'https://sisapec.com',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        highlight: false 
    },
    {
        title: 'Barbearia Aparatus (Full Stack)',
        description: 'Arquitetura distribuída completa: De Monólito a Microsserviços com Java, Docker e Next.js.',
        fullDescription: 'Atuei no ciclo completo de engenharia de software deste projeto. Iniciei construindo a versão Monolítica para validação de regras de negócio e, posteriormente, realizei a refatoração total para uma Arquitetura de Microsserviços escalável. O backend é composto por 5 serviços isolados (Auth, Agendamento, Pagamento, Gateway e Discovery) rodando em containers Docker. O front-end em Next.js consome os dados via API Gateway, implementando fluxos complexos de autenticação OAuth2 (Google) e pagamentos reais com Stripe.',
        imageUrl: APARATUS, 
        detailImages: [aparatusInicial, aparatusBarbearias, aparatusPagamentos, aparatusAgendamento],
        tech: ['Java Spring Boot', 'Docker', 'Microservices', 'Next.js', 'Stripe'],
        liveUrl: 'https://github.com/NycolePaulino/barbearia-aparatus-microservices', 
        highlight: false 
    },
    {
        title: 'App Anthony Cruz - Personal Trainer',
        description: 'Design de interface Mobile-First para um aplicativo de gestão de treinos e alunos.',
        fullDescription: 'O Desafio: Criar uma interface premium e intuitiva para o nicho fitness, facilitando tanto a vida do personal trainer quanto a do aluno durante a execução do treino.\n\nA Minha Solução: Idealizei e desenhei todo o fluxo no Figma aplicando conceitos de UI/UX. Foquei em uma paleta dark com toques de dourado para passar autoridade e exclusividade. Estruturei fluxos claros e ergonômicos para a criação de rotinas, visualização de treinos em execução (com cronômetros e marcação de carga) e gestão de alunos, priorizando sempre a usabilidade em dispositivos móveis (Mobile First).',
        imageUrl: logoAntony,
        detailImages: [loginTreino, home, alunos, criarTreino, listaTreino, execucao], 
        tech: ['Figma', 'UI/UX Design', 'Prototipagem', 'Mobile First','Em Desenvolvimento'],
        highlight: false 
    },
    {
        title: 'Realeza Pizzaria - Delivery',
        description: 'Prototipagem de um aplicativo de delivery focado em conversão e experiência de compra.',
        fullDescription: 'O Desafio: Desenhar um fluxo de pedidos de delivery que reduzisse o abandono de carrinho e tornasse a escolha de produtos complexos (como pizzas com múltiplas bordas e adicionais) simples e apetitosa.\n\nA Minha Solução: Desenvolvi no Figma o fluxo completo de um aplicativo de delivery de ponta a ponta. O foco do design foi reduzir o atrito no checkout. Criei uma interface focada em hierarquia visual para a escolha de tamanhos, ingredientes e observações, colocando em uma tela de resumo clara com integração direta de envio do pedido via WhatsApp.',
        imageUrl: logoRealeza,
        detailImages: [principal, cadastro, selecao, revisao, carrinho], 
        tech: ['Figma', 'UI/UX Design', 'E-commerce'],
        highlight: false 
    },
    {
        title: 'Loot Central - Marketplace',
        description: 'Design e desenvolvimento de um marketplace desktop voltado para o público gamer e geek.',
        fullDescription: 'O Desafio: Criar o "multiverso geek em um só lugar", um marketplace robusto para compra, venda e troca de itens digitais e colecionáveis, com uma identidade visual forte e navegação fluida.\n\nA Minha Solução: O design no Figma focou em uma estética cyberpunk/neon (dark mode), com organização clara de inventário, autenticação imersiva, vitrine de destaques e filtros de preço/categorias. O projeto evoluiu da prototipagem para o código, e atualmente atuo na fase de desenvolvimento do front-end utilizando React e TypeScript para dar vida a essas interfaces.',
        imageUrl: LootLogo,
        detailImages: [cadastroLoot, loginLoot, homeLoot], 
        liveUrl: '',
        tech: ['Figma', 'React', 'TypeScript', 'UI/UX Design', 'Em Desenvolvimento'],
        highlight: false 
    }
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