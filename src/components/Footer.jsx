const icons = {
  twitter: (
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  ),
  codepen: (
    <>
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="22" x2="12" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" y1="2" x2="12" y2="8.5" />
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
    <footer className="bg-footer-bg py-24">
      <div className="max-w-[960px] mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <h2 className="text-primary text-5xl font-bold">
          {content.title}
        </h2>

        <p className="text-dark-navy text-2xl leading-[1.5] max-w-[448px]">
          {content.text}
        </p>

        <a
          href={`mailto:${content.email}`}
          className="text-primary text-xl font-medium underline tracking-[0.05em]"
        >
          {content.email}
        </a>

        <div className="flex gap-6">
          {content.socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[35px] h-[35px] text-primary"
              >
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