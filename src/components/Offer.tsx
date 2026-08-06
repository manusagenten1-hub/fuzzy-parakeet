import { Check } from 'lucide-react';
import { ButtonCTA } from './ButtonCTA';
import { motion } from "motion/react";

export function Offer() {
  return (
    <section id="oferta" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-12 items-center"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] mb-6 text-center md:text-left">Oferta Especial de Hoje</h2>
          
          <div className="mb-8 flex justify-center md:justify-start">
            <img 
              src="https://i.ibb.co/VY3ddxNH/Chat-GPT-Image-5-de-ago-de-2026-21-57-02.png" 
              alt="Mockup do material" 
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <ul className="space-y-4 mb-8">
            {['Guia completo passo a passo', '25 ideias de presentes', 'Bônus 1: 30 Frases prontas', 'Bônus 2: 20 mensagens para WhatsApp'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-[#111111] font-medium">
                <div className="bg-[#C9A227]/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="text-[#C9A227]" size={18} strokeWidth={3} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[400px] bg-[#F9FAFB] rounded-[20px] p-8 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] to-[#E5C158]"></div>
          <span className="text-[#5F6368] font-medium line-through text-lg mb-2 mt-4">De R$ 47,00 por apenas</span>
          <div className="flex items-start text-[#111111] font-extrabold mb-6">
            <span className="text-2xl mt-1">R$</span>
            <span className="text-6xl tracking-tight">9</span>
            <span className="text-2xl mt-1">,99</span>
          </div>
          <div className="flex flex-col gap-3 text-sm text-[#5F6368] font-medium mb-8">
             <span className="flex items-center justify-center gap-2"><Check size={16} className="text-[#C9A227]"/> Pagamento único.</span>
             <span className="flex items-center justify-center gap-2"><Check size={16} className="text-[#C9A227]"/> Acesso imediato.</span>
             <span className="flex items-center justify-center gap-2"><Check size={16} className="text-[#C9A227]"/> Garantia de 7 dias.</span>
          </div>
          <ButtonCTA href="https://pay.cakto.com.br/36pm8m2_1024260" className="w-full">Garantir meu acesso</ButtonCTA>
        </div>
      </motion.div>
    </section>
  );
}
