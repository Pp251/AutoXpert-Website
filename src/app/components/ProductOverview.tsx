import { motion } from "motion/react";
import { BrainCircuit, Activity, Wrench, MapPin, Search, DollarSign } from "lucide-react";

const features = [
  {
    title: "AI Fault Diagnosis",
    description: "Connect your OBD scanner and our AI, powered by Google Gemini, instantly translates confusing fault codes into simple language.",
    icon: BrainCircuit,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Real-time Vehicle Diagnostics",
    description: "Monitor live data streams from your vehicle including engine temperature, RPM, oxygen sensors, and more.",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Smart Maintenance Insights",
    description: "Predictive alerts tell you exactly when to service your car before expensive breakdowns occur.",
    icon: Wrench,
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "List of Garages Near You",
    description: "Locate top-rated, trusted mechanics nearby and instantly share your diagnostic report with them.",
    icon: MapPin,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Intelligent Parts Finder",
    description: "Enter your VIN and let AutoXpert find the exact OEM or aftermarket parts guaranteed to fit.",
    icon: Search,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Reduced Cost Transparency",
    description: "Clear, upfront pricing from multiple vendors to help you make informed decisions and save money on parts.",
    icon: DollarSign,
    color: "from-yellow-400 to-orange-500",
  },
];

export function ProductOverview() {
  return (
    <section id="features" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AutoXpert</span> Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            A seamless experience from diagnosing an issue to finding the right part and booking the best mechanic.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Minimal UI Mockup Line */}
              <div className="mt-8 pt-6 border-t border-white/5 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="h-2 w-1/3 bg-slate-800 rounded-full mb-3" />
                <div className="h-2 w-full bg-slate-800 rounded-full mb-2" />
                <div className="h-2 w-2/3 bg-slate-800 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
