function Skills({ content }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <h2 className="text-primary text-3xl font-bold w-48 shrink-0">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-12 flex-1">
          {content.items.map((skill) => (
            <div key={skill.id} className="flex items-center gap-6">
              <img src={skill.logo} alt={skill.name} className="w-24 h-24 rounded-xl" />
              <p className="text-gray-500 font-semibold tracking-wide">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;