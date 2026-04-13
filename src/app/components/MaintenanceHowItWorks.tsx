import { motion } from "motion/react";
import { AlertTriangle, CalendarClock, PenTool as Tool, Gauge, ArrowRight, Activity } from "lucide-react";
import { Button } from "./UI";

export function MaintenanceHowItWorks() {
  return (
    <>
      {/* Smart Maintenance */}
      <section id="maintenance" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Prevent Problems <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                Before They Happen.
              </span>
            </motion.h2>
            <p className="text-lg text-slate-400">
              Our predictive AI doesn't just read codes—it tracks wear and tear over time to alert you before parts fail, saving you thousands in emergency repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-8 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <CalendarClock className="w-32 h-32 text-orange-400" />
              </div>
              <div className="w-14 h-14 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <CalendarClock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">Service Reminders</h3>
              <p className="text-slate-400 relative z-10">Intelligent alerts based on your actual driving habits, not just generic mileage intervals.</p>
              
              <div className="mt-8 bg-slate-950/50 rounded-xl p-4 border border-white/5 relative z-10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <div className="text-sm font-medium text-slate-300">Oil Change Due in 400 mi</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-8 border border-white/5 relative overflow-hidden md:-translate-y-8 shadow-2xl shadow-orange-900/20 border-t-orange-500/30"
            >
              <div className="w-14 h-14 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real Time Notifications</h3>
              <p className="text-slate-400">Instant alerts based on live sensor data monitoring to notify you immediately when issues are detected.</p>
              
              <div className="mt-8 relative">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Battery Health</span>
                  <span className="text-red-400 font-bold">14%</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[14%]" />
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">Replace soon to avoid stranding.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-8 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Gauge className="w-32 h-32 text-emerald-400" />
              </div>
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Gauge className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">VIN Number Detector</h3>
              <p className="text-slate-400 relative z-10">Instantly decode your vehicle's VIN to access exact specifications, recall information, and compatible parts.</p>

              <div className="mt-8 bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20 relative z-10 text-center">
                <div className="text-xs font-mono text-emerald-400">VIN: 1M2AA18CX*******</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Minimal Step-by-Step */}
      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Error to Fixed in Minutes.</h2>
              <p className="text-slate-400 mb-8">The most streamlined car care process ever created. Plug in, tap a button, and get back on the road.</p>
              <Button variant="outline" className="border-cyan-500/50 text-cyan-400">
                See Full Process <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="md:w-2/3 w-full flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
              
              {[
                { label: "Connect OBD", icon: Tool, color: "bg-blue-500" },
                { label: "Scan Data", icon: Activity, color: "bg-cyan-500" },
                { label: "AI Diagnosis", icon: AlertTriangle, color: "bg-purple-500" },
                { label: "Get Fix", icon: Tool, color: "bg-green-500" }
              ].map((step, i) => (
                <motion.div 
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center gap-4 bg-slate-950 px-2"
                >
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-lg shadow-black/50 border-4 border-slate-950`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest text-center whitespace-nowrap hidden sm:block">{step.label}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}