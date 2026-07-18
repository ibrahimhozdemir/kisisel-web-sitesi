function Header({ content }) {
  return (
    <header className="relative z-10 max-w-5xl mx-auto flex items-center justify-between px-6 pt-8">
      <span className="text-primary-light text-3xl font-bold">
        {content.logo}
      </span>
      <nav className="flex items-center gap-6">
        <button className="text-primary font-bold text-sm tracking-wider">
          {content.langButton}
        </button>
      </nav>
    </header>
  );
}

export default Header;