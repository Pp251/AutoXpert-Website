import { motion } from "framer-motion";
import kamranImg from "../../imports/kamran.jpeg";
import vigneshImg from "../../imports/vignesh.jpeg";
import ibrahimImg from "../../imports/ibrahim.jpeg";
import ziyaImg from "../../imports/ziya.jpeg";
import sifatImg from "../../imports/sifat.jpeg";
import { ImageWithFallback } from "./figma/ImageWithFallback";



const teamMembers = [
  { name: "Kamran Rahman", image: kamranImg },
  { name: "Vignesh Vinod", image: vigneshImg },
  { name: "Ibrahim Mallick", image: ibrahimImg },
  { name: "Ziya Zanober", image: ziyaImg },
  { name: "Sifat Ahmad", image: sifatImg },
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

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl bg-slate-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
