import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Cpu, Activity, Brain, CheckCircle, Smartphone } from "lucide-react";
import { cn } from "../../lib/utils";

const steps = [
  {
    title: "1. Connect OBD Scanner",
    desc: "Plug your scanner into your car's port under the dashboard. Connect via Bluetooth instantly.",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "2. Scan Vehicle Data",
    desc: "AutoXpert reads thousands of real-time metrics, sensors, and hidden fault codes.",
    icon: Activity,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "3. AI Interprets the Fault",
    desc: "Google Gemini powered AI analyzes the data against millions of mechanic records.",
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "4. Get a Simple Explanation",
    desc: "Understand what's wrong in plain English, with exact fix recommendations and costs.",
    icon: CheckCircle,
    color: "text-green-400",
    bg: "bg-green-500/10",
  }
];

export function AIDiagnosticsExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const step = Math.min(Math.floor(v * 4), 3);
      if (step !== activeStep) setActiveStep(step);
    });
  }, [scrollYProgress, activeStep]);

  return (
    <section ref={containerRef} id="diagnostics" className="py-32 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Ultimate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              AI Diagnostics Experience
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Step Texts */}
          <div className="space-y-12 h-[600px] flex flex-col justify-center">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div 
                  key={step.title}
                  className={cn(
                    "flex gap-6 transition-all duration-500",
                    isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"
                  )}
                >
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-white/10", step.bg)}>
                    <step.icon className={cn("w-8 h-8", step.color)} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-lg text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Sticky UI Mockup */}
          <div className="relative h-[600px] flex justify-center items-center">
            <div className="w-[340px] h-[700px] bg-slate-950 border-[10px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden relative">
              {/* Status Bar */}
              <div className="h-12 w-full bg-slate-900 flex justify-between items-center px-6">
                 <div className="w-1/3 text-xs font-bold text-white">9:41</div>
                 <div className="w-1/3 flex justify-center"><div className="w-16 h-4 bg-black rounded-full" /></div>
                 <div className="w-1/3 flex justify-end gap-1"><div className="w-4 h-3 bg-white" /></div>
              </div>

              {/* Dynamic Content based on activeStep */}
              <div className="p-6 h-full relative overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  {/* Step 0: Connect */}
                  {activeStep === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-32 h-32 rounded-full border-4 border-dashed border-blue-500/50 flex items-center justify-center"
                      >
                        <Cpu className="w-12 h-12 text-blue-400" />
                      </motion.div>
                      <h4 className="text-white text-xl font-bold mt-8">Looking for OBD II...</h4>
                      <p className="text-slate-400 text-sm mt-2">Turn on ignition</p>
                    </motion.div>
                  )}

                  {/* Step 1: Scan */}
                  {activeStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      className="absolute inset-0 p-6 flex flex-col"
                    >
                      <h4 className="text-white font-bold mb-6">Live Data Stream</h4>
                      <div className="space-y-4">
                        {[
                          { label: "Engine RPM", val: "2,450", unit: "rpm", color: "text-cyan-400" },
                          { label: "Coolant Temp", val: "198", unit: "°F", color: "text-orange-400" },
                          { label: "Mass Air Flow", val: "14.2", unit: "g/s", color: "text-blue-400" },
                          { label: "Throttle Pos", val: "24", unit: "%", color: "text-green-400" },
                        ].map((m, i) => (
                          <motion.div 
                            key={m.label}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-slate-900 rounded-xl p-4 flex justify-between items-center border border-white/5"
                          >
                            <span className="text-slate-400">{m.label}</span>
                            <div className="text-right">
                              <span className={cn("text-xl font-bold font-mono", m.color)}>{m.val}</span>
                              <span className="text-xs text-slate-500 ml-1">{m.unit}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Animated Chart Line */}
                      <div className="mt-auto h-32 w-full border-b border-white/10 relative overflow-hidden flex items-end">
                        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                          <motion.path 
                            d="M0,40 Q10,20 20,40 T40,20 T60,30 T80,10 T100,20 L100,50 L0,50 Z" 
                            fill="rgba(6,182,212,0.1)" 
                          />
                          <motion.path 
                            d="M0,40 Q10,20 20,40 T40,20 T60,30 T80,10 T100,20" 
                            stroke="#22d3ee" 
                            strokeWidth="2" 
                            fill="none" 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </svg>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: AI Interprets */}
                  {activeStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-purple-950/20"
                    >
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 rounded-full border-t-2 border-r-2 border-purple-400 flex items-center justify-center mb-8"
                      >
                        <Brain className="w-10 h-10 text-purple-400" />
                      </motion.div>
                      <div className="bg-slate-900/80 backdrop-blur border border-purple-500/20 rounded-2xl p-6 w-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-mono font-bold text-xs">P0171</div>
                          <div className="text-white font-semibold">System Too Lean</div>
                        </div>
                        <p className="text-purple-300/80 text-sm font-mono typing-effect overflow-hidden border-r-2 border-purple-400 whitespace-nowrap">
                          AI analyzing parameters...
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Explanation */}
                  {activeStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      className="absolute inset-0 p-6 flex flex-col"
                    >
                      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle className="w-8 h-8 text-green-400" />
                          <h4 className="text-white font-bold text-lg">Diagnosis Complete</h4>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          Your engine is getting too much air and not enough fuel. This is usually caused by a dirty Mass Air Flow (MAF) sensor or a vacuum leak.
                        </p>
                        <div className="bg-slate-900 rounded-xl p-4 border border-white/5">
                          <div className="text-xs text-slate-500 mb-1">Recommended Fix</div>
                          <div className="text-white font-semibold flex justify-between">
                            <span>Clean/Replace MAF Sensor</span>
                            <span className="text-green-400">AED 310 - AED 440</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-4">
                        <button className="bg-slate-800 text-white rounded-xl py-3 text-sm font-semibold hover:bg-slate-700">Find Parts</button>
                        <button className="bg-cyan-500 text-white rounded-xl py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20">Book Mechanic</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global CSS for typing effect inside this component's scope but better to use keyframes */}
      <style>{`
        .typing-effect {
          animation: typing 2s steps(40, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #c084fc; }
        }
      `}</style>
    </section>
  );
}
