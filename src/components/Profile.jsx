function Profile({ content }) {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-accent text-3xl font-bold mb-12">{content.title}</h2>
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-6">{content.basicTitle}</h3>
            <ul className="flex flex-col gap-4">
              {content.basicInfo.map((info) => (
                <li key={info.id} className="grid grid-cols-2 gap-4">
                  <span className="text-accent text-sm font-semibold">{info.label}</span>
                  <span className="text-white text-sm">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={content.image} alt="Çalışırken bir fotoğrafım" className="w-56 h-56 object-cover rounded-lg" />
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-6">{content.aboutTitle}</h3>
            <p className="text-white text-sm leading-6">{content.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;