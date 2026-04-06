import { Award, Trophy } from "lucide-react";

const certifications = [
  { title: "Computer Society of India (CSI)", type: "Membership", icon: "award" },
  { title: "CodeFest Hackathon Winner (2024)", type: "Achievement", icon: "trophy" },
  { title: "Smart India Hackathon Participant", type: "Achievement", icon: "trophy" },
  { title: "SIH College Level Winner", type: "Achievement", icon: "trophy" },
  { title: "Acquiring Data by Accenture", type: "Certification", icon: "award" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Certifications & <span className="text-gradient-green">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="gradient-border rounded-xl p-5 flex items-start gap-4 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                {cert.icon === "trophy" ? (
                  <Trophy className="w-4.5 h-4.5 text-secondary" />
                ) : (
                  <Award className="w-4.5 h-4.5 text-secondary" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-foreground text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1">{cert.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
