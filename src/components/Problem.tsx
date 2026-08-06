import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export function Problem() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 md:p-12 border border-gray-100"
      >
        <p className="text-xl md:text-2xl font-bold text-[#111111] mb-6">
          Todos os anos acontece a mesma coisa.
        </p>
        <p className="text-lg text-[#5F6368] mb-8 leading-relaxed">
          Você procura um presente, compara preços, pesquisa em várias lojas... e acaba levando algo que poderia ser para qualquer pessoa.
        </p>
        
        <ul className="space-y-3 mb-8">
          {["Uma carteira.", "Um perfume.", "Uma camiseta.", "Uma caneca."].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[#111111] font-medium text-lg">
              <div className="bg-gray-100 p-1.5 rounded-full flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              {item}
            </li>
          ))}
        </ul>

        <div className="space-y-6">
          <p className="text-lg text-[#5F6368] font-medium">
            Presentes úteis? Sim.<br />
            Inesquecíveis? <span className="text-[#111111] font-bold">Nem sempre.</span>
          </p>
          
          <div className="h-px w-full bg-gray-100"></div>
          
          <p className="text-xl text-[#111111] font-semibold leading-relaxed">
            Enquanto isso, o que muitos pais realmente guardam por anos são os <span className="text-[#C9A227]">pequenos gestos feitos com carinho.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
