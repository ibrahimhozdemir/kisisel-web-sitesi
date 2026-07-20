import { useApp } from "../context/AppContext";

function Header({ content }) {
  const { theme, dispatch } = useApp();

  return (
    <header className="relative z-10 w-[66.67%] h-[72px] mx-auto flex items-center">
      <span className="text-lime text-[32px] font-bold">{content.logo}</span>
      <button
        onClick={() => dispatch({ type: "TOGGLE_LANGUAGE" })}
        className="absolute right-[20%] text-lime font-bold text-[15px] tracking-[0.1em] uppercase whitespace-nowrap pr-4"
      >
        {content.langButton}
      </button>
      <div className="absolute left-[81.5%] flex items-center gap-4 whitespace-nowrap">
        <div
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          className="w-[55px] h-[24px] rounded-full bg-toggle relative cursor-pointer shrink-0"
        >
          <span className="w-[16px] h-[16px] rounded-full bg-accent absolute right-1 top-1"></span>
        </div>
        <span className="text-primary font-bold text-[15px] tracking-[0.1em]">
          {theme === "light" ? content.themeDark : content.themeLight}
        </span>
      </div>
    </header>
  );
}

export default Header;