function Projects({ content }) {
  return (
    <section className="bg-lime dark:bg-dark-projects-bg py-24">
      <div className="max-w-[960px] mx-auto px-6">
        <h2 className="text-primary dark:text-lime text-5xl font-bold mb-12">
          {content.title}
        </h2>

        <div className="flex flex-col gap-12">
          {content.items.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-dark-card rounded-xl shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14),0_8px_28px_-6px_rgba(24,39,75,0.12)] flex flex-col md:flex-row overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-[360px] h-56 md:h-[360px] object-cover border-b md:border-b-0 md:border-r border-card-border"
              />

              <div className="p-8 flex-1 flex flex-col gap-6">
                <h3 className="text-indigo-700 dark:text-dark-card-title text-[32px] font-bold">
                  {project.name}
                </h3>

                <p className="text-text-body dark:text-white text-base leading-[1.25]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary dark:bg-dark-tag text-white text-sm font-medium px-[18px] py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark-navy dark:text-lime text-base font-medium underline"
                  >
                    {project.siteText}
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark-navy dark:text-lime text-base font-medium underline"
                  >
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