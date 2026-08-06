import { Check, BookOpen } from 'lucide-react';
import { ButtonCTA } from './ButtonCTA';
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="pt-16 pb-16 px-6 md:pt-24 md:pb-24 max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] leading-tight tracking-tight mb-6"
      >
        <span className="text-[#0D1B2A] block">+25 Presentes Personalizados</span> Para Emocionar Seu Pai
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg md:text-xl text-[#5F6368] font-medium max-w-3xl mb-10"
      >
        Ideias criativas, econômicas e explicadas passo a passo para criar um presente inesquecível em menos de 1 hora.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-3xl aspect-[4/3] md:aspect-[16/10] bg-[#F9FAFB] rounded-[24px] shadow-[0_20px_60px_rgba(13,27,42,0.08)] mb-12 flex flex-col items-center justify-center overflow-hidden relative border border-gray-100 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F9FAFB]"></div>
        <img 
          src="https://i.ibb.co/VY3ddxNH/Chat-GPT-Image-5-de-ago-de-2026-21-57-02.png"
          alt="Guia Definitivo Dia dos Pais"
          className="z-10 w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-4"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full flex flex-col items-center gap-8"
      >
         <ButtonCTA href="https://pay.cakto.com.br/36pm8m2_1024260" subtext="Compra segura • Acesso imediato">Quero meu acesso agora</ButtonCTA>
         
         <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[#5F6368] font-medium">
            <span className="flex items-center gap-2"><Check className="text-[#C9A227]" size={20} /> Acesso imediato</span>
            <span className="flex items-center gap-2"><Check className="text-[#C9A227]" size={20} /> Materiais simples</span>
            <span className="flex items-center gap-2"><Check className="text-[#C9A227]" size={20} /> Passo a passo prático</span>
         </div>
      </motion.div>
    </section>
  );
}
