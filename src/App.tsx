import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailsModal from './components/ProjectModal';
import { ScrollBackground } from './components/ScrollBackground';
import { Project } from './types';

import milaniImg from './assets/projetos/milani.png';
import doriaMobileImg from './assets/projetos/doriaMobile.png';
import doriaWebImg from './assets/projetos/doriaweb.png';
import sisapecImg from './assets/projetos/sisapec.png';
import aparatusImg from './assets/projetos/aparatus.png';
import antonyImg from './assets/projetos/antony.png';
import realezaImg from './assets/projetos/realeza.png';
import lootImg from './assets/projetos/loot.png';
import cacthosImg from './assets/projetos/cacthos.png';
import ceaImg from './assets/projetos/cea.png';
import draGabrielaImg from './assets/projetos/draGabriela.png';

const projectsData: Project[] = [
    {
        title: 'MilaniFlow',
        category: 'Automação & IA',
        description: 'Automatizei o atendimento e a gestão de vendas da Milani com um robô de WhatsApp conectado ao n8n.',
        fullDescription: 'A Milani recebia um volume grande de clientes vindos de transportadoras parceiras, e o atendimento inicial era feito na mão, lento e cheio de furos de comunicação.\n\nMontei uma automação ponta a ponta no n8n: um robô reconhece os pedidos assim que eles chegam, faz o primeiro atendimento pelo WhatsApp sozinho e já joga tudo em tempo real nos painéis do sistema. O tempo de espera do cliente caiu a praticamente zero e a gestão da equipe ficou bem mais tranquila.',
        imageUrl: milaniImg,
        liveUrl: 'https://www.milaniflow.com.br/',
        tech: ['n8n', 'WhatsApp API', 'React', 'Next.js', 'Automação'],
        highlight: true
    },
    {
        title: 'DOR.IA Mobile',
        category: 'Full-Stack + IA',
        description: 'Sistema de saúde com dois assistentes de IA (DAVI e Sophia) integrados a fluxos do n8n.',
        fullDescription: 'O DOR.IA é um sistema voltado pra gestão de dores crônicas, e o desafio era ter assistentes virtuais que respondessem de forma fluida e em tempo real dentro da plataforma. Com o objetivo de recomendar especialistas mais próximos do paciente através de geolocalização.\n\nToquei o desenvolvimento de ponta a ponta: banco de dados e estado da aplicação com Supabase, interface, e a integração dos chat com os webhooks do n8n, cuidando pra que a resposta da IA chegasse rápido na tela do usuário, sem travar a experiência.',
        imageUrl: doriaMobileImg,
        appStoreUrl: 'https://apps.apple.com/br/app/dor-ia/id6775565801',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.doriamobilenovo',
        tech: ['React Native', 'React', 'Next.js', 'Supabase', 'n8n', 'Inteligência Artificial'],
        highlight: true
    },
    {
        title: 'SisApec',
        category: 'Full-Stack',
        description: 'Plataforma de saúde reconhecida pelo MEC e pela OIT, com formulários clínicos complexos.',
        fullDescription: 'O SisApec estrutura o Processo de Enfermagem com IA e interoperabilidade (HL7 FHIR). É um projeto de peso, reconhecido nacionalmente pelo MEC e pela OIT.\n\nFiquei responsável pelo front-end: arquitetei tudo em Next.js e TypeScript com foco em performance nos formulários clínicos, que são bem complexos. Construí um Design System próprio com Tailwind pra manter consistência visual e integrei com as APIs REST de forma segura.',
        imageUrl: sisapecImg,
        liveUrl: 'https://sisapec.com',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        highlight: false
    },
    {
        title: 'DOR.IA Web',
        category: 'Full-Stack + IA',
        description: 'Landing page e área logada web do DOR.IA, integrada ao mesmo backend do app mobile.',
        fullDescription: 'Além do app mobile, o DOR.IA também precisava de uma versão web: uma landing page pra apresentar a proposta da plataforma e uma área logada pra quem prefere acessar pelo navegador.\n\nDesenvolvi a interface web reaproveitando a mesma base de dados e as mesmas integrações do app (Supabase e n8n), mantendo a experiência consistente entre as duas versões.',
        imageUrl: doriaWebImg,
        liveUrl: 'https://falecomadoria.com.br/',
        tech: ['React', 'Next.js', 'Supabase', 'n8n'],
        highlight: false
    },
    {
        title: 'Barbearia Aparatus',
        category: 'Arquitetura',
        description: 'Projeto acadêmico: de monólito a microsserviços, com backend em Java e 5 serviços isolados rodando em Docker.',
        fullDescription: 'Esse foi um projeto acadêmico, e peguei ele do zero ao fim: comecei com uma versão monolítica pra validar as regras de negócio e depois refatorei tudo pra uma arquitetura de microsserviços: 5 serviços separados (Auth, Agendamento, Pagamento, Gateway e Discovery), cada um no seu container Docker.\n\nO front em Next.js consome tudo via API Gateway, com login OAuth2 pelo Google e pagamento de verdade integrado com Stripe.',
        imageUrl: aparatusImg,
        tech: ['Projeto Acadêmico', 'Java Spring Boot', 'Docker', 'Microservices', 'Next.js', 'Stripe'],
        githubUrl: 'https://github.com/NycolePaulino/barbearia-aparatus-microservices',
        highlight: false
    },
    {
        title: 'App Anthony Cruz',
        category: 'UI/UX',
        description: 'Interface mobile-first pra um app de treinos, com paleta dark e detalhes dourados.',
        fullDescription: 'Esse foi um projeto de UI/UX: desenhei o fluxo inteiro no Figma pra um app de treinos voltado ao nicho fitness, pensando tanto na visão do personal quanto na do aluno.\n\nApostei numa paleta escura com toques dourados pra passar autoridade, e desenhei as telas pensando em mobile primeiro: desde a criação de treinos até a execução, com cronômetro e marcação de carga, e a gestão dos alunos.',
        imageUrl: antonyImg,
        tech: ['Figma', 'UI/UX Design', 'Prototipagem', 'Mobile First', 'Em Desenvolvimento'],
        highlight: false
    },
    {
        title: 'Realeza Pizzaria',
        category: 'UI/UX',
        description: 'Fluxo de delivery pensado pra reduzir abandono de carrinho e facilitar pedidos complexos.',
        fullDescription: 'O objetivo aqui era simplificar um problema clássico de delivery: como deixar simples escolher uma pizza com várias bordas e adicionais sem o cliente desistir no meio do caminho.\n\nDesenhei o fluxo completo no Figma, com bastante atenção à hierarquia visual na escolha de tamanho, sabor e observações, terminando numa tela de resumo clara com envio do pedido direto pelo WhatsApp.',
        imageUrl: realezaImg,
        tech: ['Figma', 'UI/UX Design', 'E-commerce'],
        highlight: false
    },
    {
        title: 'Loot Central',
        category: 'Marketplace',
        description: 'Marketplace desktop pra público gamer, com estética cyberpunk. Prototipado no Figma.',
        fullDescription: 'A ideia era criar um marketplace pro público gamer e geek comprar, vender e trocar itens digitais num só lugar, com uma cara bem própria.\n\nDesenvolvi todo o design no Figma, com uma estética cyberpunk/neon, pensando em inventário organizado, autenticação e vitrine de destaques. Por enquanto ficou só na prototipação, sem desenvolvimento de código ainda.',
        imageUrl: lootImg,
        tech: ['Figma', 'UI/UX Design', 'Prototipagem'],
        highlight: false
    },
    {
        title: 'Cacthos',
        category: 'Full-Stack',
        description: 'E-commerce de alfaiataria sob medida, com checkout embutido e painel administrativo completo.',
        fullDescription: 'A Cacthos é uma loja de ternos sob medida, e o projeto era construir um e-commerce completo do zero: vitrine, carrinho e checkout, sem redirecionar o cliente pra fora do site.\n\nDesenvolvi com Next.js e Supabase: checkout embutido via Asaas (Pix, cartão e boleto), automação de recuperação de carrinho abandonado, integração com Meta Pixel pra remarketing, e um painel administrativo completo (pedidos, produtos, estoque e dashboard) pra dar autonomia total ao cliente no dia a dia.',
        imageUrl: cacthosImg,
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Asaas'],
        highlight: false
    },
    {
        title: 'CEA Alfenas',
        category: 'Front-end',
        description: 'Site institucional para uma clínica de endoscopia, com páginas de exames, corpo clínico e blog.',
        fullDescription: 'O CEA (Centro de Endoscopia de Alfenas) precisava de um site institucional completo pra apresentar a clínica, os exames oferecidos e a equipe médica de forma profissional.\n\nDesenvolvi as páginas de apresentação da clínica, corpo clínico, exames, orientações e um blog, com atenção especial à tipografia e à identidade visual pra passar confiança. Afinal, é uma área da saúde, onde isso pesa bastante.',
        imageUrl: ceaImg,
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        highlight: false
    },
    {
        title: "Pediatria com C'alma",
        category: 'Full-Stack',
        description: 'Site profissional para uma pediatra, com painel administrativo pra gerenciar depoimentos e conteúdo.',
        fullDescription: 'Site profissional pra Dra. Gabriela Gama, pediatra, com uma identidade visual acolhedora pensada pro público: famílias e crianças.\n\nConstruí com Next.js e Supabase, incluindo um painel administrativo pra ela gerenciar depoimentos e conteúdo sem depender de mim, animações com Framer Motion e um cuidado grande com SEO pra facilitar que pacientes a encontrem.',
        imageUrl: draGabrielaImg,
        liveUrl: 'https://pediatriacomcalma.com.br/',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion'],
        highlight: false
    }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openProjectDetails = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="relative min-h-screen">
            <ScrollBackground />
            <Navigation />

            <main>
                <HeroSection />
                <AboutSection />
                <Skills />
                <ProjectsSection
                    projects={projectsData}
                    openDetails={openProjectDetails}
                />
                <Experience />
                <ContactSection />
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
