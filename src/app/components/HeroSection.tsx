import { motion } from "motion/react";
import { Button } from "./UI";
import { ChevronRight, PlayCircle, ShieldCheck, Activity, Brain } from "lucide-react";

export function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1768760819947-f6772ae3f433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwY2FyJTIwZGFzaGJvYXJkJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyODEwMDU1fDA&ixlib=rb-4.1.0&q=80&w=1920" 
          alt="Modern car dashboard" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950 z-10" />
      </div>

      {/* Animated Glowing Grid/Lines Effect */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ y: ["0%", "100%", "0%"] }} 
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_100%)]" />
      </div>

      <div className="relative z-20 max-w-6xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            AI-POWERED DIAGNOSTICS
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Understand Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Car. Instantly.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-light">
            AutoXpert uses advanced AI to translate complex vehicle fault codes and data into simple, actionable insights. No mechanic degree required.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button 
              variant="primary" 
              className="text-base px-8 py-4"
              onClick={scrollToFeatures}
            >
              <PlayCircle className="w-5 h-5 mr-2" /> Explore Features
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-500" /> Guaranteed Accuracy
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" /> Real-time Data
            </div>
          </div>
        </motion.div>

        {/* Floating UI Mockup Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="relative lg:h-[600px] flex justify-center items-center mt-12 lg:mt-0"
        >
          <div className="relative w-[300px] sm:w-[320px] h-[640px]">
            {/* Main Phone Frame */}
            <div className="absolute inset-0 bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden flex flex-col items-center">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />
            
            {/* App UI Header */}
            <div className="w-full pt-14 pb-6 px-6 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-white/5 flex justify-between items-center z-20">
               <div>
                 <p className="text-xs text-slate-400 font-medium">Vehicle Status</p>
                 <h3 className="text-lg font-bold text-white whitespace-nowrap">BMW M5 CS</h3>
               </div>
               <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                 <span className="text-green-400 font-bold text-sm">98%</span>
               </div>
            </div>

            {/* Scanning Animation Body */}
            <div className="flex-1 w-full bg-slate-950 relative flex flex-col items-center justify-center p-6">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="w-48 h-48 rounded-full border border-cyan-500/20 flex items-center justify-center relative shadow-[inset_0_0_30px_rgba(6,182,212,0.1)]"
               >
                 <motion.div 
                   animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl"
                 />
                 <div className="w-32 h-32 rounded-full border-2 border-dashed border-blue-500/40 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm z-10">
                   <Activity className="w-12 h-12 text-cyan-400" />
                 </div>
               </motion.div>
               
               <div className="mt-8 text-center space-y-2">
                 <p className="text-cyan-400 font-mono text-sm tracking-widest">SCANNING OBD-II...</p>
                 <p className="text-slate-400 text-xs">Analyzing 1,204 data points</p>
               </div>
               
               {/* Animated Data Rows */}
               <div className="absolute bottom-6 inset-x-6 space-y-3">
                 {[1,2,3].map((i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1 + i*0.2, repeat: Infinity, repeatDelay: 5 }}
                     className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 justify-between"
                   >
                     <div className="flex gap-3 items-center">
                       <div className="w-2 h-2 rounded-full bg-cyan-400" />
                       <div className="h-2 w-24 bg-white/20 rounded-full" />
                     </div>
                     <div className="text-xs font-mono text-cyan-500">OK</div>
                   </motion.div>
                 ))}
               </div>
            </div>
            
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating Diagnostic Cards */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-4 sm:-right-10 lg:-right-16 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 sm:gap-4 z-30 scale-90 sm:scale-100 origin-right"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <span className="text-red-400 font-bold font-mono text-xs sm:text-sm">P0300</span>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400">Fault Detected</p>
              <p className="text-xs sm:text-sm text-white font-semibold whitespace-nowrap">Engine Misfire</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -left-4 sm:-left-10 lg:-left-12 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 sm:gap-4 z-30 scale-90 sm:scale-100 origin-left"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400">AI Solution</p>
              <p className="text-xs sm:text-sm text-white font-semibold whitespace-nowrap">Check Spark Plugs</p>
            </div>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}