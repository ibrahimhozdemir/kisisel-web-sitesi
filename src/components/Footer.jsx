const icons = {
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </>
  ),
  mail: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
};

function Footer({ content }) {
  return (
    <footer className="bg-footer-bg dark:bg-dark-bg py-24">
      <div className="max-w-[960px] mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <h2 className="text-primary dark:text-toggle text-5xl font-bold">{content.title}</h2>
        <p className="text-dark-navy dark:text-white text-2xl leading-[1.5] max-w-[448px]">
          {content.text}
        </p>
        <a href={`mailto:${content.email}`} className="text-primary dark:text-toggle text-xl font-medium underline tracking-[0.05em]">
          {content.email}
        </a>
        <div className="flex gap-6">
          {content.socials.map((social) => (
            <a key={social.id} href={social.link} target="_blank" rel="noreferrer" aria-label={social.name}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[35px] h-[35px] text-primary">
                {icons[social.name]}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;