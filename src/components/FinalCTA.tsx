import { ButtonCTA } from './ButtonCTA';
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="bg-[#0D1B2A] py-24 px-6 text-center text-white flex flex-col items-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Ainda dá tempo de surpreender quem sempre esteve ao seu lado.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium"
        >
          Não deixe para a última hora. Garanta agora as melhores ideias de presentes e prepare uma homenagem inesquecível.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <ButtonCTA href="#oferta" subtext="Oferta especial encerrando em breve">
            Quero meu acesso agora
          </ButtonCTA>
        </motion.div>
      </div>
    </section>
  );
}
