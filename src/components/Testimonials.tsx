import { motion } from "motion/react";

const testimonials = [
  "https://i.ibb.co/0VC145hx/Whats-App-Image-2026-08-05-at-22-16-29.jpg",
  "https://i.ibb.co/LXVJ0LrD/Whats-App-Image-2026-08-05-at-22-16-53.jpg",
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111]">Quem já comprou recomenda.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-8">
        {testimonials.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-[260px] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 bg-white"
          >
            <img 
              src={src} 
              alt={`Depoimento ${index + 1}`} 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
