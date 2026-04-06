import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Development",
    company: "EduSkills AICTE",
    period: "Feb 2026 – Apr 2026",
    type: "Internship",
  },
  {
    role: "Java Workshop",
    company: "Hands-on Training",
    period: "2025",
    type: "Workshop",
  },
  {
    role: "Backend & Cloud Training",
    company: "Backend Development & Cloud Fundamentals",
    period: "Mar 2026",
    type: "Training",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Work <span className="text-gradient-saffron">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-secondary rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-card border-2 border-secondary" />
                
                <div className="gradient-border rounded-xl p-5 transition-all duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
                        {exp.type}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
