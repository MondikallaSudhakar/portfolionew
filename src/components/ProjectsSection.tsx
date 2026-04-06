import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Backend E-Commerce System",
    description: "Developed backend functionalities for an e-commerce platform with product management, order processing, and database integration using MySQL.",
    tags: ["Java", "MySQL", "Backend"],
    color: "primary" as const,
  },
  {
    title: "Ambulance to Signal Communication",
    description: "Built a system enabling real-time communication between ambulances and traffic signals to reduce emergency response time. Smart India Hackathon project.",
    tags: ["IoT", "Real-time", "SIH"],
    color: "secondary" as const,
  },
  {
    title: "Student Feedback Portal",
    description: "Developed an anonymous feedback platform using HTML, CSS, JavaScript and Firebase for secure, real-time data management.",
    tags: ["HTML", "CSS", "JS", "Firebase"],
    color: "accent" as const,
  },
];

const colorMap = {
  primary: { border: "hover:border-primary/50", tag: "bg-primary/10 text-primary border-primary/20" },
  secondary: { border: "hover:border-secondary/50", tag: "bg-secondary/10 text-secondary border-secondary/20" },
  accent: { border: "hover:border-accent/50", tag: "bg-accent/10 text-accent border-accent/20" },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Featured <span className="text-gradient-blue">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="grid gap-6">
          {projects.map((project) => {
            const c = colorMap[project.color];
            return (
              <div
                key={project.title}
                className={`gradient-border rounded-xl p-6 border border-border ${c.border} transition-all duration-400 group`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-xs font-mono font-medium rounded-md border ${c.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300 shrink-0 mt-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
