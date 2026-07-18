function Projects({ content }) {
  return (
    <section className="bg-primary-light py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-primary text-3xl font-bold mb-12">{content.title}</h2>
        <div className="flex flex-col gap-12">
          {content.items.map((project) => (
            <article key={project.id} className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full md:w-80 h-56 md:h-auto object-cover" />
              <div className="p-8 flex-1">
                <h3 className="text-primary text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-600 text-sm leading-6 mb-6">{project.description}</p>
                <div className="flex gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={project.siteLink} target="_blank" rel="noreferrer" className="text-primary font-semibold underline">
                    {project.siteText}
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-primary font-semibold underline">
                    {project.githubText}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;