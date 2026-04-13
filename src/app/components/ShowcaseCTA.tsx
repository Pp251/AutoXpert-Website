import { motion } from "framer-motion";
import { Download, Rocket } from "lucide-react";
import whatsappImg1 from "../../imports/WhatsApp_Image_2026-04-13_at_1.31.43_PM.jpeg";
import whatsappImg2 from "../../imports/WhatsApp_Image_2026-04-13_at_1.31.46_PM.jpeg";
import { Button, Logo } from "./UI";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ShowcaseCTA() {
  return (
    <>
      {/* Product UI Showcase */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/10 blur-[150px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Designed for clarity. <br className="hidden md:block"/>Built for performance.</h2>
        </div>

        {/* Real App Screenshots */}
        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[300px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_0_60px_rgba(6,182,212,0.2)] border-8 border-slate-800">
                <ImageWithFallback
                  src={whatsappImg1}
                  alt="Live Diagnostics Screen"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[300px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_0_60px_rgba(6,182,212,0.2)] border-8 border-slate-800">
                <ImageWithFallback
                  src={whatsappImg2}
                  alt="Nearby Garages Screen"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative h-[600px] w-full max-w-7xl mx-auto px-6 flex justify-center items-end pb-12">
          {/* Mockup 2: Main App (Center) */}
          <motion.div 
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: -50, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60 }}
            className="relative z-20 w-[300px] md:w-[340px] h-[600px] bg-slate-950 border-[8px] border-slate-800 rounded-[3rem] shadow-[0_0_80px_rgba(6,182,212,0.15)] flex flex-col items-center p-4 overflow-hidden"
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />
            
            <div className="w-full h-full pt-10 flex flex-col">
              <div className="text-center mb-6">
                <p className="text-xs text-slate-400 uppercase tracking-widest">Diagnostic Report</p>
                <h3 className="text-2xl font-bold text-white mt-1">Found 2 Issues</h3>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded-md">HIGH PRIORITY</span>
                  <span className="text-xs font-mono text-slate-400">P0300</span>
                </div>
                <h4 className="text-white font-semibold">Engine Misfire Detected</h4>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded-md">WARNING</span>
                  <span className="text-xs font-mono text-slate-400">P0420</span>
                </div>
                <h4 className="text-white font-semibold">Catalyst System Efficiency</h4>
              </div>
              
              <div className="mt-auto space-y-3">
                <button className="w-full bg-cyan-500 text-white rounded-xl py-4 font-bold">Ask AI Mechanic</button>
                <button className="w-full bg-slate-900 text-white border border-white/10 rounded-xl py-4 font-bold">Find Parts</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision CTA */}
      <section className="py-32 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_70%)] blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(6,182,212,0.4)]"
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight"
          >
            Take Control of Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Car's Health.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of smart drivers who are saving money and preventing breakdowns with AI-powered diagnostics.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <Button variant="primary" className="w-full sm:w-auto px-8 py-5 text-lg rounded-2xl">
              <Download className="w-6 h-6 mr-2" /> Download App
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <Logo className="mb-6" />
              <p className="text-slate-400 mb-8 max-w-xs">
                Empowering drivers with intelligent, instant, and accessible vehicle diagnostics. Never guess what's wrong with your car again.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors cursor-pointer text-slate-400">
                    <span className="sr-only">Social {i}</span>
                    <div className="w-4 h-4 bg-current rounded-sm" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Diagnostics</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">List of Garages</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Parts Marketplace</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Technology</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">OBD Scanner Support</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI & Machine Learning</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API Integration</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Developer Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} AutoXpert Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
