function Skills({ content }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row gap-16">
        <h2 className="text-primary text-5xl font-bold w-[290px] shrink-0">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-[35px] flex-1">
          {content.items.map((skill) => (
            <div key={skill.id} className="flex items-center gap-6">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-[120px] h-[120px] rounded-md shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14),0_8px_28px_-6px_rgba(24,39,75,0.12)]"
              />
              <p className="text-muted text-2xl font-medium uppercase">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;