const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          About <span className="text-gradient-saffron">Me</span>
        </h2>
        <div className="w-16 h-1 bg-secondary rounded-full mb-8" />
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Computer Science Engineering student with a strong foundation in C, Java, Python, and backend systems. 
          Aspiring Software Developer focused on building scalable backend architectures and leveraging cloud technologies 
          to create impactful solutions. Passionate about clean code, system design, and continuous learning.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
