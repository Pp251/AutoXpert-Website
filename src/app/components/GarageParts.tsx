import { motion } from "motion/react";
import { MapPin, Star, Clock, Navigation, Wrench, Tag, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./UI";

const garages = [
  { name: "Apex Auto Care", rating: 4.9, reviews: 342, distance: "1.2 mi", status: "Open Now", specialize: ["European", "Diagnostics"] },
  { name: "City Center Mechanics", rating: 4.7, reviews: 189, distance: "2.5 mi", status: "Closes 6PM", specialize: ["General", "Brakes"] },
  { name: "Precision Tuning", rating: 4.8, reviews: 520, distance: "3.8 mi", status: "Open Now", specialize: ["Performance", "Engine"] },
];

const parts = [
  { name: "Bosch Mass Air Flow Sensor", oem: "OEM Part #284759", price: 458.70, rating: 4.8, vendor: "AutoZone", stock: "In Stock" },
  { name: "Denso Mass Air Flow Sensor", oem: "Aftermarket #D194", price: 328.45, rating: 4.5, vendor: "RockAuto", stock: "Ships Tomorrow" },
  { name: "ACDelco Original Equipment", oem: "OEM Part #84820", price: 532.15, rating: 4.9, vendor: "Amazon", stock: "Prime Delivery" },
];

export function GarageParts() {
  return (
    <>
      {/* List of Garages Near You Section */}
      <section id="garages" className="py-24 bg-slate-950 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.05)_0,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold tracking-wide mb-6">
              <MapPin className="w-4 h-4" /> LOCAL EXPERTS
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Find Top-Rated <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">
                Mechanics Instantly
              </span>
            </motion.h2>
            <p className="text-lg text-slate-400 mb-8 max-w-lg">
              Share your AI diagnostic report directly with trusted local garages. Get accurate quotes before you even leave your driveway.
            </p>
            <Button variant="outline" className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10">
              Explore Garages <Navigation className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="relative h-[500px] w-full bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
            <div className="h-48 bg-slate-800 relative">
              {/* Fake Map Background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1549047608-55b2fd4b8427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWNoYW5pYyUyMGdhcmFnZSUyMGRhcmt8ZW58MXx8fHwxNzcyODEwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              {/* Map Pin */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.5)] border-4 border-slate-900 relative z-10 text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="w-4 h-4 bg-pink-500/30 rounded-full blur-sm mx-auto mt-2 absolute -bottom-4 left-1/2 -translate-x-1/2 animate-pulse" />
              </motion.div>
            </div>
            
            <div className="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar">
              {garages.map((garage, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={garage.name}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                    <Wrench className="w-8 h-8 text-pink-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-bold">{garage.name}</h4>
                      <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-1 rounded-md">{garage.distance}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-4 h-4 fill-current" /> {garage.rating}
                      </div>
                      <span className="w-1 h-1 bg-slate-600 rounded-full" />
                      <span>{garage.reviews} reviews</span>
                    </div>
                    <div className="flex gap-2">
                      {garage.specialize.map(s => (
                        <span key={s} className="text-[10px] font-semibold tracking-wider uppercase text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parts Comparison Section */}
      <section id="parts" className="py-24 bg-slate-900 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.05)_0,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Order flipped for visual variety */}
          <div className="order-2 lg:order-1 relative h-[500px] w-full bg-slate-950 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
            <div className="p-6 border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-20 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold">Mass Air Flow Sensor</h3>
                <p className="text-xs text-slate-400">Fits 2022 BMW M5 CS</p>
              </div>
              <div className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/30">
                3 Options Found
              </div>
            </div>
            
            <div className="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar bg-slate-950">
              {parts.map((part, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={part.vendor}
                  className="bg-slate-900 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/50 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{part.name}</h4>
                      <p className="text-xs text-slate-500 font-mono">{part.oem}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">AED {part.price.toFixed(2)}</div>
                      <div className="text-xs text-green-400 flex items-center justify-end gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {part.stock}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                        {part.vendor[0]}
                      </div>
                      <span className="text-sm text-slate-300">{part.vendor}</span>
                    </div>
                    <Button variant="primary" className="py-1.5 px-4 text-xs from-indigo-500 to-purple-600 shadow-indigo-500/20 border-indigo-400/20">
                      Buy Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide mb-6">
              <Tag className="w-4 h-4" /> SMART MARKETPLACE
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Find the Right Part <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
                At the Right Price
              </span>
            </motion.h2>
            <p className="text-lg text-slate-400 mb-8 max-w-lg">
              Never overpay for car parts again. AutoXpert instantly compares prices across major retailers for the exact part you need based on your diagnostic results.
            </p>
            <Button variant="outline" className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10">
              Browse Parts Catalog <Navigation className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </>
  );
}
