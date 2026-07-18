import { data } from "./data/data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer"

function App() {
  const content = data.tr;

  return (
    <main>
      <div className="bg-primary relative">
        <div className="absolute top-0 right-0 h-full w-[30%] bg-primary-light hidden md:block"></div>
        <Header content={content.header} />
        <Hero content={content.hero} />
      </div>
      <Skills content={content.skills} />
      <Profile content={content.profile}/>
      <Projects content={content.projects} />
      <Footer content={content.footer} />
    </main>
  );
}

export default App;