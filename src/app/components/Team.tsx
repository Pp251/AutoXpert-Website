import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const teamMembers = [
  {
    name: "Kamran Rahman",
    image: "/src/imports/WhatsApp_Image_2026-04-13_at_4.13.39_PM.jpeg",
  },
  {
    name: "Vignesh Vinod",
    image: "/src/imports/WhatsApp_Image_2026-04-13_at_4.13.38_PM.jpeg",
  },
  {
    name: "Ibrahim Mallick",
    image: "/src/imports/WhatsApp_Image_2026-04-13_at_4.13.38_PM_(1).jpeg",
  },
  {
    name: "Ziya Zanober",
    image: "/src/imports/WhatsApp_Image_2026-04-13_at_6.05.19_PM.jpeg",
  },
  {
    name: "Sifat Ahmad",
    image: "/src/imports/WhatsApp_Image_2026-04-13_at_3.08.27_PM.jpeg",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            The brilliant minds behind AutoXpert, dedicated to revolutionizing vehicle diagnostics and maintenance.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group w-[180px] sm:w-[200px]"
            >
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-5 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden mb-4 bg-slate-800">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-center text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
