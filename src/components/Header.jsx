import { useApp } from "../context/AppContext";

function Header({ content }) {
  const { theme, dispatch } = useApp();

  return (
    <header className="relative z-10 w-[66.67%] h-[72px] mx-auto flex items-center">
      <span className="text-lime text-[32px] font-bold">{content.logo}</span>
      <button
        onClick={() => dispatch({ type: "TOGGLE_LANGUAGE" })}
        className="absolute right-[20%] font-bold text-[15px] tracking-[0.1em] uppercase whitespace-nowrap pr-4"
      >
        {content.langButton.map((part, i) => (
          <span
            key={i}
            className={
              part.type === "highlight"
                ? theme === "light"
                  ? "text-lang-highlight"
                  : "text-dark-lang-highlight"
                : theme === "light"
                ? "text-light-gray"
                : "text-muted"
            }
          >
            {part.text}
          </span>
        ))}
      </button>
      <div className="absolute left-[81.5%] flex items-center gap-4 whitespace-nowrap">
        <div
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          className={`w-[55px] h-[24px] rounded-full relative cursor-pointer shrink-0 transition-colors duration-200 ${
            theme === "light" ? "bg-toggle" : "bg-dark-toggle-track"
          }`}
        >
          {theme === "light" ? (
            <span className="w-[16px] h-[16px] rounded-full bg-accent absolute right-1 top-1"></span>
          ) : (
            <>
              <span className="w-[15px] h-[16px] rounded-full bg-accent absolute left-[5px] top-1"></span>
              <span className="w-[13px] h-[13px] rounded-full bg-dark-toggle-track absolute left-[11px] top-[5px]"></span>
            </>
          )}
        </div>
        <span
          className={`font-bold text-[15px] tracking-[0.1em] ${
            theme === "light" ? "text-primary" : "text-light-gray"
          }`}
        >
          {theme === "light" ? content.themeDark : content.themeLight}
        </span>
      </div>
    </header>
  );
}

export default Header;