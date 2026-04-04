/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Camera, Instagram, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=2061&auto=format&fit=crop",
    title: "Sussurro do Vento",
    category: "Natureza",
    color: "bg-purple-900/20"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    title: "Pico Etéreo",
    category: "Montanhas",
    color: "bg-violet-900/20"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop",
    title: "Manhã de Orvalho",
    category: "Paisagem",
    color: "bg-fuchsia-900/20"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
    title: "Caminho de Luz",
    category: "Floresta",
    color: "bg-indigo-900/20"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    title: "Serenidade Azul",
    category: "Lagos",
    color: "bg-purple-900/20"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop",
    title: "Vale Dourado",
    category: "Campo",
    color: "bg-violet-900/20"
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", ...new Set(PHOTOS.map(p => p.category))];

  const filteredPhotos = selectedCategory === "Todos" 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Camera size={18} className="text-white" />
            </div>
            <span className="font-medium tracking-tight text-xl">Lumina</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#galeria" className="hover:text-purple-400 transition-colors">Galeria</a>
            <a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-500 transition-all">
              Visitar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-purple-900/30 text-purple-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
          >
            Exposição 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight"
          >
            A beleza está no <br />
            <span className="font-medium italic text-purple-500">detalhe efêmero</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12"
          >
            Uma jornada visual através das cores profundas e momentos silenciosos da natureza. 
            Capture a essência do que muitas vezes passa despercebido no escuro.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#galeria"
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-8 py-4 rounded-full text-sm font-medium hover:border-purple-500/50 hover:bg-purple-950/20 transition-all group"
            >
              Explorar Galeria
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-light mb-4">Coleção Curada</h2>
              <p className="text-zinc-400 max-w-md">Uma seleção de momentos capturados com sensibilidade e foco na harmonia das sombras.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === cat 
                    ? "bg-purple-600 text-white font-medium" 
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={photo.id}
                className="group relative"
              >
                <div className={`aspect-[4/5] overflow-hidden rounded-3xl ${photo.color} transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-900/20`}>
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-1">{photo.category}</p>
                    <h3 className="text-white text-xl font-medium">{photo.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full bg-purple-900/20 absolute -top-10 -left-10 w-64 h-64 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" 
              alt="Fotógrafa"
              referrerPolicy="no-referrer"
              className="rounded-[40px] shadow-xl grayscale hover:grayscale-0 transition-all duration-1000 border border-zinc-800"
            />
          </div>
          <div>
            <span className="text-purple-500 font-bold tracking-widest uppercase text-xs mb-4 block">A Artista</span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">Capturando o silêncio entre as sombras</h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
              Lumina é o projeto autoral de Clara Mendes, fotógrafa brasileira radicada em Portugal. 
              Seu trabalho foca na estética minimalista e no uso de luz dramática para criar composições 
              que evocam mistério e introspecção.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-2xl font-medium text-zinc-100">12+</h4>
                <p className="text-sm text-zinc-500">Exposições</p>
              </div>
              <div>
                <h4 className="text-2xl font-medium text-zinc-100">500+</h4>
                <p className="text-sm text-zinc-500">Obras Vendidas</p>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-500 transition-all">
              Ler Biografia Completa
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-12">Vamos conversar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-purple-500/30 transition-colors">
              <Mail className="mx-auto mb-4 text-purple-400" size={24} />
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-zinc-500 mt-1">ola@lumina.art</p>
            </div>
            <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-purple-500/30 transition-colors">
              <Instagram className="mx-auto mb-4 text-purple-400" size={24} />
              <p className="text-sm font-medium">Instagram</p>
              <p className="text-xs text-zinc-500 mt-1">@lumina_galeria</p>
            </div>
            <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-purple-500/30 transition-colors">
              <MapPin className="mx-auto mb-4 text-purple-400" size={24} />
              <p className="text-sm font-medium">Local</p>
              <p className="text-xs text-zinc-500 mt-1">Lisboa, PT</p>
            </div>
          </div>
          
          <form className="bg-zinc-900 p-10 rounded-[40px] shadow-sm border border-zinc-800 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Nome</label>
                <input type="text" className="w-full px-6 py-4 bg-black rounded-2xl border border-zinc-800 focus:ring-2 focus:ring-purple-500/30 transition-all outline-none text-zinc-100" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Email</label>
                <input type="email" className="w-full px-6 py-4 bg-black rounded-2xl border border-zinc-800 focus:ring-2 focus:ring-purple-500/30 transition-all outline-none text-zinc-100" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Mensagem</label>
              <textarea rows={4} className="w-full px-6 py-4 bg-black rounded-2xl border border-zinc-800 focus:ring-2 focus:ring-purple-500/30 transition-all outline-none resize-none text-zinc-100" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button className="w-full bg-purple-600 text-white py-5 rounded-2xl font-medium hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/20">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800 text-center bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-500 text-sm">© 2024 Lumina Galeria de Arte. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mt-6 text-zinc-600">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Imprensa</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
