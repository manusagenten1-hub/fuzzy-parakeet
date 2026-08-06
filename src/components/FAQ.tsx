import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from "motion/react";
import { AnimatePresence } from 'motion/react';

const faqs = [
  { q: "Recebo imediatamente?", a: "Sim! Assim que o pagamento for aprovado, você receberá o acesso ao material diretamente no seu e-mail cadastrado." },
  { q: "É PDF?", a: "Sim, o material é entregue em formato PDF de alta qualidade, pronto para leitura em qualquer dispositivo ou para impressão." },
  { q: "Posso acessar pelo celular?", a: "Com certeza. O formato é 100% otimizado para leitura em smartphones, tablets e computadores." },
  { q: "Mesmo sem experiência consigo fazer?", a: "Sim! Todas as ideias foram pensadas para pessoas comuns. O passo a passo é simples e direto." },
  { q: "Quanto tempo demora?", a: "A maioria dos presentes pode ser feita em menos de 1 hora. Alguns levam apenas 15 minutos!" },
  { q: "Quais materiais preciso?", a: "Utilizamos materiais simples do dia a dia, como papel, tesoura, cola e fotos, ou itens fáceis de encontrar em qualquer papelaria." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para avaliar o material. Se não gostar, basta enviar um e-mail que devolvemos 100% do seu dinheiro, sem perguntas." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111]">Perguntas Frequentes</h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border border-gray-200 rounded-[16px] overflow-hidden bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-5 font-semibold text-[#111111] flex justify-between items-center focus:outline-none"
            >
              {faq.q}
              <ChevronDown className={`transition-transform duration-300 text-[#5F6368] flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-[#5F6368]">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
