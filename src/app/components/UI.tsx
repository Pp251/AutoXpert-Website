import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { Sparkles, Brain, Cpu, Search, CalendarClock, MapPin, Gauge } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Abstract A shape resembling a sleek car profile */}
      <path d="M50 15 L85 85 L65 85 L50 50 L35 85 L15 85 Z" fill="url(#logo-grad)" />
      
      {/* Central diagnostic node */}
      <circle cx="50" cy="50" r="12" fill="#0f172a" stroke="url(#logo-grad)" strokeWidth="4" filter="url(#glow)" />
      <circle cx="50" cy="50" r="4" fill="#22d3ee" />
      
      {/* Connecting circuit lines */}
      <path d="M50 15 L50 38" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 62 L50 85" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" />
    </svg>
    <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
      Auto<span className="text-cyan-400 font-extrabold">X</span>pert
    </span>
  </div>
);

export const Button = ({ 
  children, 
  variant = "primary", 
  className,
  ...props
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 active:scale-95";
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-400/20",
    secondary: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20",
    outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };
  
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
