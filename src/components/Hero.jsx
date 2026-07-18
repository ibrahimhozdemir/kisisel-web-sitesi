function Hero({ content }) {
  return (
    <section className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-16 md:py-24">
      <div className="flex-1">
        <h1 className="text-primary-light text-4xl md:text-5xl font-bold leading-tight">
          {content.title}
        </h1>
        <p className="text-white text-lg mt-6 max-w-md">{content.description}</p>
        <div className="flex gap-4 mt-8">
          {content.buttons.map((button) => (
            <a key={button.id} href={button.link} target="_blank" rel="noreferrer" className="bg-white text-primary font-semibold px-4 py-2 rounded-md">
              {button.text}
            </a>
          ))}
        </div>
      </div>
      <img src={content.image} alt="Profil fotoğrafım" className="w-72 h-80 object-cover rounded-2xl shadow-lg" />
    </section>
  );
}

export default Hero;