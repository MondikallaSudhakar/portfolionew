import { Mail, Phone, Github, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220,15%,18%)_1px,transparent_1px),linear-gradient(90deg,hsl(220,15%,18%)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          &lt;Hello World /&gt;
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Mondi Kalla{" "}
          <span className="text-gradient-green">Sudhakar</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          Aspiring Software Developer · Backend & Cloud Enthusiast
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a href="mailto:mondikallasudhakar15@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            <Mail className="w-4 h-4" /> mondikallasudhakar15@gmail.com
          </a>
          <span className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground" />
          <a href="tel:+919494005159" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors duration-300">
            <Phone className="w-4 h-4" /> +91 9494005159
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.65s" }}>
          <a
            href="https://github.com/MondikallaSudhakar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:glow-green transition-all duration-300 text-sm font-medium"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/mondikalla-sudhakar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card border border-border text-foreground hover:border-accent hover:glow-blue transition-all duration-300 text-sm font-medium"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
