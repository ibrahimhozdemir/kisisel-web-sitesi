function Profile({ content }) {
  return (
    <section className="bg-primary dark:bg-dark-section py-24">
      <div className="max-w-[960px] mx-auto px-6">
        <h2 className="text-lime text-5xl font-bold mb-12">{content.title}</h2>
        <div className="flex flex-col md:flex-row items-start gap-[30px]">
          <div className="w-full md:w-[300px] shrink-0">
            <h3 className="text-white text-3xl font-medium mb-8">{content.basicTitle}</h3>
            <ul className="flex flex-col gap-6">
              {content.basicInfo.map((info) => (
                <li key={info.id} className="flex flex-col gap-1">
                  <span className="text-lime text-base font-semibold">{info.label}</span>
                  <span className="text-white text-base font-normal">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={content.image}
            alt={content.imageAlt}
            className="w-[300px] h-[290px] object-cover rounded-[10px] shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14),0_8px_28px_-6px_rgba(24,39,75,0.12)]"
          />
          <div className="flex-1">
            <h3 className="text-white text-3xl font-medium mb-8">{content.aboutTitle}</h3>
            <p className="text-white text-lg font-normal leading-[1.5]">{content.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;