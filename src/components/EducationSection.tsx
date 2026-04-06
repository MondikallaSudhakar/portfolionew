import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "MITS Madanapalle",
    period: "2024 – 2028",
    score: "CGPA: 9.4",
  },
  {
    degree: "Intermediate",
    institution: "Narayana Jr College",
    period: "",
    score: "96%",
  },
  {
    degree: "SSC",
    institution: "Z.P.H School",
    period: "",
    score: "80%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-gradient-blue">Education</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="grid gap-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className="gradient-border rounded-xl p-5 flex items-center justify-between flex-wrap gap-4 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}{edu.period && ` · ${edu.period}`}</p>
                </div>
              </div>
              <span className="text-sm font-mono font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20">
                {edu.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
