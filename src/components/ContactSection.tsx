import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactSectionProps } from '../types';

export default function ContactSection({ formData, handleFormChange, handleSubmit }: ContactSectionProps) {
    return (
        <section id="contato" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Entre em <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Contato</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                    <div className="space-y-6">
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Estou sempre aberta a novas oportunidades e desafios! Envie uma mensagem ou conecte-se comigo pelas redes.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Mail className="text-purple-400 flex-shrink-0" size={24} />
                                <a href="mailto:nycole.paulino@email.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                                nycolepaulino.dev@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="text-purple-400 flex-shrink-0" size={24} />
                                <span className="text-gray-300">(35) 9 8477-4780</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-purple-400 flex-shrink-0" size={24} />
                                <span className="text-gray-300">Alfenas, Minas Gerais, Brasil</span>
                            </div>
                        </div>
                        
                        <div className="flex space-x-6 pt-4">
                        <a href="https://github.com/nycolepaulino" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Github size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/nycole-paulino/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Linkedin size={32} />
                        </a>
                        </div>
                    </div>                
                    <form
                        action="https://formspree.io/f/xjkadyoz"
                        method='POST'
                        onSubmit={handleSubmit} 
                        className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                                placeholder="Seu nome completo"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleFormChange}
                                required
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none"
                                placeholder="Diga-me sobre seu projeto ou oportunidade..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                            >
                            <Send size={18} />
                            <span>Enviar Mensagem</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}