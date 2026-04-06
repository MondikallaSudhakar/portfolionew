const skills = [
  {
    category: "Languages",
    items: ["C", "Java", "Python"],
    color: "primary" as const,
  },
  {
    category: "Backend",
    items: ["Spring Boot"],
    color: "secondary" as const,
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "JavaScript"],
    color: "accent" as const,
  },
  {
    category: "Database",
    items: ["MySQL"],
    color: "primary" as const,
  },
  {
    category: "Tools",
    items: ["Git", "GitHub"],
    color: "secondary" as const,
  },
  {
    category: "OS",
    items: ["Linux", "Windows"],
    color: "accent" as const,
  },
];

const colorMap = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/20", glow: "glow-green" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20", glow: "glow-saffron" },
  accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/20", glow: "glow-blue" },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Technical <span className="text-gradient-green">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => {
            const c = colorMap[skill.color];
            return (
              <div
                key={skill.category}
                className={`gradient-border rounded-xl p-5 hover:${c.glow} transition-all duration-400 group`}
              >
                <h3 className={`font-mono text-sm font-semibold ${c.text} mb-3 tracking-wider uppercase`}>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md ${c.bg} ${c.text} border ${c.border} transition-colors duration-300`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
